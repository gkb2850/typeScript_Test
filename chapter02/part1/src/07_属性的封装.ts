(function() {
    //定义一个表示人的类
    class Person {
        /**
         * TS在属性前面添加修饰符
         *      public 修饰的属性可以在任意位置访问（修改 默认值）
         *      private 私有属性，私有属性只能在类部进行访问(修改)
         *          -通过类中添加方法使得私有属性可以被外部访问
         *      protected 受保护的属性，只能在当前类和当前子类中访问
         */
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age
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
            return this._name
        }
        set name(value: string) {
            this._name = value
        }
        get age() {
            return this._age
        }
        set age(value: number) {
            if (value >= 0) {
                this._age = value
            }
        }
    }
    const person = new Person('孙悟空', 18)
    /**
     * 现在的属性是直接在对象中设置的，属性可以任意被修改
     *      属性可以任意被修改将会导致对象中的数据变得非常不安全
     * 
     * 
     */
    console.log(person)


    class A {
        protected num: number;
        constructor(num: number) {
            this.num = num
        }
    }

    class B extends A {
        test() {
            console.log(this.num)
        }
    }

    const b = new B(6)

    // class C {
    //     public name: string;
    //     public age: number;
    //     constructor(name: string, age: number) {
    //         this.name = name
    //         this.age = age
    //     }
    // }

    class C {
        constructor(public name: string, public age: number) {}
    }

    const c = new C('xxx', 19)
})()