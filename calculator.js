let first_num = prompt("Input the first number");
let second_num = prompt("Input the second number");
parseInt(first_num);
parseInt(second_num);
let operation = prompt(
  "Enter a number to pick an operation to perform:\n1.Addition \n2.Subtraction \n3.Multiplication \n4.Division"
);
switch (operation) {
  case "1":
    alert(
      `The sum of ${first_num} and  ${second_num} is ${
        parseInt(first_num) + parseInt(second_num)
      }`
    );
    break;
  case "2":
    alert(
      `The difference between ${first_num} and  ${second_num} is ${
        parseInt(first_num) - parseInt(second_num)
      }`
    );
    break;
  case "3":
    alert(
      ` ${first_num} multiplied by  ${second_num} is ${parseInt(first_num) * parseInt(second_num)}`
    );
    break;
  case "4":
    alert(
      `${first_num} divided by  ${second_num} is ${
        parseInt(first_num) / parseInt(second_num)
      }`
    );
    break;
  default:
    alert("Your choice isn't an option");
}
