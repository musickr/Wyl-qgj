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
        mSpeed:{
                default: 1,
                type: cc.Float,
                tooltip: "鱼的速度,默认正常速度为1，最小值为0.1，最大值为10",
                min: 0.1
            },
            
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let x = this.node.x;
        let duration = 5 - (this.node.x + 320) / 640 * 5;
        let sqeAction = cc.sequence(
            cc.moveTo(duration,cc.v2(320,this.node.y)),
            cc.flipX(true),//翻转X
            cc.moveTo(duration,cc.v2(x,this.node.y)),
            cc.moveTo(5 - duration,cc.v2(-320,this.node.y)),
            cc.flipX(false),//翻转X
            cc.moveTo(5 - duration,cc.v2(x,this.node.y)),
        );
        let action = cc.speed(cc.repeatForever(sqeAction), this.mSpeed);
        this.node.runAction(action);//重复运动
    },

    // update (dt) {},
});
