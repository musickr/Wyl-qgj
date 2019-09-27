<?php


namespace app\api\controller\v1;


use app\api\controller\Controller;
use app\api\service\wxToken;
use app\api\validate\TokenGet;
use think\Config;

class Token extends Controller
{
    public function getToken($code='')
    {
        $wx = new wxToken($code);
        $token = $wx->get();
        return $this->renderSuccess(compact('token'));
    }
}