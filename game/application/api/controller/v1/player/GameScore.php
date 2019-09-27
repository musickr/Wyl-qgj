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

    /**
     *
     */
    public function getResource()
    {
        $res = [
            [
                "depth"=>1,
                "res"=>"Fish/fish01",
                "speed"=>1
            ],
            [
                "depth"=>2,
                "res"=>"Fish/fish02",
                "speed"=>1
            ],
            [
                "depth"=>3,
                "res"=>"Fish/fish03",
                "speed"=>1
            ],
            [
                "depth"=>4,
                "res"=>"Fish/fish04",
                "speed"=>1
            ],
            [
                "depth"=>5,
                "res"=>"Fish/fish05",
                "speed"=>1
            ],
            [
                "depth"=>6,
                "res"=>"Fish/fish06",
                "speed"=>1
            ],
            [
                "depth"=>7,
                "res"=>"Fish/fish07",
                "speed"=>1
            ],
            [
                "depth"=>8,
                "res"=>"Fish/fish08",
                "speed"=>1
            ],
            [
                "depth"=>9,
                "res"=>"Fish/fish09",
                "speed"=>1
            ],
            [
                "depth"=>10,
                "res"=>"Fish/fish10",
                "speed"=>1
            ],
        ];
        return $this->renderSuccess(compact('res'));
    }
}