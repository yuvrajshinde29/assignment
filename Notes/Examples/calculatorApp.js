const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number : ", (a) => {
  rl.question("Enter second number : ", (b) => {
    rl.question("Enter operator number : ", (op) => {
      a = parseFloat(a);
      b = parseFloat(b);

      let result;

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;

          break;
        case "*":
          result = a * b;

          break;
        case "/":
          if (b === 0) return console.log("Error : Divisible by zero");
          result = a / b;

          break;
        case "%":
          if (b === 0) return console.log("Error : Divisible by zero");
          result = a % b;
          break;

        default:
          result = "Invalid operator";
      }

      console.log("Result : ", result);
      rl.close();
    });
  });
});
