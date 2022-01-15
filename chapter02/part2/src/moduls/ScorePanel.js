//定义表示记分牌的类
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        //score和level用来记录分数和等级
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    //设置一个加分的方法
    addScore() {
        // 分数自增
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel;
