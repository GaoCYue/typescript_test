const targetMap = new WeakMap<Object, Map<String, Set<Function>>>()
let activeEffect: Function = null
function track(target: Object, key: string) {
    if (!activeEffect) return
    if (!targetMap.has(target)) {
        targetMap.set(target, new Map())
    }
    const depsMap = targetMap.get(target)
    if (!depsMap.has(key)) {
        depsMap.set(key, new Set())
    }
    const dep = depsMap.get(key)
    dep.add(activeEffect)
}

function trigger(target: Object, key: string) {
    if (!targetMap.has(target)) return
    const depsMap = targetMap.get(target)
    if (depsMap.has(key)) {
        const dep = depsMap.get(key)
        dep.forEach(effect => {effect()})
    }
}


function reactive (target: Object) {
    const handler = {
        get (target, key, receiver) {
            const result = Reflect.get(target, key, receiver)
            track(target, key)
            return result
        },
        set (target, key, value, receiver) {
            const oldValue = target[key]
            const result = Reflect.set(target, key, value, receiver)
            if (oldValue !== result) {
                trigger(trigger, key)
            }
            return result
        }
    }
    return new Proxy(target, handler)
}

function effect (eff: Function) {
    activeEffect = eff
    activeEffect()
    activeEffect = null
}

function ref (raw?: any) {
    const r = {
        get value () {
            track(r, 'value')
            return raw
        },
        set value (newVal) {
            raw = newVal
            trigger(r, 'value')
        }
    }
    return r
}


function computed (getter) {
    const result = ref()

    effect(()=>{result.value = getter()})

    return result
}
/**
 * 1. 函数名称变化的原因
 * 2. ref 使用访问器属性来实现
 *     1. 可以限制ref对象只有一个value属性
 *     2. ref上有一些特殊的theme，区分ref和reactive
 * 3. Proxy带来的好处：响应式对象中的属性的响应式可以变得lazy
 */