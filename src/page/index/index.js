/*
* @Author: wangyisen
* @Date:   2017-07-20 23:42:11
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-07-25 00:16:10
*/
'use strict';
var _mm = require('util/mm.js');
alert(123);
_mm.request({
    url: './test.do',
    success: function (res) {
        console.log(res);
    },
    error: function (errMsg) {
        console.log(errMsg);
    }    
})

