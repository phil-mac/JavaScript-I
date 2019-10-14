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
