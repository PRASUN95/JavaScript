const foo    = { name: 'tom',   age: 30, nervous: false };
const bar    = { name: 'dick',  age: 40, nervous: false };
const baz    = { name: 'harry', age: 50, nervous: true };


'Bad Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);



'Good Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: orange; font-weight: bold;' )
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz])


// // Console.time
console.time('looper')

let i = 0;
while (i < 1000000) { i ++ }

console.timeEnd('looper')

console.time('loop2')

for(let i = 0;i<1000000;i++)
{

}

console.timeEnd('loop2')




// // Stack Trace Logs

const deleteMe = () => console.trace('bye bye database')

//deleteMe()
//deleteMe()



// const faces = ['😀', '😍', '🤤', '🤯', '💩', '🤠', '🥳'];

// // Transform values
// const withIndex = faces.map((v, i) => `face ${i} is ${v}`);

// // Test at least one value meets a condition
// const isPoopy = faces.some(v => v === '💩')
// // false

// // Test all values meet a condition
// const isEmoji = faces.every(v => v > 'ÿ');
// // true


// // Filter out values
// const withoutPoo = faces.filter(v => v !== '💩')

// // Reduce values to a single value
// const pooCount = faces.reduce((acc, cur) => {
//     return acc + (cur === '💩' ? 1 : 0)
// }, 0);
// console.log(pooCount)

// // Sort the values
// const sorted = faces.sort((a, b) => a < b);


