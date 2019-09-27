<?php


namespace app\api\controller\v1\player;


use app\api\controller\Controller;
use think\Cache;
use think\Request;
use think\Response;

class WeChat extends Controller
{
    public function getCode()
    {
        //初始化request对象
        $request = Request::instance();
        $redirectUri = $request->header('Referer');
        $OAuth = config('wechatapi.OAuth')['official_account']['api'];
        $appId = config('we_chat.AppID');
        //将Code发送到公众号登陆页面
        $url = sprintf($OAuth,$appId,urlencode($redirectUri));
        return $this->renderSuccess(compact('url'));
    }

}