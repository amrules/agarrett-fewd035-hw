$(document).ready(function(){

/*
 * READMORE READLESS FUNCTION
 */

$(".read-1").click(function(e) {
  $('#hidden-text-1').slideToggle("slow");
  $('#read-more-1').toggleClass('hide');
  $('#read-less-1').toggleClass('hide');
  e.preventDefault();
  e.stopPropagation();
});

$(".read-2").click(function(e) {
  $('#hidden-text-2').slideToggle("slow");
  $('#read-more-2').toggleClass('hide');
  $('#read-less-2').toggleClass('hide');
  e.preventDefault();
  e.stopPropagation();
});

 /* MOBILE MENU*/

$(window).resize(function() {
	if ($(window).width() <= 800){
    $('.hamburger').removeClass('hide'); //adds menu icon to top right
    $('.menu').addClass('hide'); //removes full-size menu from being seen
  };
  $('.hamburger').click(function() {
    $('.menu').slideDown('fast', function() { //menu appears
      $('.hamburger').addClass('hide'); //hide menu icon
      $('.cross').removeClass('hide'); //adds X icon
      $('.header').css('height', '400px'); //adjusting height of parent container to account for the menu, this doesnt really work that well
    });
  });

  $('.cross').click(function() {
    $('.menu').slideUp('fast', function() { //menu is hidden again
      $('.hamburger').removeClass('hide');
      $('.cross').addClass('hide');
      $('.header').css('height', '50px'); //header size is changed to be smaller, again doesnt really work
    });
  });
});

$(window).resize(function() {
	if ($(window).width() > 800){
    $('.hamburger').addClass('hide');
    $('.menu').removeClass('hide');
  };
});

 });

/*READMORE READ LESS W ARGUMENTS - DOESNT QUITE WORK
function showMore(argue) {
    var moreText = $(argue).click(function(e) {
      $('.now').slideToggle("slow");

      if($(this).text() == 'Read More')
       {
           $(this).text('Read Less');
       }
       else
       {
           $(this).text('Read More');
       }
      e.preventDefault();
      e.stopPropagation();
    });
    console.log(moreText);
}

showMore('#read-more-1');
showMore('#read-more-2');

});


/****thing john sent me

 function getHTMLFragments(section) {
var myHTMLChunk = $(section).html();
console.log(myHTMLChunk);
}
getHTMLFragments('#part-1');
getHTMLFragments('#part-2');
getHTMLFragments('#part-3');
getHTMLFragments('#part-4');
 }
*/


/*

$('#read-more-1').click(function(e) {
  $('#extra-text').slideToggle("slow");
  if($(this).text() == 'Read More')
   {
       $(this).text('Read Less');
   }
   else
   {
       $(this).text('Read More');
   }
  e.preventDefault();
  e.stopPropagation();
});

*/

/*
 * MOBILE STORY ARTICLE ADJUSTMENTS - THIS DOESNT WORK
 */

/*
$(window).resize(function(){
	if ($(window).width() <= 800){
    $('.story-text').addClass('hide');
  };
  $('.read-more-mobile').click(function(e) {
    $('.story-text').slideToggle("slow");
    if($(this).text() == 'Read More')
     {
         $(this).text('Read Less');
     }
     else
     {
         $(this).text('Read More');
     }
    e.preventDefault();
    e.stopPropagation();
  });



});



});

*/

/* responsive slidedown menu before tried hamburger style

$(window).resize(function(){
	if ($(window).width() <= 800){
    $('#hidden-menu-style').removeClass('hide-menu');
    $('.menu').addClass('hide-menu');
  };

});

$( ".hidden-link" ).click(function () {
  if ( $('.menu').is(':hidden') ) {
    $('.header').css('height', '475px');
    $( '.menu' ).slideDown( "fast" );

  } else {
    $( '.menu' ).slideUp("fast");
      $('.header').css('height', '150px');
  }

});

*/

/*what i did before i figured out slideToggle

$('#read-more').click(function(e) {
  $('.hide').slideDown("slow");
  $('.show').addClass("hide");
  e.preventDefault();
});

$('#read-less').click(function(e) {
  $('#read-less').addClass("hide");
  $('.show').removeClass("hide");
  $('.hide').slideUp("slow");



  e.preventDefault();
});


/*what i did before i googled js slider effects

$('#read-more').click(function(e) {
  $('#read-less').removeClass("hide");
  $('#extra-text').removeClass ("hide");
  $('.show').addClass ("hide");
  e.preventDefault();
});

$('#read-less').click(function(e) {
  $('#read-less').addClass ("hide");
  $('#extra-text').addClass ("hide");
  $('.show').removeClass ("hide");
  e.preventDefault();
});
*/
