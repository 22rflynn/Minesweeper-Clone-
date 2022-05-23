//define global variables to be used throughout code
var bombList=[];
var num = randomNumber(1,81);

//creates random list of bombs to be placed
for (var i = 0; bombList.length < 20; i++) {
  bombList.push(newNum());
}
function newNum(){
  for(var j =0;j < bombList.length;j++){
   if (num == bombList[j]){
     num = randomNumber(1,81);
     j==0;
   } 
  }
  return num;
}

//function to define what happens on right click
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
    img.id="img"+returnNumber(clicked);
    
  document.getElementById(clicked.id).appendChild(img);
  } 
}

//function to define what happens on left click
function onEvent() {   
 var clicked = document.getElementById(event.srcElement.id)
 clicked.style.display = "none"; 
 id=clicked.id
 var counter=0
 if(counter==0){
   if(checkForBomb(id)==true){
     window.location.reload()
 }else{
     counter++
     console.log(counter)
 }
 }
  if(counter>=1){
     
     if(checkForBomb(id)==true){
       for(var i=1;i<82;i++){
         document.getElementById("button"+i).style.display = "none";
       }
    document.getElementById("grid"+returnNumber(id)).style.backgroundColor ="red";
      
     }else{
       var surroundingBombs = checkSurrounding(clicked)
  if(surroundingBombs>0){
   document.getElementById("grid"+returnNumber(id)).innerHTML=surroundingBombs
       }else{
    openSurroundings(clicked)
     }  
     }
   }  
}

//function to get random number
function randomNumber(min, max) {
   return Math.floor( (Math.random() * (max-min +1) ) + min );
}

//function called to check if any clicked space is a bomb. parameter is id of clicked item. returns true or false
function checkForBomb (id){
  for(var t =0;t<bombList.length;t++){
    if(id == ("button"+bombList[t])){
      return true
    }
  }
return false 
}

//function to check if any space in the 8 surrounding quares of a clicked button is a bomb. parameter is id of clicked item. returns amount of bombs
function checkSurrounding(id){
  var counter=0
  var gridUp="button"+(parseInt(returnNumber(id.id))-9);
  var gridDown="button"+(parseInt(returnNumber(id.id))+9);
  var gridRight="button"+(parseInt(returnNumber(id.id))+1);
  var gridLeft="button"+(parseInt(returnNumber(id.id))-1);
  var gridUpRight="button"+(parseInt(returnNumber(id.id))-8);
  var gridUpLeft="button"+(parseInt(returnNumber(id.id))-10);
  var gridDownRight="button"+(parseInt(returnNumber(id.id))+10);
  var gridDownLeft="button"+(parseInt(returnNumber(id.id))+8);
  if(checkForBomb(gridUp)==true){
    counter++
  }
  if(checkForBomb(gridDown)==true){
    counter++
  }
  if((checkForBomb(gridRight)==true)&&(((returnNumber(id.id))%9)!=0)){
    counter++
  }
  if((checkForBomb(gridLeft)==true)&&(((returnNumber(id.id))%9)!=1)){
    counter++
  }
   if((checkForBomb(gridUpRight)==true)&&(((returnNumber(id.id))%9)!=0)){
     counter++
  }
   if((checkForBomb(gridUpLeft)==true)&&(((returnNumber(id.id))%9)!=1)){
     counter++
  }
   if((checkForBomb(gridDownRight)==true)&&(((returnNumber(id.id))%9)!=0)){
     counter++
  }
   if((checkForBomb(gridDownLeft)==true)&&(((returnNumber(id.id))%9)!=1)){
     counter++
  }

return counter
}


//removes all characters but numbers from a string. parameter is any string. returns original string with only the numbers remaining
function returnNumber(string){
  var newString = "";
  for(var i=0;i<string.length;i++){
    if((string[i] ==0)||(string[i] == 1)||(string[i] == 2)||(string[i] == 3)||(string[i] == 4)||(string[i] == 5)||(string[i] == 6)||(string[i] == 7)||(string[i] == 8)||(string[i] == 9)){
      newString=newString+string[i];
    }
  }
return newString;
}

//removes all numbers from a string. parameter is any string. returns original string without numbers
function returnString(string){
  var newString = "";
  for(var i=0;i<string.length;i++){
    if((string[i] !=0)&&(string[i] != 1)&&(string[i] != 2)&&(string[i] != 3)&&(string[i] != 4)&&(string[i] != 5)&&(string[i] != 6)&&(string[i] != 7)&&(string[i] != 8)&&(string[i] != 9)){
      newString=newString+string[i];
    }
  }
return newString;
}

//function simulates click on 8 srrounding buttons around the clicked one. parameter is id of last clicked button
function openSurroundings(id){
  var gridUp="button"+(parseInt(returnNumber(id.id))-9);
  var gridDown="button"+(parseInt(returnNumber(id.id))+9);
  var gridRight="button"+(parseInt(returnNumber(id.id))+1);
  var gridLeft="button"+(parseInt(returnNumber(id.id))-1);
  var gridUpRight="button"+(parseInt(returnNumber(id.id))-8);
  var gridUpLeft="button"+(parseInt(returnNumber(id.id))-10);
  var gridDownRight="button"+(parseInt(returnNumber(id.id))+10);
  var gridDownLeft="button"+(parseInt(returnNumber(id.id))+8);

  if(((returnNumber(id.id))>=8)){
  document.getElementById(gridUp).click()
  }
  if(((returnNumber(id.id))<=73)){
  document.getElementById(gridDown).click()
  }
  if(((returnNumber(id.id))%9)!=0){
  document.getElementById(gridRight).click()
  }
  if(((returnNumber(id.id))%9)!=1){
  document.getElementById(gridLeft).click()
  }
  if(((returnNumber(id.id))%9)!=0){
  document.getElementById(gridUpRight).click()
  }
  if(((returnNumber(id.id))%9)!=1){
  document.getElementById(gridUpLeft).click()
  }
  if(((returnNumber(id.id))%9)!=0){
  document.getElementById(gridDownRight).click()
  }
  if(((returnNumber(id.id))%9)!=1){
  document.getElementById(gridDownLeft).click()
  }
}