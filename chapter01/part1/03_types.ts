//也可以额直接使用字面量进行类型声明
let a: number;

//可以使用 | 来连接多个类型(联合类型)
let b: 'male' | 'female';
b = 'male'
b = 'female'

let c: boolean | string;
c = true
c = 'true'

//any表示任意类型，一个变量设置为any后，相当于对该变量关闭了TS的类型检测
//使用TS时，不建议使用any类型 
let d: any;
d = 'a';
d = 1;
d = true

//unknown表示未知类型的值
let e: unknown;
e = 10;
e = 'true';
e = true;


let s: string;
// //d的类型是any，它可以赋值给任意变量
// s = d

// e = 'hello'
//unknown实际上是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
// s = e


//类型断言,可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *  变量 as 类型
 *  <类型>变量
 */
s = e as string;
s = <string>e;


//void用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
    return null
}

//never 表示永远不会返回结果
function fn1(): never {
    throw new Error('报错了');
}