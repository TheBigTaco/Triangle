$(document).ready(function() {
  $("form#submit").submit(function(event){
    var sideOne = parseFloat($("input#sideOne").val());
    var sideTwo = parseFloat($("input#sideTwo").val());
    var sideThree = parseFloat($("input#sideThree").val());
    var onePlusTwo = sideOne + sideTwo;
    var twoPlusThree = sideTwo + sideThree;
    var onePlusThree = sideOne + sideThree;


    if (onePlusTwo <= sideThree || twoPlusThree <= sideOne || onePlusThree <= sideTwo){
      alert("That is not a triangle.");
    } else {
      if (sideOne === sideTwo && sideTwo === sideThree) {
        alert("This is an equilateral triangle");
      } else if (sideOne === sideTwo && sideOne != sideThree || sideTwo === sideThree && sideThree != sideOne || sideOne === sideThree && sideOne != sideTwo) {
        alert("This is an isosceles triangle");
      } else if (sideOne != sideTwo && sideTwo != sideThree) {
        alert("This is a scalene triangle");
      };
    };
    event.preventDefault();
  });
});
