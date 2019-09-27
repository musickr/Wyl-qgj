<?php


namespace app\wechat\controller;


use think\Cache;

class Lib
{
    public function index(){
        $access_token = Cache::get('access_token');
        if(!$access_token){
            $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5d47deb0237b1017&secret=f790a25ac713bf160f463ab5f4c5f1dd';
            $res = json_decode(curl_get($url),true);
            $loginFail = array_key_exists('errcode', $res);
            if ($loginFail) {
                dump($res);
                die();
            }
            else {
                $access_token = $res['access_token'];
                Cache::set('access_token',$access_token,$res['expires_in']);
            }
        }
        $api = "https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=$access_token";
        $result = curl_post($api,array('path'=>'pages/choose/choose?shop_id=1&game_id=12'));
        $imgDir = ROOT_PATH . 'public' . DS . 'uploads/';;
        $filename="nissangcj.jpg";///要生成的图片名字
        $file = fopen($imgDir.$filename,"w");//打开文件准备写入
        fwrite($file,$result);//写入
        fclose($file);//关闭

        $filePath = './'.$imgDir.$filename;

    }
}