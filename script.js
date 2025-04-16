// let addtwonumbers=(x,y)=>x+y
//variable scope 



function testAvailibility(){
    let y ="local variable !";
    console.log("avaialable here:",y);
}
testAvailibility();
console.log("not avaialable here:",y)
//local initialized 
function doingstuff(){
    if (true){
        console.log(x)
        var x
    }
}

//global variable
let globalVar="accesible everywhere!";
console.log("outside functio;",globalVar);
function creattingNewScope(x){
    console.log("access to global vars inside function")
}
let x ="global";
function doingstuff(){
    let x="local"
    console.log(x);
}
doing stufff();
console.log(x)
}
// recursive function 
function getrecursive(nr)
{
console.log(nr)
getrecursive(--nr);
}getrecursive(3);

function logrecursive (nr){
    console.log("started function;",nr);
idf (nr>0)}
// the performance of recursion is slightly worse than the performance of regular iteration using a loop. So if this cause a bottleneckj situation that would really slow down your applicatiob then you might want to considdder another approach.

function doOuterFuntionStuff(nr){
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x){
      console.log(x+7);
      console.log("I can access outer variables :", nr);
    
    }
  }
  //function callbacks
  let yougotthis  = function(){
    executestuff()
  console.log("youre doing really well ,keep coding!")
  };
 setTimeout(() => {
    
 }, timeout);

