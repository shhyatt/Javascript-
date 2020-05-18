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

function sockMerchant(n, ar) {
    let storage = {}
    let pairs = 0

     for (var i = 0; i < n; i++) {
        storage[ar[i]] = !storage[ar[i]];
        if (!storage[ar[i]]) pairs++;
    }

    return pairs;
}

function countingValleys(n, s) {
    let peaks = 0
    let valleys = 0
    for(let i = 0; i < n; i++){
        if(s[i] === 'U'){
            peaks ++;
        };
        if(s[i] === 'D'){
            peaks --;
            if(peaks === -1){
                valleys ++
            }
        }

    };
    return valleys
}


function jumpingOnClouds(c) {
    let jumps = 0;
    for( let i = 0; i < c.length-1; i++){
        jumps ++
        if( i+2 < c.length && c[i+2] === 0){
            i ++;
        }
    }
  return jumps
}

var isPalindrome = function(x) {
    let s = x.toString();
    let rev = s.split('').reverse().join('');
    let num = parseInt(rev)
    if(x === num){
        return true;
    }else{
        return false;
    }

  var twoSum = function(nums, target) {
        for (i = 0; i < nums.length; i++){
            for (j = i + 1; j < nums.length; j ++){
               if (nums[i] + nums[j] == target){
                   return [i, j]
               }
                }
            }
        }


var removeElement = function(nums, val) {
  while(nums.includes(val)){
      nums.splice(nums.indexOf(val),1)
  }
       return nums.length
}


var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
    return nums1

};

var isSameTree = function(p, q) {
    if(p===null) return q===null;

    if(q===null) return p===null;

    if(p.val!==q.val) return false;

      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

var mySqrt = function(x) {
    let root = Math.sqrt(x);
    let num = Math.floor(root);
    return num;

};

var lengthOfLastWord = function(s) {
    let trimmed = s.trim()
    let splitString = trimmed.split(" ")
    let len = splitString.length
    if(splitString[len - 1] == ""){
        return 0
    } else if (splitString[len - 1].length === 1){
        return 1
    }else{
        return splitString[len-1].length
    };

};


var isHappy = function(n) {
    if(n === 6){
        return false
    }
    let squaredAr = [];
    let sum;
    let add = (a,b) => a + b
    let ar = n.toString().split('');
    ar.forEach(num => {
        let numNum = parseInt(num)
        let square = numNum*numNum

        squaredAr.push(square)

        })
    //console.log(squaredAr, count)

    sum = squaredAr.reduce(add)

    //console.log(sum)
    if(sum === 1){

       return true;
    }else if(sum === 7){
        return true
    }else if(sum > 9){
        return isHappy(sum);

    }else{
        return false;
    }

};

let range = (n1,n2) => {
    let ar = [];
    let add = (a,b) => a + b;
    for(let i = n1; i<=n2; i++){
        ar.push(i);
    }
    let sum = ar.reduce(add);
    return sum;
}
