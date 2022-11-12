// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myfung (num){
//   return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y, z) => x + y;

const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const deff = x - y;
    const result = sum * deff;
    return result;
}

const result = add(50, 50);

const result2 = give5();

const result3 = doMath(5, 7);

console.log(result3);