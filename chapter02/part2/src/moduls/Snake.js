class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    //获取蛇的X轴坐标(蛇头坐标)
    get X() {
        return this.head.offsetLeft;
    }
    //获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头的X轴坐标
    set X(value) {
        this.head.style.left = value + 'px';
    }
    //设置蛇头的Y轴坐标
    set Y(value) {
        this.head.style.top = value + 'px';
    }
    //蛇增加身体方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }
}
export default Snake;
