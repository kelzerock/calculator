import { numToString } from './num-to-string';
import { strToNum } from './string-to-num';

export const handlePercent = (string) => {
  const number = strToNum(string) * 1000;
  const result = Math.round(number / 100);
  return numToString(result / 1000);
};
