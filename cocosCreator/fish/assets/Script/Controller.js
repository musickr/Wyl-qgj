// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var Hook = require("Hook");
cc.Class({
    extends: cc.Component,

    properties: {
        mHook : {
            default : null,
            type : cc.Node
        },
        mSpeed:350,
        mMoveToPos:{
            default:cc.v2(0,0),
            visible:false
        },
        mIsMoving:{
            default:false,
            visible:false
        },
        mEnableTouch:{
            default:false,
            visible:false
        },
        mCanvas:{
            default:null,
            type:cc.Node
        }
    },
    EnableTouch(){
        if (this.mEnableTouch)
            return;
        this.mCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.mEnableTouch = true;
        console.log("EnableTouch");
    },
    DisableTouch(){
        if (!this.mEnableTouch)
            return;
        this.mCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.mCanvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.mEnableTouch = false;
        console.log("DisableTouch");
    },
    onTouchStart (event) {
        var touches  = event.getTouches();
        var touchLoc = touches[0].getLocation(); //获得当前触摸点的坐标
        this.mIsMoving = true; //进入移动状态
        this.mMoveToPos = this.node.parent.convertToNodeSpaceAR(touchLoc);//将绝对坐标转换为父节点的相对坐标
    }, 
    onTouchMove (event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this.mMoveToPos = this.node.parent.convertToNodeSpaceAR(touchLoc);
    },
    onTouchEnd (event) {
        this.mIsMoving = false;
    },
       
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.EnableTouch;
    },

    start () {
        this.EnableTouch();
    },
    onCollisionEnter: function (other , self) {
        console.log(self)
        console.log(other)
        other.color = cc.Color.RED;
        var pHook = this.mHook.getComponent(Hook);
        pHook.RegainLine();//鱼钩收杆
        other.node.stopAllActions();
        other.node.group = "default";//设置碰撞分组，没必要继续判断和鱼钩的碰撞了
        other.node.parent = this.node;//钓到的鱼挂在鱼钩上
        other.node.setPosition(cc.v2(0,-25));
        other.node.runAction
        (
            cc.repeatForever
            (
                cc.sequence
                (
                    cc.rotateTo(0.6, -60 * other.node.scaleX)
                    ,cc.rotateTo(0.5 , -30 * other.node.scaleX)
                )
            )
        );//钓到的鱼挣扎动作
    },

    update (dt) {
        if(!this.mIsMoving)
            return
        var oldPos = this.node.position;
        var direction = this.mMoveToPos.sub(oldPos).normalize();//获得移动方向
        direction.y = 0;//锁定Y轴的移动
        var newPos = oldPos.add(direction.mul(this.mSpeed * dt));//根据移动速度计算鱼钩新的坐标
        this.node.setPosition(newPos);
    },
});
