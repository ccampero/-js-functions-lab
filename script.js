const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  function isAdult(number){
    if (18>=number){
        return "Adult" 
      
    } else {
       return "Minor"

       
    }
  }
  console.log('Exercise 2 Result:', isAdult(18))

  function isCharAVowel(char) {
    if (char ==='a'|| char ==='e' || char ==='i'|| char ==='o'|| char ==='u'){
        return "true";
    } else {
        return "false";
    }
  }
  console.log('Exercise 3 Result:', isCharAVowel("a"));

  function generateEmail(name, domain) {
   if ('name' && 'domain') {
   return name + "@" + domain
  }
  }
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

function greetUser(name, timeOfDay){
    return `Good ${timeOfDay}, ${name}`
}

    console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

    function maxOfThree(num1, num2, num3){
        return Math.max(num1, num2, num3)

    }
    console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

    function calculateTip(bill, tipPercentage){
        return bill * (tipPercentage/100)
    }
console.log('Exercise 7 Result:', calculateTip(50, 20));

function convertTemperature(temperature, scale){
    if (scale === 'C'){
        return temperature* 9/5 + 32
} else if (scale === 'F'){
        return (temperature - 32) * 5/9
}
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(num1, num2, operation){
    if (operation==='add'){
        return num1 + num2
} else if (operation==='subtract'){
    return num1 - num2
} else if (operation==='multiply'){
    return num1 * num2
} else if (operation==='divide'){
    if (num2 != 0){
    return num1 / num2
    }
}}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function calculateGrade(score){
    if (score>= 90){
        return 'A'
    } else if (score>=80){
        return 'B'
    } else if (score>=70){
        return 'C'
    } else if (score>=60){
        return 'D'
    } else if (score<=59){
        return 'F'
    }
    }

    console.log('Exercise 10 Result:', calculateGrade(85));

    function createUsername(firstName, lastName){
        let banana = firstName.substring(0,3)
        banana += lastName.substring(0,3)
        banana += (firstName.length+lastName.length)
        return banana
    }

    console.log('Exercise 11 Result:', createUsername("Samantha", "Green"))

    function numArgs(args){
        return args.length
    }
    console.log('Exercise 12 Result:', numArgs(1,2,3));