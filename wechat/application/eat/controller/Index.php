<?php


namespace app\eat\controller;


use think\Controller;

class Index extends Controller
{
    public function index()
    {
        return $this -> fetch();
    }
}