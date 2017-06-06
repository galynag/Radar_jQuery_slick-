$(document).ready(function() {
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="slick-prev" src="img/arrow_left.png">',
        nextArrow: '<img class="slick-next" src="img/arrow_right.png">'
    });
    startPulse();
    function startPulse() {
        $('.pulse').animate ({
        'width' : '50px',
        'height' : '50px',
        'opacity' : '0.8'
    },2500,pulseF)
    };
    function pulseF() {
        $('.pulse').animate({'opacity':'0'},130,reStart())};
    function reStart() {
        $('.pulse').animate({
            'width' : '0',
            'height' : '0',
            'opacity' : '0'
        },20,startPulse())
    };



    //         function() {
    //         $('.pulse').animate({
    //             'width' : '0px',
    //             'height' : '0px',
    //             'opacity':'0'
    //         },200, startPulse())
    //     });
    // }
});