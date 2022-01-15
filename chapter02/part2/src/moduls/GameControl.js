//引入其他的类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
//游戏控制器，控制其他的所有类
class GameControl {
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    //游戏的初始化方法，调用后游戏开始
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler);
    }
    keydownHandler(event) {
        console.log(event.key);
    }
}
export default GameControl;
