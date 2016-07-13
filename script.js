$(document).ready(function() {
//flip the flashcard
  $('.card').on('click', function() {
    $(this).toggleClass('flipped');
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



var flashcards =[
  {question: "(Question)",
   answer: "(Answer)"}
]
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
