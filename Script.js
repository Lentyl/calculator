const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');

const numbers = []
const operations = []
let counter = 0;

let calculationResult = 0;


calculation = (e) => {

    if (operations.length === 1 && numbers.length === 3) {
        console.log("b   " + numbers);
        console.log("b   " + operations);
        numbers.splice(1, 1);
        console.log("b   " + numbers);
        console.log("b   " + operations);
    }

    if (e.target.textContent === "+") {
        operations.push("+");

    } else if (e.target.textContent === "-") {
        operations.push("-");

    } else if (e.target.textContent === "*") {
        operations.push("*");

    } else if (e.target.textContent === "/") {
        operations.push("/");

    } else if (e.target.textContent === "=") {


        for (i = 0; i < numbers.length; i++) {
            if (i === 0) {
                calculationResult = numbers.shift();
            }
            if (operations[i] === '+') {
                calculationResult += numbers[i]

            } else if (operations[i] === '-') {
                calculationResult -= numbers[i]

            } else if (operations[i] === '*') {
                calculationResult *= numbers[i]

            } else if (operations[i] === '/') {
                calculationResult /= numbers[i]

            }
            if (i < numbers.length) {
                numbers[0] = calculationResult

            }
        }


        result.textContent = calculationResult;
        numbers.length = 0;
        numbers.push(calculationResult)
        operations.length = 0;
        counter = 0;

        console.log("a   " + numbers);
        console.log("a   " + operations);

    } else if (e.target.textContent === "C") {
        result.textContent = 0;
        numbers.length = 0;
    }
}




buttons.forEach(button => {


    button.addEventListener("click", (e) => {


        counter++

        result.textContent += e.target.textContent;

        if (e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "*" || e.target.textContent === "/" || e.target.textContent === "=") {
            counter *= -1;

            let number = result.textContent.slice(counter, -1)
            number *= 1
            numbers.push(number)


            counter = 0;
        }

        calculation(e);



        // counter = result.textContent.length
        // numbers.push(result.textContent *= 1)
        // console.log(counter + ' counter');
        // console.log(calculationResult + "   CalculationResult");
        // console.log(numbers);
        // console.log(numbers.length + 'numbersLenght ');






    });
})