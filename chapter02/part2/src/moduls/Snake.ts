class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div')!;
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
    set X(value: number) {
        if(this.X === value) {
            return;
        }
        //X值的合法范围0-290之间
        if (value < 0 || value > 290) {
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        //修改x时，是在修改水平坐标，蛇在左右移动，设在向左移动是， 不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //水平方向发生了掉头
            //如果发生了掉头，就让蛇反方向继续移动
            if (value > this.X) {
                //如果value大于旧值X，这说明蛇向右走，此时发生掉头，应该使蛇继续左走
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        //移动身体
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    //设置蛇头的Y轴坐标
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }
        //Y值的合法范围0-290之间
        if (value < 0 || value > 290) {
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        //修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动是， 不能向下掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //垂直方向发生了掉头
            //如果发生了掉头，就让蛇反方向继续移动
            if (value > this.Y) {
                //如果value大于旧值Y，这说明蛇向下走，此时发生掉头，应该使蛇继续上走
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        //移动身体
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    //蛇增加身体方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    //添加一个蛇身体移动的方法
    moveBody() {
        /**
         * 将后边的身体位置为前边身体的位置
         *      举例子：
         *          第4节 = 第三节的位置
         *          第3节 = 第二节的位置
         *          第2节 = 蛇头的位置
         */
        for(let i = this.bodies.length - 1; i>0; i--) {
            //获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
                
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkHeadBody() {
        //获取所有身体，检查其是否和蛇头的坐标发生重叠
        for(let i =1;i< this.bodies.length;i++) {
            if (this.X === (<HTMLElement>this.bodies[i]).offsetLeft && this.Y === (<HTMLElement>this.bodies[i]).offsetTop) {
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了');
            }
        }
    }
}

export default Snake;