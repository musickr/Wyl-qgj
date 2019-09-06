<?php


namespace app\api\controller\v1\player;


use app\api\controller\Controller;

class GameScore extends Controller
{
    /**
     * @return array
     */
    public function getScore()
    {
        $score = 20000;
        return $this->renderSuccess(compact('score'));
    }
}