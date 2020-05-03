for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


  function fizzBuzz(n){
      if(n%15 === 0){
          return "FizzBuzz";
      }else if(n%3 === 0){
          return "Fizz";
      }else if(n%5 === 0){
          return "Buzz";
      }
  }

  
