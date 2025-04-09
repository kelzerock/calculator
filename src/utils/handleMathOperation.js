import { numToString } from './num-to-string';
import { strToNum } from './string-to-num';

export const handleMathOperation = (operator, ...arg) => {
  const handleArguments = arg.map(strToNum);
  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => a / b;
  let result;

  switch (operator) {
    case '+':
      console.log('sum');
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

  console.log({ result, handleArguments });
  return numToString(result);
};
