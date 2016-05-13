/**
 * Created by Administrator on 2016/5/9.
 */
// ¥

(function () {
    'use strict';

    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.outerHeight()) / 2));
    }
    $('.modal').on('show.bs.modal', reposition);
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });

    $('.goods-list').on('mouseenter', '.goods-link', function () {
        $(this).addClass('on')
    });
    $('.goods-list').on('mouseleave', '.goods-link', function () {
        $(this).removeClass('on')
    });
    $('.nav-main').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parents('li').toggleClass('active');
        $(this).parents('li').siblings().removeClass('active');
        var target = $(this).attr('data-target');
        if (target) {
            if ($(target).hasClass('on')) {
                $('.sub-panel').toggleClass('show');
                $(target).removeClass('on');
            } else {
                $('.sub-panel').addClass('show');
                $(target).addClass('on');
                $(target).siblings().removeClass('on');
            }
        } else {
            $('.sub-panel').removeClass('show');
            $('.panel-list').removeClass('on');
        }
    });
    $('body').on('click', function (event) {
        if (!$(event.target).parents('.nav-main').get(0)) {
            hiddenPanel();
        }
    });
    function hiddenPanel() {
        $('.nav-main').find('li').removeClass('active');
        $('.sub-panel').removeClass('show');
        $('.panel-list').removeClass('on');
    }

    // 添加商品到购物车
    $('.goods-link').on('click', '.add-cart', function (event) {
        event.preventDefault();
        $('#add-goods').modal('show');
    });
}());

(function ($view) {
    var appSwiper = new Swiper ('.app-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        // 如果需要分页器
        // pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.app-swiper-control .swiper-button-next',
        prevButton: '.app-swiper-control .swiper-button-prev',
    });
    $view.find('.app-swiper a');
})($('#app'));

// 购物车页面js
(function ($view) {
    $view
        .on('click', '.my-numbox .numbtn', changeNum)
        .on('change', '.check-all', toggleCheckAll)
        .on('change', '.ids', resetCheckAll)
    ;
    function changeNum() {
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
    }

    function toggleCheckAll() {
        $(".ids").prop("checked", this.checked);
    }
    function resetCheckAll() {
        var option = $(".ids");
        option.each(function() {
            if (!this.checked) {
                $(".check-all").prop("checked", false);
                return false;
            } else {
                $(".check-all").prop("checked", true);
            }
        });
    }

})($('#cartTable'));

(function ($view) {
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 2,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    
    $view
        .on('click', '.my-numbox .numbtn', changeNum)
        .on('click', '.my-radio .checkbox', changeBox)
    ;
    function changeBox() {
        event.preventDefault();
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
    }
    function changeNum() {
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
    }

})($('#goodsinfo'));

(function ($view) {
    var centerSwiper = new Swiper('.center-swiper', {
        spaceBetween: 10,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
    $view
        .on('click', '.navbar-left .list-title', toggleMenu)
        .on('click', '.navbar-left a[data-toggle="tab"]', removeActive)
    ;
    function removeActive() {
        $(this).parents('.list-content').siblings('.list-content').find('li.active').removeClass('active');
    }
    function toggleMenu() {
        $(this).find('.glyphicon-menu-up').toggleClass('rotate');
        $(this).next('.list-content').toggleClass('show');
    }

})($('#center'));

