/**
 * Created by Administrator on 2016/4/30.
 */


/*$(function () {
    'use strict';
    var Leme = function () {

    };
    Leme.prototype = {
        construction: this,
        bindEvent: function () {

        }
    };

    $.init();
});*/


var Leme = (function (my) {
    'use strict';
    function bindEvent () {
        // product 切换
        $(window).on('click', '.nav-left li', function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var target = $(this).attr('data-target');
            $(target).addClass('active');
            $(target).siblings().removeClass('active');
        });
        // 单选按钮组
        $(window).on('click', '.my-radio .checkbox', function() {
            $(this).addClass('checked');
            $(this).siblings().removeClass('checked');
        });
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
        $(document).on("pageInit", "#addressadd", function(e) {
            $("#city-picker").cityPicker({
                // value: ['深圳', '南山区']
            });
        });
    }
    bindEvent();

    $.init();
    return my;
}(Leme || {}));
