// Write your solution here!
  const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name);
return cats;
}

function destructivelyPrependCat(name) {
cats.unshift(name);
return cats;    
}

function destructivelyRemoveLastCat(name) {
cats.pop(name);
return cats;    
}

function destructivelyRemoveFirstCat(name) {
cats.shift(name);
return cats;    
}

function appendCat(name) {
var newArray = cats.slice(name);
newArray.push(name);
return newArray;
}

function prependCat(name) {
var newArray = cats.slice(name);
newArray.unshift(name);
return newArray;    
}

function removeLastCat(name) {
var newArray = cats.slice(name);
newArray.pop(name);
return newArray;    
}

function removeFirstCat(name) {
var newArray = cats.slice(name);
newArray.shift(name);
return newArray;    
}