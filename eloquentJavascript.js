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


  function chessBoard(){
      let size = 8;

  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
  }
