function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return num1 + num2;
    }
}

const number1 = 5;
const number2 = 7.8;
const printResult = true;
const phrase = "Result is ";

add(number1, number2, printResult, phrase);
