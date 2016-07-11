$(document).ready(function() {
  $('.card').on('click', function() {
    $('.card').toggleClass('flipped');
  });
  //variables
  // var questionNum = 0;
  // var answerNum = 0;
  var questions = new Array('Q1', 'Q2', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20');
  var answers = new Array('A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20');
  var buttoninorder = $('#inorder');
  var clickCounter = 0

  function handleClickEvent() {
    console.log('ive been clicked');
  }
    buttoninorder.on("click", handleClickEvent );





});
