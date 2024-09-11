//1. Create a function to check if two objects are equal

// Example
// ○ Input: { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input: { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input: { a: 1 } & { a: 1 }
// ○ Output: true

interface ICheck {
    a: number;
    a2: string;

}
interface ICheck2 {
    a: number;
    b: number;
    c: number;
}

class Checker implements ICheck {
    a;
    a2;

    constructor(paraA: number, paraA2: string) {
        this.a = paraA;
        this.a2 = paraA2;
    };

    equalChecker(other: ICheck): boolean {
        return this.a === other.a && this.a2 === other.a2;
    }
}

const ex1 = new Checker(1, "hello");
const ex2 = new Checker(1, "hello");
const ex3 = new Checker(2, "World");

console.log(ex1.equalChecker(ex2));
console.log(ex1.equalChecker(ex3));

//Alternative
function areObjectsEqual(obj1: ICheck, obj2: ICheck): boolean {
    return obj1.a === obj2.a && obj1.a2 === obj2.a2;
}

// Test the areObjectsEqual function
console.log(areObjectsEqual(ex1, ex2));
console.log(areObjectsEqual(ex1, ex3));


//2. Create function to find the wintersection of two objects
class Check2 implements ICheck2 {
    a;
    b;
    c;

    constructor(paraA: number, paraB: number, paraC: number) {
        this.a = paraA;
        this.b = paraB;
        this.c = paraC;
    }

    getIntersection(obj: ICheck) {  // Input salah satu dari object yang ada 
        const inter: ICheck = {}; //The Reulst 

        for (const key in this) { // Akses data dari parameter input berupa array 
            if (key in obj && this[key] === obj[key]) {
                inter[key] = this[key];  // Logic kalau kita ketemu intersection of the two object , and return to the result
            }
        }
        return inter;
    }
}

const check1 = new Check2(1, 2, 3);  //Inputs Parameter 
const check2 = new Check2(1, 4, 5);
// Check the intersection
console.log(check1.getIntersection(check2));




//3. Merged Array And Remove The Intersection
//Right Formula
interface IData {
    name: string;
    email: string;
}

interface IMurid {
    student1: IData[];
    student2: IData[];
    student3: IData[];
}

class Data implements IData {
    name: string;
    email: string;

    constructor(paramName: string, paramEmail: string) {
        this.name = paramName;
        this.email = paramEmail;
    }
}

const student1Data = new Data("John", "john@gmail.com");
const student2Data = new Data("Garry", "garry@gmail.com");
const student3Data = new Data("Jhonson", "johnson@gmail.com");

const arraynew1: IData[] = [student1Data, student2Data];
const arraynew2: IData[] = [student1Data, student3Data];
console.log(arraynew1);
console.log(arraynew2);

class Murid {
    student1: IData[];
    student2: IData[];
    student3: IData[];

    constructor(paramS1: IData[], paramS2: IData[], paramS3: IData[]) {
        this.student1 = paramS1;
        this.student2 = paramS2;
        this.student3 = paramS3;
    }

    pushToArray(arr1: IData[], arr2: IData[]) {
        const mergedArray: IData[] = [...arr1, ...arr2]
        const uniqueArray: IData[] = [];

        mergedArray.forEach((student) => {
            const isDuplicate = uniqueArray.some((uniqueStudent) => uniqueStudent.email === student.email);

            if (!isDuplicate) {
                uniqueArray.push(student)
            }
        });
        return uniqueArray;

    }

}
const murid = new Murid([], [], []);
const resultArray = murid.pushToArray(arraynew1, arraynew2);
console.table(resultArray)




