"use strict";
// function fn(a: number): number {
//     return a;
// }
/**
 * 在定义函数或类时，遇到类型不明确就可以使用泛型
 *
 */
//一个泛型
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型，TS可以自动对类型进行推断
let result1 = fn('hello'); //指定泛型
//多个泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
fn3({ length: 123 });
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new Myclass('孙悟空');
