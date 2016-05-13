/**
 * Created by Administrator on 2016/4/30.
 */

var Leme = (function (my) {
    'use strict';
    function bindEvent () {
        // 数量选择
        $(window).on('click', '.my-numbox .numbtn', function() {
            var eleNum = $(this).siblings('input[type="number"]');
            var num = parseInt(eleNum.val());
            var max = parseInt(eleNum.attr('max'));
            var min = parseInt(eleNum.attr('min'));
            if ($(this).hasClass('plus')) {
                num += 1;
            } else if ($(this).hasClass('less')) {
                num -= 1;
            }
            if (num < min || num > max) {
                return;
            }
            eleNum.val(num);
        });
        // goodsinfo
        $(document).on("pageInit", "#goodsinfo", function(e, id, page) {
            // 单选按钮组
            $(page).on('click', '.my-radio .checkbox', function() {
                $(this).addClass('checked');
                $(this).siblings().removeClass('checked');
            });
        });
        // product
        $(document).on("pageInit", "#product", function(e, id, page) {
            $(page).on('click', '.nav-left li', function () {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                var target = $(this).attr('data-target');
                $(target).addClass('active');
                $(target).siblings().removeClass('active');
            });
        });
        $(document).on("pageInit", "#addressadd", function(e) {
            $("#city-picker").cityPicker({
                // value: ['深圳', '南山区']
            });
        });
        $(document).on("pageInit", '#integralmall', function (e, id, page) {
            $(page).on('click', '.btn-sort', function () {
                $(this).find('.icon-caret').toggleClass('rotate');
            });
        });
        $(document).on("pageInit", '#expand', function (e, id, page) {
            $(page).on('click', '.hidden-list .list-title', function () {
                $(this).find('.icon-up').toggleClass('rotate');
                $(this).next('.list-content').toggleClass('show');
            });
        });
    }
    bindEvent();

    $.init();
    return my;
}(Leme || {}));
