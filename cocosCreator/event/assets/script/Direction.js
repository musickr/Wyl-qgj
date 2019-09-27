cc.Class({
    extends: cc.Component,

    properties: {
        Direction:{
            type:cc.Node,
            default:null,
        },
        dir:cc.v2(0,0),
        player:{
            type:cc.Node,
            default:null,
        }
    },

    /**
     * 屏幕触摸开始
     */
    touchStart(e){
        this.move = true
        // console.log(this.Direction) ;return
        let w_pos = e.getLocation()
            ,pos  = this.node.convertToNodeSpaceAR(w_pos) 
            ,len  = pos.mag();
            this.R = (this.node.width - this.Direction.width) / 2;
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;
        if(len > this.R ){
            pos.x = this.R * pos.x / len;
            pos.y = this.R * pos.y / len;
        }
        this.Direction.setPosition(pos)
    },
    
    /**
     * 屏幕触摸移动
     */
    touchMove(e){
        var anim = this.player.getComponent(cc.Animation);
        anim.play('Right');//播放指定动画
        let w_pos = e.getLocation()
            ,pos  = this.node.convertToNodeSpaceAR(w_pos) 
            ,len  = pos.mag();//向量
            this.R = (this.node.width - this.Direction.width) / 2;
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;
        if(len > this.R){
            pos.x = this.R * pos.x / len;
            pos.y = this.R * pos.y / len;
        }
        this.Direction.setPosition(pos)
    },

    /**
     * 触摸结束
     */
    touchEnd(e){
        this.Direction.setPosition(cc.v2(0,0))
        this.move = false
        var anim = this.player.getComponent(cc.Animation);
        anim.stop('Right');//播放指定动画
    },

    /**
     * 手指走出去了
     */
    touchCancel(e){
        this.move = false
        this.Direction.setPosition(cc.v2(0,0))
    },

    onLoad () {
        
    },

    start () {
        this.Direction.x = 0;
        this.Direction.y = 0;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this)
    },

    update (dt) {},
});
