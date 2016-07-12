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


var question1 = {
  question:'Whats my name?'
},








// //hide the button after click
//   $('#beginlearning').click(function () {
//            $(this).hide();
//   });

});

//
//new way of flipping through flashcards
//
// var flashcards =[
//   {question: {prompt("please input question here")} , answer: "yes"}
// ]
//
// $("div.front").html(flashcard[0].question)
