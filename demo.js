

unction myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);




const finalGrade = (final, classwork, homework) => {
  if(final < 0 || final > 100) || (classwork < 0 || classwork > 100) || (homework < 0 || homework > 100) {
    return "This is an invalid grade."
  }
    let average = (final + classwork + homework) / 3;
    if(average < 60){
      return "F";
    }
    else if(average < 70){
      return "D";
    }
    else if(average < 80){
      return "C";
    }
    else if(average < 90){
      return "B";
    }else {
      return "A";
    }

};

console.log(finalGrade(98, 90, 75));





const finalGrade = (midterm, final, homework) => {
  if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.'
  }
  let average = (midterm + final + homework) / 3
  if (average < 60) {
      return 'F'
  }
  else if (average < 70) {
      return 'D'
  }
  else if (average < 80) {
      return 'C'
  }
  else if (average < 90) {
      return 'B'
  } else {
      return 'A'
  }
};


console.log(finalGrade(98,93,67));
*/


console.log('Hello World');

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
          return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
      default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}

console.log(calculateWeight(100, 'Mercury'));