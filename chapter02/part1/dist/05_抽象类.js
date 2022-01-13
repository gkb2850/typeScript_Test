"use strict";
(function () {
    /**
     * 以abstract开头的类是抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类就是专门用来被继承的类
     *      抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name);
            this.age = age;
        }
        sayHello() {
            //在类的方法中 super就表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 6);
    dog.sayHello();
})();
