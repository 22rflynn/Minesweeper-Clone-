var bombList=[];
var num = randomNumber(1,255);;
for (var i = 0; bombList.length < 40; i++) {
  bombList.push(newNum());
}
function newNum(){
  for(var j =0;j < bombList.length;j++){
   if (num == bombList[j]){
     num = randomNumber(1,255);
     j==0;
   } 
  }
  return num;
}
function randomNumber(min, max) {
   return Math.floor( (Math.random() * (max-min +1) ) + min );
}