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
        play:{
            type:cc.Node,
            default:null,
        },
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        // 是否跳跃
        isJump:false,
        // 手指按压屏幕的时间
        holdTime:0,
        // 手指是否触摸屏幕
        holdTouch:false
    },

    touchStart(){
        this.holdTouch = true;
        // 跳跃上升
        var jumpUp   = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        var setJump=cc.callFunc(function(){this.isJump=false},this,this);
        this.act = cc.sequence(jumpUp,jumpDown,setJump);
        if(!this.isJump){
            this.isJump = true;
            this.play.runAction(this.act);
        }
    },

    touchEnd(){
        this.holdTouch = false;
    },

    act(){
        
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
    },


    start () {
        
    },

    update (dt) {
        if(this.holdTouch){
            this.holdTime ++;
            // 由于玩家起跳和回到跳板对应两个时间周期下次起跳中间有个过程  为了尽可能的平滑设计让玩家蓄力/等待一个起跳下落的周期  所以是4 * 60 = 240
            let jumpPeriod = 240 * this.jumpDuration;
            if( this.holdTime % jumpPeriod == 0){
                this.play.runAction(this.act);
            }
            //console.log(this.holdTime)
        }else{
            this.holdTime = 0
        }
    },
});
