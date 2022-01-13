"use strict";
(function () {
    const obj = {
        name: '12',
        age: 12,
        gender: ''
    };
    /**
     * 定义类时，可以使类去实现一个接口
     */
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
})();
