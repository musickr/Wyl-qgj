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
        mPrefab : {
            default : null,
            type : cc.Prefab
        },    
        mFishPool : {
            default : null,
            type : cc.Node
        },
        mHook : {
            default : null,
            type : cc.Node
        },
        mDepth : {
            default : 0,
            type : cc.Float,
            visible : false
        },
        mSceneData:{
            default:null,
            type:cc.JsonAsset
        },
        mIndex : {
            default : 0,
            visible : false
        },
        mController : {
            default : null,
            type : cc.Node
        }

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

    onLoad () {
        var manager = cc.director.getCollisionManager();//获取碰撞检测系统
        manager.enabled = true;//默认碰撞检测系统是禁用的，需要手动开启碰撞检测系统
        manager.enabledDebugDraw = true;//开启后可在debug中显示碰撞区域
    },

    /**
     * 获取服务器上的游戏分数
     */
    getServerScore: function (){
        cc.loader.load('http://www.project.com/game/public/index.php/player/v1/getResource', (err, tex) => {
            this.mSceneData.json = tex
            console.log(JSON.parse(tex).data.res)
         });
    },

    start () {
        //this.getServerScore()
    },
    reset () {
        //GameData.instance.depth = 0;
        //GameData.instance.score = 0;
        //清除鱼钩上挂着的鱼
        this.mFishPool.removeAllChildren(true);
        //清除海里面的所有鱼
        this.mController.removeAllChildren(true);
        this.mController.x = 0;
    },

    update (dt) {
        var depth = Math.abs(this.mHook.y) / 100;
        this.mDepth = Math.floor(depth);// 100pixel = 1 m
        let data = this.mSceneData.json[this.mIndex];
        if (data != undefined && this.mDepth >= data.depth)//到达配置的位置时，生成一只鱼
        {
            var fish = cc.instantiate(this.mPrefab);
            cc.loader.loadRes(data.res,cc.SpriteFrame,function(err,spriteFrame){
                if (!err)
                    fish.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });//更换图片外观
            fish.x = Math.random() * 640 - 320;//随机X轴坐标
            fish.y = this.mHook.y - 480 - 100;//在屏幕可视范围下方提前生成
            this.mFishPool.addChild(fish);
            this.mIndex++;
        }

    },
});
