/*
* @Author: wangyisen
* @Date:   2017-08-01 23:56:30
* @Last Modified by:   wangyisen
* @Last Modified time: 2017-08-02 01:08:40
*/

'use strict';
var _mm = require('util/mm.js');

var _cart = {
    //获取购物车数量
    getCartCount: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/get_cart_product_count.do'),
            success: resolve,
            error: reject
        })       
    }
}

module.exports = _cart;