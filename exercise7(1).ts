//4. input an array of object , Tukar Posisi Value And Property

// ○ Input: [{ name: ‘David’, age: 20 }]
// ○ Output: [{ David: ‘name’, 20: ‘age’}]

class objek {
    name: string;
    age: number;

    constructor(paramName: string, paramAge: number) {
        this.name = paramName;
        this.age = paramAge;
    }
}

const david = new objek("David", 20);
// the input is , array of object [{key: value, Key: value}]
function switchKeyValue(arr: { [key: string]: any }[]): { [key: symbol]: string }[] { //
    return arr.map(obj => { //iterate and returning the new on=bject

        const newObj: { [key: symbol]: string } = {}; //menampung hasil switch

        for (const key in obj) { //setelah iterate dari .map, iterate lagi kemudian tampung ke new
            newObj[obj[key]] = key;
        }
        return newObj;
    })
}
const input = [{ name: 'David', age: 20 }]
const output = switchKeyValue(input);
console.log(output);




//5.Recursion
// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input: 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

let inputNum: number = 5

function factorial(inputNumber: number): number {
    if (inputNumber === 0) {
        return 1;
    } else {
        return inputNumber * factorial(inputNumber - 1);
    }
}
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(0))