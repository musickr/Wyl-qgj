<?php


namespace app\api\controller\v1;


use app\api\controller\Controller;
use app\api\validate\TokenGet;
use think\Config;

class Token extends Controller
{
    public function getToken($code='')
    {
        $token = md5(time());
        return $this->renderSuccess(compact('token'));
    }
}