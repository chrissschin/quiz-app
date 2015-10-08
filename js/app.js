$(document).ready(function() {
var buttonNum = {
  b1_1: $(".b1"),
  b2_1: $(".b2"),
  b3_1: $(".b3"),
  b1_2: $(".b1_2"),
  b2_2: $(".b2_2"),
  b3_2: $(".b3_2"),
  b1_3: $(".b1_3"),
  b2_3: $(".b2_3"),
  b3_3: $(".b3_3"),
  b1_4: $(".b1_4"),
  b2_4: $(".b2_4"),
  b3_4: $(".b3_4"),
  b1_5: $(".b1_5"),
  b2_5: $(".b2_5"),
  b3_5: $(".b3_5"),
}

var apple = {
  ifRight: "Correct! An Apple is a fruit!",
  ifWrong: "Wrong! An Apple is a fruit!"
};

var pears = {
  ifRight: "Correct! Pears are fruits!",
  ifWrong: "Wrong! Pears are fruits!"
};

var gucciMane = {
  ifRight: "Yes! Gucci Mane is a rapper",
  ifWrong: "Wrong! Gucci Mane is a rapper"
};

var future = {
  ifRight: "Correct! Future is indeed a rapper",
  ifWrong: "Wrong!! Future is a rapper"
};

var oranges = {
  ifRight: "Correct! Oranges are fruits",
  ifWrong: "Wrong! Oranges are fruits!!"
};




  //when exit button is pressed
  $(".xbutton").click(function(){
    console.log("x button");
    $(".overlay").fadeOut(800);
  });

  //Question set 1
  //if fruit button clicked
  if (buttonNum.b1_1.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifRight);

    //shoot green color into progress box
    $(".box.first").addClass("right");

    //show next question
    $("#ques1").hide();
    $("#ques2").fadeIn(800);
    $("#set1").hide();
    $("#set2").show();
  })){};

  //if b2 is clicked
  if (buttonNum.b2_1.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifWrong);

    //shoot green color into progress box
    $(".box.first").addClass("wrong");

    //show next question
    $("#ques1").hide();
    $("#ques2").fadeIn(800);
    $("#set1").hide();
    $("#set2").show();
  })){};

  //if button 3 is clicked
  if (buttonNum.b3_1.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifWrong);

    //shoot green color into progress box
    $(".box.first").addClass("wrong");

    //show next question
    $("#ques1").hide();
    $("#ques2").fadeIn(800);
    $("#set1").hide();
    $("#set2").show();
  })){};


  //Question set 2!
  //if fruit button clicked
  if (buttonNum.b3_2.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(gucciMane.ifRight);

    //shoot green color into progress box
    $(".box.second").addClass("right");

    //show next question
    $("#ques2").hide();
    $("#ques3").fadeIn(800);
    $("#set2").hide();
    $("#set3").show();
  })){};

  //if b2 is clicked
  if (buttonNum.b1_2.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(gucciMane.ifWrong);

    //shoot green color into progress box
    $(".box.second").addClass("wrong");

    //show next question
    $("#ques2").hide();
    $("#ques3").fadeIn(800);
    $("#set2").hide();
    $("#set3").show();
  })){};

  //if button 3 is clicked
  if (buttonNum.b2_2.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(gucciMane.ifWrong);

    //shoot green color into progress box
    $(".box.second").addClass("wrong");

    //show next question
    $("#ques2").hide();
    $("#ques3").fadeIn(800);
    $("#set2").hide();
    $("#set3").show();
  })){};

  //Question set 3
  //if fruit button clicked
  if (buttonNum.b1_3.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(pears.ifRight);

    //shoot green color into progress box
    $(".box.third").addClass("right");

    //show next question
    $("#ques3").hide();
    $("#ques4").fadeIn(800);
    $("#set3").hide();
    $("#set4").show();
  })){};

  //if wrong is clicked
  if (buttonNum.b2_3.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(pears.ifWrong);

    //shoot green color into progress box
    $(".box.third").addClass("wrong");

    //show next question
    $("#ques3").hide();
    $("#ques4").fadeIn(800);
    $("#set3").hide();
    $("#set4").show();
  })){};

  //if wrong is clicked
  if (buttonNum.b3_3.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifWrong);

    //shoot green color into progress box
    $(".box.third").addClass("wrong");

    //show next question
    $("#ques3").hide();
    $("#ques4").fadeIn(800);
    $("#set3").hide();
    $("#set4").show();
  })){};

  //Question set 4
  //if correct button clicked
  if (buttonNum.b3_4.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(future.ifRight);

    //shoot green color into progress box
    $(".box.fourth").addClass("right");

    //show next question
    $("#ques4").hide();
    $("#ques5").fadeIn(800);
    $("#set4").hide();
    $("#set5").show();
  })){};

  //if wrong is clicked
  if (buttonNum.b1_4.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(future.ifWrong);

    //shoot green color into progress box
    $(".box.fourth").addClass("wrong");

    //show next question
    $("#ques4").hide();
    $("#ques5").fadeIn(800);
    $("#set4").hide();
    $("#set5").show();
  })){};

  //if wrong is clicked
  if (buttonNum.b2_4.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifWrong);

    //shoot green color into progress box
    $(".box.first").addClass("wrong");

    //show next question
    $("#ques4").hide();
    $("#ques5").fadeIn(800);
    $("#set4").hide();
    $("#set5").show();
  })){};

  //Question set 5
  //if correct clicked
  if (buttonNum.b1_5.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(oranges.ifRight);
    $(".questiontext").text("CONGRATS YOU FINISHED THE QUIZ")


    //shoot green color into progress box
    $(".box.fifth").addClass("right");

    //show next question
    $("#ques5").hide();
    $("#set5").hide();

  })){};

  //if wrong clicked
  if (buttonNum.b2_5.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(apple.ifWrong);
    $(".questiontext").text("CONGRATS YOU FINISHED THE QUIZ");

    //shoot green color into progress box
    $(".box.fifth").addClass("wrong");

    //show next question
    $("#ques5").hide();
    $("#set5").hide();

  })){};

  //if wrong is clicked
  if (buttonNum.b3_5.click(function(){
    console.log("buttonclicked");

    //overlay is shown with apple ifRight text
    $(".overlay").fadeIn(800);
    $(".questiontext").text(oranges.ifWrong);
    $(".questiontext").text("CONGRATS YOU FINISHED THE QUIZ");

    //shoot green color into progress box
    $(".box.fifth").addClass("wrong");

    //show next question
    $("#ques5").hide();
    $("#set5").hide();

  })){};



});
