// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"];

 
function destructivelyAppendCat(name){
    cats.push(name);
}

function  destructivelyPrependCat(name){
    cats.unshift(name);
}

function   destructivelyRemoveLastCat(){
    cats.pop();
}

function   destructivelyRemoveFirstCat(){
    cats.shift();
}

 
function appendCat(name){
 let cats2=cats
 cats2=[...cats,name];
 return cats2;
}

 
function prependCat(name){
    let cats2=cats
    cats2=[name,...cats];
    return cats2;
   }

   function removeLastCat(){
    let cats2=cats.slice()
    cats2.pop();
    return cats2;
   }
   
   function removeFirstCat(){
    let cats2=cats.slice()
    cats2.shift();
    return cats2;
   }