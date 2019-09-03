<?php
return [
    'get_user'=>[
        'official_account'=>[
            'api'=>'https://api.weixin.qq.com/cgi-bin/user/info?access_token=%s&openid=%s&lang=zh_CN',
            'method'=>'GET',
        ]
    ],
    'OAuth'=>[
        'official_account'=>[
            'api'=>'https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
        ]
    ]
];