/// My commentys will ahve triple slashes

/// This is really solid project-- very well planned, great layout, flexible to suit the user's needs. The additional feautres you had planned would add a lot of character to your flash card app as well

/// Refactoring opportunities:
/* 1. Tabs: instead of having 5 separate tabs in the HTML, you could have 1 and 'fake ' having 5: there'd still be the tab <li>s, but there'd just be 1 card on the screen. clicking the different buttons would change the inner html of the card on the stage div. Your cards array could have items which each correspond to a tab.

You could use the .html() of the tabs to call the appropriate value from the cards array, also.

This would DRY up your javascript as well!

2. Add in more named functions to help organize your code, and reference them in your event listeners, rather than using anonymous callbacks

*/
$(document).ready(function() {
//flip the flashcard

  $('.card').on('click', function() {
    ///nice use of toggleClass! very simple and elegant way to handle animating the cards
    $('.card').toggleClass('flipped');
  });


//tabs for flashcard game
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');


        /// I would move this up to the top of the function
        e.preventDefault();
    });


//next & prev button


//prompt user to imput content onto card


/// You could add 4 more items to correspond to each tab
var flashcards =[
  {question: "(Question)",
   answer: "(Answer)"}
]

/// See comment #1 about DRYing up your code

//--------tab 1 input ----------------|
$("#tab1front").html(flashcards[0].question)

$(".insertQuestion").on("click", function(){
  var insertQuestionButton= prompt("please input your question or term here");
  $("#tab1front").eq(0).html(insertQuestionButton).css("font-size", "40px");
})

$("#tab1back").html(flashcards[0].answer)

$(".insertAnswer").on("click", function(){
  var insertAnswerButton= prompt("please input your answer here");
  $("#tab1back").eq(0).html(insertAnswerButton).css("font-size", "32px");
})

//--------tab 2 input -----------------|

$("#tab2front").html(flashcards[0].question)

$(".insertQuestion2").on("click", function(){
  var insertQuestionButton= prompt("please input your question or term here");
  $("#tab2front").eq(0).html(insertQuestionButton).css("font-size", "40px");
})

$("#tab2back").html(flashcards[0].answer)

$(".insertAnswer2").on("click", function(){
  var insertAnswerButton= prompt("please input your answer here");
  $("#tab2back").eq(0).html(insertAnswerButton).css("font-size", "32px");
})


//--------tab 3 input -----------------|

$("#tab3front").html(flashcards[0].question)

$(".insertQuestion3").on("click", function(){
  var insertQuestionButton= prompt("please input your question or term here");
  $("#tab3front").eq(0).html(insertQuestionButton).css("font-size", "40px");
})

$("#tab3back").html(flashcards[0].answer)

$(".insertAnswer3").on("click", function(){
  var insertAnswerButton= prompt("please input your answer here");
  $("#tab3back").eq(0).html(insertAnswerButton).css("font-size", "32px");
})

//--------tab 4 input -----------------|

$("#tab4front").html(flashcards[0].question)

$(".insertQuestion4").on("click", function(){
  var insertQuestionButton= prompt("please input your question or term here");
  $("#tab4front").eq(0).html(insertQuestionButton).css("font-size", "40px");
})

$("#tab4back").html(flashcards[0].answer)

$(".insertAnswer4").on("click", function(){
  var insertAnswerButton= prompt("please input your answer here");
  $("#tab4back").eq(0).html(insertAnswerButton).css("font-size", "32px");
})

//--------tab 5 input -----------------|

$("#tab5front").html(flashcards[0].question)

$(".insertQuestion5").on("click", function(){
  var insertQuestionButton= prompt("please input your question or term here");
  $("#tab5front").eq(0).html(insertQuestionButton).css("font-size", "40px");
})

$("#tab5back").html(flashcards[0].answer)

$(".insertAnswer5").on("click", function(){
  var insertAnswerButton= prompt("please input your answer here");
  $("#tab5back").eq(0).html(insertAnswerButton).css("font-size", "32px");
})


///This would be a cool feature!

//hide the music after click
  $('#hidemusic').click(function () {
           $("iframe").hide();
  });

//show the music after click
  $('#showmusic').click(function () {
           $("iframe").show();
  });


});


// new way of flipping through flashcards


///Like a random flash card function here?
/// that might look like
