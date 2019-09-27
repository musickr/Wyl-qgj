var Direction = require("Direction");
var Jump = require("Jump");
cc.Class({
    extends: cc.Component,

    properties: {
        Direction:{
            type:Direction,
            default:null,
        },
        speed:0,
    },

   


    /**
     * 触摸结束
     */
    touchEnd(e){
        
    },

    /**
     * 触摸结束
     */
    touchStart(e){
        
    },

    onLoad () {

        

    },
    
    /**
     * 跳跃的技能
     */
    jump(){
        // console.log('玩家跳跃的技能')
        // // 跳跃上升
        // var jumpUp   = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // // 下落
        // var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        
    },

    start () {

    },
   
    update (dt) {
        if(this.Direction.dir.mag()<0.5){
            return;
        }
        if( this.Direction.move ){
            this.Direction.dir.x > 0 ? this.node.x += this.speed : this.node.x -= this.speed
        }else{
            return
        }
        
        // var vx = this.Direction.dir.x * this.speed;
        // var vy = this.Direction.dir.y * this.speed;

        //var sx =  this.Direction.dir.x > 0 ? this.speed * dt : -this.speed * dt;
        // var sy = vy * dt;
//移动
        //this.speed !=0 ? this.node.x += sx : this.node.x = sx;
        //this.node.y += sy;
//方向计算
        //var r = Math.atan2(this.Direction.dir.y,this.Direction.dir.x);
        //var degree = r * 180/(Math.PI);
        //degree = 360 - degree + 90;
        //this.node.angle  = degree;
    },
});
