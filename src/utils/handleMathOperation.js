import { numToString } from './num-to-string';
import { strToNum } from './string-to-num';

export const handleMathOperation = (operator, ...arg) => {
  console.log({ operator, arg });
  const handleArguments = arg.filter(Boolean).map(strToNum);
  const sum = (a, b = 0) => a + b;
  const subtraction = (a, b = 0) => a - b;
  const multiplication = (a, b = a) => a * b;
  const division = (a, b = 1) => a / b;
  let result;

  switch (operator) {
    case '+':
      result = sum(...handleArguments);
      break;
    case '-':
      result = subtraction(...handleArguments);
      break;
    case '×':
      result = multiplication(...handleArguments);
      break;
    case '÷':
      result = division(...handleArguments);
      break;
    default:
      break;
  }

  return numToString(result);
};
