var num;

let fizzBuzz = function(num) {
  if (typeof(num) === "number") {

    let num3 = num / 3;
    let num5 = num / 5;
    let test3 = Number.isInteger(num3);
    let test5 = Number.isInteger(num5);
  
    if (test3 && test5 === true) {
      return "FizzBuzz";
    }
    else if (test3 === true) {
      return "Fizz";
    }
    else if (test5 === true) {
      return "Buzz";
    }
    else {
      return num;
    }
  }
  else {
    return "Not a number"
  }
}