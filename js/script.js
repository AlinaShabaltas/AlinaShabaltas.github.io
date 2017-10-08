/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {







	$('#main-nav').click(function(){
		$('.nav-mobile').toggleClass('nav-mobile_active');
		$('.hamburger').toggleClass('is-active');
		
	});
	
	$('.nav-mobile a').click(function(){
		$('.nav-mobile').toggleClass('nav-mobile_active');
		$('.hamburger').toggleClass('is-active');
	});
	
	
	
	$("[data-fancybox]").fancybox({
		buttons : [
			'fullScreen',
			'thumbs',
			'close'
		],
		
		
		lang : 'ru',
    i18n : {
        'ru' : {
            CLOSE       : 'Закрыть',
            NEXT        : 'Следующий',
            PREV        : 'Предыдущий',
            ERROR       : 'Запрошенный контент не может быть загружен. <br/> Повторите попытку позже',
            PLAY_START  : 'Старт слайд-шоу',
            PLAY_STOP   : 'Пауза слайд-шоу',
            FULL_SCREEN : 'Полноэкранно',
            THUMBS      : 'Список миниатюр'
        },
        
    }

		
		
	});
	
	
	
	(function() {
		[].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
			new CBPFWTabs(el);
		});
	})();
	
	
	
	$(".slowly").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});





    "use strict"; // Start of use strict

    //  Variables
    var $window   = $(window),
        $All      = $('html, body'),
        $home     = $('#home'), 
        $pageSection = $(".home-section,.bck-side"),
        $open     = $('#open'),
        $addopen  = $('#add-open'),
        $ScrollUp = $("#scroll-up"),
        $colorFeature = $('#color-feature li'),
        $linkTheme = $("link[href*='theme']"),
        $default  = $('#default');

    // make header height full screen  
    $home.height($window.height());
    $window.resize(function() {
       $home.height($window.height());
    });
    // Sections backgrounds image 
    $pageSection.each(function(indx){ 
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // for equal height element
    var byRow = $All.hasClass('test-rows');
    $('.items-height').each(function() {
        $(this).children('.height').matchHeight({
            byRow: byRow
        });
    });
    // scroll animation 
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop(),
        range = 200,
        Hcontent = $('.home-content'),
        height = Hcontent.outerHeight(),
        offset = height / 1.5,
        calc = 1 - (wScroll - offset + range) / range;
        Hcontent.css({
            'margin-top' : ''+ wScroll /10 +'%', 
        });
        Hcontent.css({ 'opacity': calc });
        if (calc > '1') {
        Hcontent.css({ 'opacity': 1});
      } else if ( calc < '0' ) {
        Hcontent.css({ 'opacity': 0 });
      }
    }); 
    //arrow go bottom
     $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
        $All.animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
    });
    // tooltip 
    $('[data-toggle="tooltip"]').tooltip();
    //arrow scroll top
    $(window).on('scroll', function (){
        $(this).scrollTop() >= 400 ? $ScrollUp.show() : $ScrollUp.hide();
    });
    $ScrollUp.on('click', function (){
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
    //box option
    $open.on('click', function() {
        $addopen.toggleClass('opned');
    });
    $default.on("click", function () {
        return false;
    });
    //change color color-feature
    $colorFeature.click(function(){
        $linkTheme.attr("href",$(this).attr("data-value"));
        $(this).addClass('active').siblings("li").removeClass("active");
    });
   
});
    
    // Preloader Page

    $(window).load(function () {
        "use strict"; // Start of use strict
        var $preloader = $('#preloader'),
        $spinner = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
