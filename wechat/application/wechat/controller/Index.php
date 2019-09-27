<?php
namespace app\wechat\controller;

class Index
{
    public function index()
    {
        return $this->checkSignature() ? $_GET['echostr'] : '非法入侵';
    }
    private function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = 'miniprogramqgj';
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );

        if ($tmpStr == $signature ) {
            return true;
        } else {

            return false;
        }
    }
}
