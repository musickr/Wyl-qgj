<?php
namespace app\base\controller;

use think\Controller;

abstract class Base extends Controller
{
    abstract protected function renderSuccess($data, $code, $msg);
    abstract protected function renderError($data, $code, $msg);
}