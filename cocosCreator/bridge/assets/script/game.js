// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // 桥的节点
        bridge:{
            default:null,
            type:cc.Node
        }
    },

    /**
     * 获取服务器上的游戏分数
     */
    getServerScore: function (){
        // cc.loader.load('http://www.project.com/game/public/index.php/player/v1/getScore', (err, tex) => {
        //     this.scoreDisplay.string = 'Score: ' + JSON.parse(tex).data.score
        //  });
    },
     
    /**
     * 杆子上升的函数
     */
    onLoad () {
        // 更新 scoreDisplay Label 的文字
        this.getServerScore();
        this.node.on(cc.Node.EventType.TOUCH_START,this.changeBridgeHeight, this);
        //this.bridge.setPosition(0,20)
        //console.log(this.bridge.y)
    },

    /**
     * 控制桥面的高度
     */
    changeBridgeHeight:function()
    {
        let height = this.bridge.position.y
        let _this  = this
        // setInterval(function(){
        //     _this.bridge.setPosition.y += 1
        // },100)
        // console.log()
    },

    start () {

    },

    // update (dt) {},
});
