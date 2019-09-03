<?php
namespace app\api\controller\v1\player;
use app\api\controller\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        $data = [
            [
                'name' => '张三',
                'age'  => '15'
            ],
            [
                'name' => '李四',
                'age'  => '16'
            ],
            [
                'name' => '王五',
                'age'  => '17'
            ]
        ];
        return $this->renderSuccess($data);
    }
}