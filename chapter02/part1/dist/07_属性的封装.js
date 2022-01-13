"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法用来读取属性
         * setter方法用来设置属性
         *  -它们成为属性的存取器
         *
         */
        // //定义方法，用来获取name属性
        // getName() {
        //     return this._name;
        // }
        // //定义方法，用来设置name属性
        // setName(value: string) {
        //     this._name = value
        // }
        // getAge() {
        //     return this._age
        // }
        // setAge(value: number) {
        //     if (value >= 0) {
        //         this._age = value
        //     }
        // }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const person = new Person('孙悟空', 18);
    /**
     * 现在的属性是直接在对象中设置的，属性可以任意被修改
     *      属性可以任意被修改将会导致对象中的数据变得非常不安全
     *
     *
     */
    console.log(person);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(6);
    // class C {
    //     public name: string;
    //     public age: number;
    //     constructor(name: string, age: number) {
    //         this.name = name
    //         this.age = age
    //     }
    // }
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 19);
})();
