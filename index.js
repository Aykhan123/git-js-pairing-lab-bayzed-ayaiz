//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i += 1)
    console.log(i);
}
//console.log(fiveToOneHundred());

//2
const multiplesOfThree = () => {
  for (let i = 3; i <= 100; i += 3) {
      //console.log(i);
  }  
};
multiplesOfThree();

//3
function multiplesOfThreeOrFive(){
    for (let i = 3; i <=100; i += 1){
        if ((i % 3 ===0) || (i % 5 ===0 )){
           // console.log(i)
        }
    }
    
}
multiplesOfThreeOrFive()

//#4
function untilNum(num){
    for (let i = 1; i <= num; i += 1)
    console.log(i)
}
//untilNum(15)

//#5
function multiply(num1, num2){
    const product = num1 * num2
    console.log(product)

}
multiply(5,10)

//#6
function add(int1,int2) {
  if (int1 === int2) {
      const intcube = Math.pow(int1,3)
      console.log(intcube)
  } else {
      const intsum = int1 + int2
      console.log(intsum)
  }
}
add(5,5)

//7

function isNegative(inter){
    if (Math.sign(inter) === 1){
        console.log(true)
    }else {
        console.log(false)
    }
}
isNegative(-5)
    
    
//#8
function triangleArea(base,height) {
   const areaOfTriangle = 0.5 * base * height
   console.log(areaOfTriangle)
}
triangleArea(5,7)

//#9
function betweenTwentyAndForty(integer) {
    if (integer >20 && integer < 40) {
        console.log(true)
    } else {
        console.log(false)
    }
};
betweenTwentyAndForty(14)

//#10
function largest(num1,num2,num3) {
    const big = Math.max(num1,num2,num3)
    console.log(big)
}
largest(15,20,30)

//#11
function printTime() {
    var Today = new Date()
    return Today.getHours()+":"+Today.getMinutes()+":"+ Today.getSeconds();
}
console.log(printTime());

//#12
