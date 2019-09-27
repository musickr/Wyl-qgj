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
        
    },

    /**
     * 触摸开始事件
     */
    touchStart:function(t){
        //当前屏幕位置
        //console.log(e.currentTarget)
       //console.log(t.target)
       // console.log(e.getDelta())
    }, 
     
    /**
     * 触摸移动事件
     */
    touchMove:function(t){
        let deltae = t.getDelta()
            ,node  = t.target
            ,direction = deltae.y / deltae.x;
        node.x *= direction;
        node.y *= direction;
        // console.log(deltae.x)
        // this.node.x += deltae
    },
    
    onLoad () {
        // this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove)
    },

    start () {

    },

    // update (dt) {},
});

