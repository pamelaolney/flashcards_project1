$(document).ready(function() {
//flip the flashcard
  $('.card').on('click', function() {
    $('.card').toggleClass('flipped');
  });


//tabs for flashcard game
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });


//next & prev button











//prompt user to imput content onto card


// //hide the button after click
//   $('#beginlearning').click(function () {
//            $(this).hide();
//   });

});
