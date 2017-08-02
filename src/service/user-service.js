/*
* @Author: wangyisen
* @Date:   2017-08-01 13:42:31
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-08-01 15:44:56
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
    //登出
    logout: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/logout.do'),
            method: post,
            success: resolve,
            error: reject
        })
    },
    //检查登录状态
    checkLogin: function () {
        _mm.request({
            url: _mm.getServerUrl('/user/get_user_info.do'),
            method: post,
            success: resolve,
            error: reject
        })       
    }
}

module.exports = _user;