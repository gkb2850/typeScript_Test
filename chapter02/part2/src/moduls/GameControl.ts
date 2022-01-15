//引入其他的类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

//游戏控制器，控制其他的所有类
class GameControl {
    //定义三个属性
    //蛇
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction: string = 'Right';
    //创建一个属性来记录游戏是否结束
    isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()
    }
    //游戏的初始化方法，调用后游戏开始
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        //调用run方法
        this.run()
    }
    keydownHandler(event: KeyboardEvent) {
        /**
         * ArrowUp Up
         * ArrowDown Down
         * ArrowLeft Left
         * ArrowRight Right
         */
        this.direction = event.key;
    }
    //创建一个控制蛇移动的方法
    run() {
        /**
         * 根据方向(this.direction)来使蛇的位置改变
         * 向上top 减少
         * 向下top 增加
         * 向左left 减少
         * 向右left 增加
         */
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction) {
            case: 'ArrowUp':
            case: 'Up':
                Y -= 10;
                break;
            case: 'ArrowDown':
            case: 'Down':
                Y += 10 
                break;
            case: 'ArrowLeft':
            case: 'Left':
                X -= 10
                break;
            case: 'ArrowRight':
            case: 'Right':
                X += 10
                break;
        }
        //修改蛇的X和Y值
        this.snake.X = X
        this.snake.Y = Y
        this.isLive && setTimeout(this.run.bind(this), (300 - (this.scorePanel.level - 1) * 30))
    }
}

export default GameControl