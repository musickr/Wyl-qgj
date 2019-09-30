cc.Class({
    extends: cc.Component,
    properties: {
        player:{
            type:cc.Node,
            default:null,
        },
        map:{
            type:cc.Node,
            default:null,
        },
        speed:0
    },
    touchStart(t){
        
    },
    touchMove(t){
        console.log(t)
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this)
        console.log(this.map.height)
    },

    start () {

    },
    
    update (dt) {
        if(!this.player){
            return;
        }
        this.player.y += this.speed;
        let time = this.player.y % this.map.height;
        if( time == 0  ){
            console.log(time)
            this.map.y += this.map.height
        }
        
    },
});
