let sale: number = 122324;
let course: string = "Typescript";
let is_okay: boolean = true;

const num: number[] = [1,2,3]; 

const person: [string, number] = ["Alice", 30]; // tuple

const employee: {readonly id: number, name: string } = {id: 1, name:'Nikhil'};


function calculateTax(income: number, taxYear: number): number {

    if(income < 50000) return income*1.2;
    return 0;
}