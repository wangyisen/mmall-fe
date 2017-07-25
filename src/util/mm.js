/*
* @Author: wangyisen
* @Date:   2017-07-24 23:42:58
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-07-25 00:21:39
*/

'use strict';

var _mm = {    
    request: function function_name(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function(res){
                if (0 === res.status) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                } else if (10 === res.status) {
                    _this.doLogin();
                } else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                debugger
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    //统一登录
    doLogin: function() {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};

module.exports = _mm;