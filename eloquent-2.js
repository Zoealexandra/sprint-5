for (var number = "#"; number.length <= 7; number += "#" ) {
    console.log(number);
  }


  for (var number = 1; number <= 100; number++ ) {
    if (number % 3 == 0 && number % 5 == 0) {
          console.log ("FizzBuzz")
        } else if (number % 3 == 0) {
        console.log("Fizz");
      } else if (number % 5 == 0 ) {
        console.log ("Buzz");
      } else {
       console.log(number);
      }



var size = 8;

var board = "";


for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((j + i % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
      
console.log(board);