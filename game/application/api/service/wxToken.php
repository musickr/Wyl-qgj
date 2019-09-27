<?php


namespace app\api\service;

use app\lib\exception\WeChatException;
use think\Exception;

class wxToken extends Token
{
    protected $code;
    protected $wxApi;
    protected $wxAppID;
    protected $wxAppSecret;

    public function __construct($code)
    {
        $this->code        = $code;
        $this->wxAppID     = config('we_chat.AppID');
        $this->wxAppSecret = config('we_chat.AppSecret');
        $this->wxApi       = config('wechatapi.get_user');
    }

    public function get()
    {
        $wxLoginUrl = $this->wxApi['official_account']['api'];
        $api        = sprintf($wxLoginUrl, $this->wxAppID, $this->wxAppSecret, $this->code);
        $result = curl_get($api);
        // 注意json_decode的第一个参数true
        // 这将使字符串被转化为数组而非对象
        $wxResult = json_decode($result, true);
        if (empty($wxResult)) {
            // 为什么以empty判断是否错误，这是根据微信返回
            // 规则摸索出来的
            // 这种情况通常是由于传入不合法的code
            throw new Exception('获取session_key及openID时异常，微信内部错误');
        }
        else {
            // 建议用明确的变量来表示是否成功
            // 微信服务器并不会将错误标记为400，无论成功还是失败都标记成200
            // 这样非常不好判断，只能使用errcode是否存在来判断
            $loginFail = array_key_exists('errcode', $wxResult);
            if ($loginFail) {
                $this->processLoginError($wxResult);
            }
            else {
                return $this->grantToken($wxResult);
            }
        }
    }
    // 处理微信登陆异常
    // 那些异常应该返回客户端，那些异常不应该返回客户端
    // 需要认真思考
    private function processLoginError($wxResult)
    {
        throw new WeChatException(
            [
                'msg' => $wxResult['errmsg'],
                'errorCode' => $wxResult['errcode']
            ]);
    }
}