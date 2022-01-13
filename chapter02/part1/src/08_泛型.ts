// function fn(a: number): number {
//     return a;
// }

/**
 * 在定义函数或类时，遇到类型不明确就可以使用泛型
 * 
 */

//一个泛型
function fn<K>(a: K): K {
    return a
}

//可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型，TS可以自动对类型进行推断
let result1 = fn<string>('hello');//指定泛型

//多个泛型
function fn2<T, K>(a: T, b: K) {
    console.log(b)
    return a;
}
fn2<number, string>(123, 'hello')

//T extends Inter 表示泛型T必须是Inter实现类(子类)
interface Inter {
    length: number;
}
function fn3<T extends Inter>(a: T): number {
    return a.length
}
fn3({length: 123})

class Myclass<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const mc = new Myclass<string>('孙悟空')