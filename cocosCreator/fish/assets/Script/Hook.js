// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var EndUI = require("EndUI");
cc.Class({
    extends: cc.Component,

    properties: {
        RegainSpeed:320,
        isRegaining : {
            default : false,
            visible : false
        },
        mEndUI:cc.Node,
        mController:cc.Node
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
        //this.StartLine();
    },

    StartAnim () {
        var anim = this.getComponent(cc.Animation);
        anim.play('Hook');//播放指定动画
    },
    
    StartLine () {
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(cc.moveBy(4,cc.v2(0,-100))));
        this.isRegaining = false;
    },
    RegainLine () {
        //收杆
        if (this.isRegaining)
            return;
        this.node.stopAllActions();//停止下沉动作
        var duration = Math.abs(this.node.y) / this.RegainSpeed;
        if (duration < 5) duration = 5;//收杆事件太快，不足5秒的，按5秒来运动
        this.node.runAction(cc.moveTo(duration, cc.v2(0,0)).easing(cc.easeSineIn()));//收杆动作，通过easing来优化效果
        this.isRegaining = true;
    },

    EnableTouch () {
        var controller = this.mController.getComponent("Controller");
        controller.EnableTouch();
    },

    DisableTouch () {
        var controller = this.mController.getComponent("Controller");
        controller.DisableTouch();
    }
    // update (dt) {},
});
