
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

//STEP-1
let alphaArr = alpha.split(" ")
let alphaNum = numeric.concat(alphaArr);

function cripto(arr){
  let size=parseInt(prompt("Please enter size of ID!"));
  let id="";
  for(let i=0; i<size; i++){
    id= id+ arr[Math.floor(Math.random() * arr.length)]
  }
  return id;
}
//console.log(cripto(alphaNum));



//STEP 2
const special = "* $ & %"
let specialArr=special.split("")

let alphaNumSpecial=alphaNum.concat(specialArr);

console.log(cripto(alphaNumSpecial));


//STEP 3
function dash(){
  let str="";
  let id= cripto(alphaNumSpecial);
  for(let i=0; i<i.length-1; i++){
    if(parseInt(id[i])){
      str=str+id[i]+"-";
    }else{
      str=str+id[i]
    }
  }
  return str;
}
console.log(dash())




//STEP 4
givenUnwanted = "3 , * , j , q , z"
let unwantedArr = givenUnwanted.split(" , ");
​
function unWanted(arr) {
  let newStr = "";
  let id = dash();
  console.log(`Before removing unwanted ->> ${id}`);
​
  for(let i = 0; i< id.length; i++) {
    let count = 0;
    for(let j=0; j < arr.length; j++) {
      if(id[i] === arr[j]) {
        count++;
      }
    }
    if(count == 0) {
      newStr = newStr + id[i];
    }
  }
  return `After removing unwanted ->> ${newStr}`;
}
​
console.log(unWanted(unwantedArr));
console.log(unWanted(["2", "5", "q", "l"]));

