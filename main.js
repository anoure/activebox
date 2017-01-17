$(function() {
	$(".mobile-button").on("click", function() {
		$(".mobile-button").toggleClass("active-mobile-button");
		$(".mobile-button i").toggleClass("active-i");
		$("aside").toggleClass("active-aside");
	});
});

$(document).ready(function() {
	$("aside").on("click", "a", function(e) {
		e.preventDefault();
		$(".mobile-button").removeClass("active-mobile-button");
		$(".mobile-button i").removeClass("active-i");
		$("aside").removeClass("active-aside");

		var id = $(this).attr("href");

		var top = $(id).offset().top - 80;

		$("body", "html").animate({scrollTop: top}, 500);
	});
});

$(document).ready(function() {
	$(".navbar-nav").on("click", "a", function(e) {
		e.preventDefault();

		var id = $(this).attr("href");

		var top = $(id).offset().top - 80;

		$("body", "html").animate({scrollTop: top}, 500);
	});
});

$(window).scroll(function() {
	var scr = ($(this).scrollTop());

	if(scr >= 50) {
		$(".navbar-default").css({"background": "#05071f"});
		$(".navbar-default .container").css({"padding-top": "15px"});
		$(".navbar-default .container").css({"padding-bottom": "15px"});
		$(".navbar-default .container").css({"border": "none"});
	} else {
		$(".navbar-default").css({"background": "none"});
		$(".navbar-default .container").css({"padding-top": "27.5px"});
		$(".navbar-default .container").css({"padding-bottom": "27.5px"});
		$(".navbar-default .container").css({"border-bottom": "1px solid rgba(255, 255, 255, 0.15)"});
	}

	if(scr >= 900) {
		$(".photo-gallery").css({"opacity": "1"});
	} else {
		$(".photo-gallery").css({"opacity": "0"});
	}

	console.log(scr);
});