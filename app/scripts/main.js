/*global jQuery, GMaps */
(function($){
    'use strict';
    function init() {
        // affix navbar
        $(window).scroll(function(){
            var navAnchor = $('.cv-title').offset().top;
            if ($(this).scrollTop() > navAnchor) {
                $('.nav').addClass('splited');
            } else if ($(this).scrollTop() < navAnchor) {
                $('.nav').removeClass('splited');
            }
        });
        // navbar slide
        $('ul.nav a').click(function(e){
            e.preventDefault();
            slideToElement($(this).attr('href'));
            // apply to select nav
            $('select.nav').val($(this).attr('href'));
        });
        $('select.nav').change(function(){
            slideToElement($(this).val());
        });
        function slideToElement(ele) {
            $('html, body').stop().animate({
                scrollTop: $(ele).offset().top - 30
            }, 1500, 'easeInOutExpo');
        }
        // map
        var lat = $('#map').data('lat');
        var lng = $('#map').data('lng');
        // var map = new GMaps({
        //     div: '#map',
        //     lat: lat,
        //     lng: lng
        // });
        // map.addMarker({
        //     lat: lat,
        //     lng: lng,
        //     title: 'It\'s Me!'
        // });
        var map = new AMap.Map('map',{
            resizeEnable: true,
            zoom: 18,
            center: [lng, lat]
        });
        var marker = new AMap.Marker({
            position: [lng, lat]
        });
        marker.setMap(map);
        map.setCenter(marker.getPosition());
        marker.setTitle('It\'s Me!');
    }

    $(init);
})(jQuery);
