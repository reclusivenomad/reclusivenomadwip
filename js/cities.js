$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	if (distanceScrolled > 0) {
		$('.main-nav').addClass('scrolled');
		$('.homepage').css('padding-top','88px');
		// $('.slideshow-container').css('z-index','1');
		
	} else {
		$('.main-nav').removeClass('scrolled');
		$('.homepage').css('padding-top','0px');


	}
});





//
// Start slideshow code
//

// variables to keep track of which slideshow image we are displaying
var currentSlideIndex = 0;

// slides is an array (covered in next class) that contains all the
// elements with the 'slide' class
var slides = $('.slide');

var firstSlideIndex = 0;
var lastSlideIndex = slides.length - 1;
var loopHandler;

function showSlide(index) {
  stopSlideshow();

  $(slides[currentSlideIndex]).removeClass('active');
  currentSlideIndex = index;
  $(slides[currentSlideIndex]).addClass('active');

  startSlideshow();
}

function showNextSlide(){
  var nextIndex = currentSlideIndex + 1;
  if(nextIndex > lastSlideIndex) {
    nextIndex = firstSlideIndex;
  }

  showSlide(nextIndex);
}

function showPrevSlide(){
  var nextIndex = currentSlideIndex - 1;
  if(nextIndex < firstSlideIndex) {
    nextIndex = lastSlideIndex;
  }

  showSlide(nextIndex);
}

// setInterval is a built-in JS functions that
// lets you call a function over and over at
// a specified interval (in this case, every 6000 ms)
function startSlideshow(){
  loopHandler = setInterval(function(){
    showNextSlide();
  }, 6000);
}

// clearInterval is a built-in JS function that
// stops the setInterval
function stopSlideshow(){
  clearInterval(loopHandler);
}

// set up click handlers
$('.prev').on('click', function(){
  showPrevSlide();
});

$('.next').on('click', function(){
  showNextSlide();
});

$('.dot').on('click', function(){
  showSlide($(this).index());
});

// start the slideshow when you open the page
startSlideshow();

//
// End slideshow code
//




	// if (distanceScrolled > 580) {
	// 	$('.label-1, .label-2, .label-3').addClass('faded-in');
	// } else {
	// 	$('.label-1, .label-2, .label-3').removeClass('faded-in');
	// }

	// if (distanceScrolled > 1400) {
	// 	$('.butterfly').addClass('animated');
	// } else {
	// 	$('.butterfly').removeClass('animated');
	// }


$('.dropdownButton').on('click', function () {
	
	$('.dropdownMenu').slideToggle(300);


});


$('.dropdownnavButton').on('click', function () {
	
	$('.mobilenavmenu').slideToggle(300);


});

if(window.innerWidth < 660){
$('.mobilenavmenu a').on('click', function () {

	$('.mobilenavmenu').hide();
});
}





// $('.hamburger').on('click', function () {
// 	$('body').addClass('active');
// });

// $('.close').on('click', function () {
// 	$('body').removeClass('active');
// });



