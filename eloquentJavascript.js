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

  function min(a, b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}

function isEven(n){
    if(n === 0){
        return true;
    }else if(n === 1){
        return false;
    }else if(n<0){
        return isEven(-n);
    }else{
        return isEven(n-2);
    }
}

function countLetter(string){
    let count = 0;
    for(let i = 0; i<string.length; i++){
        if("B" === string[i]){
            count +=1;
        }
    }
    return count;
}

function countChar(string, letter){
    count = 0;
    for(let i = 0; i<string.length; i++){
        if(letter === string[i]){
            count +=1;
        }
    }
    return count;
}
