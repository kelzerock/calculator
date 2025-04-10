import { numToString } from './num-to-string';
import { strToNum } from './string-to-num';

export const handleMathOperation = (operator, ...arg) => {
  const handleArguments = arg.filter(Boolean).map(strToNum);
  const sum = (a, b = 0) => a + b;
  const subtraction = (a, b = 0) => a - b;
  const multiplication = (a, b = a) => a * b;
  const division = (a, b = 1) => {
    const scale = 1e10;
    return Math.round((a * scale) / b) / scale;
  };
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
