var bombList=[];
var num = randomNumber(1,207);;

document.oncontextmenu = rightClick; 
function rightClick(clickEvent) { 
  clickEvent.preventDefault();
  var clicked = document.getElementById(event.srcElement.id)
  if(returnString(clicked.id)=="img"){
    clicked.parentNode.removeChild(clicked);
  }else if((clicked.hasChildNodes()==false)&& returnString(clicked.id)=="button"){
  var img=new Image(30,40)
  img.src="https://img.favpng.com/15/18/9/red-flag-red-flag-png-favpng-r7sNPr5e3wVjbsik7EQz8Jans.jpg"
  var i =0
    img.id="img"+i;
    i++
  document.getElementById(clicked.id).appendChild(img);
  } 
}
for (var i = 0; bombList.length < 40; i++) {
  bombList.push(newNum());
}
function newNum(){
  for(var j =0;j < bombList.length;j++){
   if (num == bombList[j]){
     num = randomNumber(1,207);
     j==0;
   } 
  }
  return num;
}
function randomNumber(min, max) {
   return Math.floor( (Math.random() * (max-min +1) ) + min );
}

   function onEvent() {   
 var clicked = document.getElementById(event.srcElement.id)
   clicked.style.display = "none"; 
   id=clicked.id
     if(checkForBomb(id)==true){
       for(var i=1;i<208;i++){
         document.getElementById("button"+i).style.display = "none";
       }
       document.getElementById("grid"+returnNumber(id)).style.backgroundColor ="red";
       alert("You Lose!")
     }else if(checkSurrounding(clicked)==0){
       openSurrounding(clicked)
     }else{
       var text=checkSurrounding(clicked)
       document.getElementById("grid"+returnNumber(id)).innerHTML=text
     }
   }  
 
function checkForBomb (id){
  for(var t =0;t<bombList.length;t++){
    if(id == ("button"+bombList[t])){
      return true
    }
    }
return false 
}
function checkSurrounding(id){
  var counter=0
  var gridUp="button"+(parseInt(returnNumber(id.id))-16);
  var gridDown="button"+(parseInt(returnNumber(id.id))+16);
  var gridRight="button"+(parseInt(returnNumber(id.id))+1);
  var gridLeft="button"+(parseInt(returnNumber(id.id))-1);
  var gridUpRight="button"+(parseInt(returnNumber(id.id))-15);
  var gridUpLeft="button"+(parseInt(returnNumber(id.id))-17);
  var gridDownRight="button"+(parseInt(returnNumber(id.id))+17);
  var gridDownLeft="button"+(parseInt(returnNumber(id.id))+15);
  if(checkForBomb(gridUp)==true){
    counter++
  }
  if(checkForBomb(gridDown)==true){
    counter++
  }
  if((checkForBomb(gridRight)==true)&&(((returnNumber(id.id))%16)!=0)){
    counter++
  }
  if((checkForBomb(gridLeft)==true)&&(((returnNumber(id.id))%16)!=1)){
    counter++
  }
   if((checkForBomb(gridUpRight)==true)&&(((returnNumber(id.id))%16)!=0)){
     counter++
  }
   if((checkForBomb(gridUpLeft)==true)&&(((returnNumber(id.id))%16)!=1)){
     counter++
  }
   if((checkForBomb(gridDownRight)==true)&&(((returnNumber(id.id))%16)!=0)){
     counter++
  }
   if((checkForBomb(gridDownLeft)==true)&&(((returnNumber(id.id))%16)!=1)){
     counter++
  }

return counter
}

function returnNumber(string){
  var newString = "";
  for(var i=0;i<string.length;i++){
    if((string[i] ==0)||(string[i] == 1)||(string[i] == 2)||(string[i] == 3)||(string[i] == 4)||(string[i] == 5)||(string[i] == 6)||(string[i] == 7)||(string[i] == 8)||(string[i] == 9)){
      newString=newString+string[i];
    }
  }
return newString;
}
function returnString(string){
  var newString = "";
  for(var i=0;i<string.length;i++){
    if((string[i] !=0)&&(string[i] != 1)&&(string[i] != 2)&&(string[i] != 3)&&(string[i] != 4)&&(string[i] != 5)&&(string[i] != 6)&&(string[i] != 7)&&(string[i] != 8)&&(string[i] != 9)){
      newString=newString+string[i];
    }
  }
return newString;
}

function openSurrounding(id){
  var gridUp="button"+(parseInt(returnNumber(id.id))-16);
  var gridDown="button"+(parseInt(returnNumber(id.id))+16);
  var gridRight="button"+(parseInt(returnNumber(id.id))+1);
  var gridLeft="button"+(parseInt(returnNumber(id.id))-1);
  var gridUpRight="button"+(parseInt(returnNumber(id.id))-15);
  var gridUpLeft="button"+(parseInt(returnNumber(id.id))-17);
  var gridDownRight="button"+(parseInt(returnNumber(id.id))+17);
  var gridDownLeft="button"+(parseInt(returnNumber(id.id))+15);

   if (parseInt(returnNumber(gridUp))>16){ 
    document.getElementById(gridUp).click()
   }
   if (parseInt(returnNumber(gridDown))<193){ 
    document.getElementById(gridDown).click()
   }
   if (parseInt(returnNumber(gridLeft))%16!=1){ 
    document.getElementById(gridLeft).click()
   }
   if (parseInt(returnNumber(gridRight))%16!=0){  
    document.getElementById(gridRight).click()
   }
 /*  if ((parseInt(returnNumber(gridUpLeft))%16!=1)&&(parseInt(returnNumber(gridUpLeft))<209)){
    document.getElementById(gridUpLeft).click()
   }
   if ((parseInt(returnNumber(gridUpRight))>0)&&((parseInt(returnNumber(gridUpRight))%16)!=0)){
    document.getElementById(gridUpRight).click()  
   }
   if ((parseInt(returnNumber(gridDownLeft))<209)&&((parseInt(returnNumber(gridDownLeft))%16)!=1)){
    document.getElementById(gridDownLeft).click()  
   } 
   if ((parseInt(returnNumber(gridDownRight))<209)&&((parseInt(returnNumber(gridDownRight))%16)!=0)){
    document.getElementById(gridDownRight).click()  
   }
*/
}