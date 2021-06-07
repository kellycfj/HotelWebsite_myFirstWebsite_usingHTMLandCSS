//slides -- Slick https://kenwheeler.github.io/slick/
$('.slider-homepage').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000

});



//date form check-in and check-out - stackoverflow.com*******************************************************************************
var date = new Date();
$('.checkIn').datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true,
    startDate: date
}).on('blur', function () {
    $('.checkOut').focus();
});
$('.checkOut').datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: true,
    autoclose: true,
    startDate: $('.checkIn').val()
});
