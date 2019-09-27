<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;
Route::group('player/:versions',function (){
    Route::get('index','api/:versions.player.index/index');
    Route::post('getToken','api/:versions.Token/getToken');
    Route::post('getCode','api/:versions.player.we_chat/getCode');
    Route::get('getScore','api/:versions.player.game_score/getScore');
    Route::get('getResource','api/:versions.player.game_score/getResource');
});
