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
        $request = Request::instance();
        Cache::set('page',$request->header('referer'));
        $redirectUri = $request->header('Referer');
        $OAuth = config('wechatapi.OAuth')['official_account']['api'];
        $appId = config('we_chat.AppID');
        $url = sprintf($OAuth,$appId,urlencode($redirectUri));
        return $this->renderSuccess(compact('url'));
    }

}