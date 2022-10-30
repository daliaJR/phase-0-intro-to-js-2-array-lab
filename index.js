// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
    // const cat = [...cats];
    cats.push(name);
    console.log(cats);
    return cats;
}
// destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    // const cat = [...cats];
    cats.unshift(name);
    console.log(cats);
    return cats;
}
// destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const cat = [...cats];
    cat.push("Broom");
    return cat;
}

function prependCat(name){
    const cat = [...cats];
    cat.unshift("Arnold");
    return cat;
}

function removeLastCat(){
    const cat = [...cats];
    cat.pop();
    return cat;
}

function removeFirstCat(){
    const cat = [...cats];
    cat.shift();
    return cat;
}