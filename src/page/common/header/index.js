/*
* @Author: wangyisen
* @Date:   2017-08-02 00:16:26
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-08-02 00:53:13
*/

'use strict';

require('./index.css');

var _mm = require('util/mm.js');

var header = {
    //通用页面头部
    init: function () {
        this.bindEvent();
    },
    onload: function () {
        var keyword = _mm.getUrlParam('keyword');
        if (keyword) {
            $('#search-input').val(keyword);
        };
    },
    bindEvent: function () {
        var _this = this;
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        //输入回车，做搜索提交
        $('#search-input').keyup(function (e) {
            if (e.keyCode === 13) {
                _this.searchSubmit();
            }
        });
    },
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword;            
        }else{
            _mm.goHome();
        }
    }
};

header.init();