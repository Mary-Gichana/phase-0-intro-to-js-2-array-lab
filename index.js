// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Ralph") {
  cats.push(name);
}
function destructivelyPrependCat(name = "Bob"){
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name = "Garfield"){
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name = "Milo"){
  cats.shift(name);
}
function appendCat(name = "Broom"){
   return ([...cats, name]);
}
function prependCat(name = "Arnold"){
   return([name ,...cats]);
}
function removeLastCat( ){
    return cats.slice(0, cats.length - 1);;
}
function removeFirstCat(){
    return ([ ...cats.slice(1)]);
}

