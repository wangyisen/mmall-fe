/*
* @Author: wangyisen
* @Date:   2017-07-24 23:42:58
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-08-01 13:34:31
*/

'use strict';
var Hogan = require('hogan.js');
var conf = {
    serverHost : ''
}
var _mm = {    
    request: function(param) {
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
        debugger;
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    getServerUrl: function (path) {
        return conf.serverHost + path;
    },
    //获取url参数
    getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染html模板
    renderHtml: function(htmlTemplate, data){
        var template = Hogan.compile(htmlTemplate),
            result = template.render(data);
        return result;
    },
    successTips: function(msg) {
        alert(msg || '操作成功');
    },
    errorTips: function (msg) {
        alert(msg || '哪里不对了');
    },
    //非空、手机、邮箱判断
    validate: function (value, type) {
        var value = $.trim(value);
        if('require' === type) {
            return !!value;
        }
        if ('phone' === type) {
            return /^1d{10}$/.test(value);
        }
        if ('emai' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    goHome: function() {
        window.location.href = './index.html';
    }
};

module.exports = _mm;