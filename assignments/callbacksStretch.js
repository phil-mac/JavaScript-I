console.log(" ---------- Stretch goal: write a few callbacks ------------");

let sayHi = (name) => {
    return `${name} says 'Hi'!`
}

let bobSpeaks = cb => {
    console.log(cb("Bob"));
}

bobSpeaks(sayHi);

let sayBye = (name) => {
    return `${name} says 'Bye'.`
}

bobSpeaks(sayBye);

// ---

let addTwo = function(num){
    return num + 2;
}

let baseArray = [1, 2, 3];

let increasedArray = baseArray.map((num) => {
    return addTwo(num);
});

increasedArray.forEach((num) =>{
    console.log(num);
});

// ---

const higherOrderFunction = (callback) => {
    return callback("Testing... ");
}

const repeatString = (string) => {
    return (string + string + string);
}

let repeated = higherOrderFunction(repeatString);

console.log(repeated);

// playing with Closure

const dateCounter = () => {
    let count = 0;
    return function(){
        count = count + 7;
        return count;
    }
};

const newDateCounter = dateCounter();
console.log(newDateCounter());
console.log(newDateCounter());
console.log(newDateCounter());
console.log(newDateCounter());
