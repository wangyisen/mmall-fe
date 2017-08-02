/*
* @Author: wangyisen
* @Date:   2017-08-02 14:53:48
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-08-02 15:27:13
*/

'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    $element.show();
})