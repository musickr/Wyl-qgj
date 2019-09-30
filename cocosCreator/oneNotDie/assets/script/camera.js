cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if(!this.target){
            return;
        }
        var w_pos = this.target.convertToWorldSpaceAR(cc.v2(0, 0));
        var c_pos = this.node.parent.convertToNodeSpaceAR(w_pos);
        this.node.y = c_pos.y;
    },
});
