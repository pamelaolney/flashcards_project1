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
//--------tab 1 insert ----------------|
$("#tab1front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab1front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab1back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab1back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//--------tab 2 insert -----------------|

$("#tab2front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion2").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab2front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab2back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer2").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab2back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})


//--------tab 3 insert -----------------|

$("#tab3front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion3").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab3front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab3back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer3").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab3back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//--------tab 4 insert -----------------|

$("#tab4front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion4").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab4front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab4back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer4").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab4back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//--------tab 5 insert -----------------|

$("#tab5front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion5").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab5front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab5back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer5").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab5back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//--------tab 6 insert -----------------|

$("#tab6front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion6").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab6front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab6back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer6").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab6back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})


//--------tab 7 insert -----------------|

$("#tab7front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion7").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab7front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab7back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer7").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab7back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})



//--------tab 8 insert -----------------|

$("#tab8front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion8").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab8front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab8back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer8").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab8back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//-------tab 9 insert -------------------/

$("#tab9front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion9").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab9front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab9back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer9").on("click", function(){
  var insertAnswerButton = prompt("Please insert answer here");
  $("#tab9back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
})

//--------tab 10 insert -------------------/

$("#tab10front").html(flashcards[0].question).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertQuestion10").on("click", function(){
  var insertQuestionButton= prompt("Please insert your question or term here");
  $("#tab10front").eq(0).html(insertQuestionButton).css({"font-size": "40px", "font-family": "Swanky and Moo Moo", "color": "#7FB5DA"});
})

$("#tab10back").html(flashcards[0].answer).css({"font-size": "12px", "font-family": "sans-serif", "padding-top": "25%"});

$(".insertAnswer10").on("click", function(){
  var insertAnswerButton= prompt("Please insert your answer here");
  $("#tab10back").eq(0).html(insertAnswerButton).css({"font-size": "33px", "font-family": "Swanky and Moo Moo", "padding": "0"});
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
