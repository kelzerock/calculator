import { numToString } from './num-to-string';
import { strToNum } from './string-to-num';

export const handlePercent = (string) => {
  const number = strToNum(string);
  return numToString(number / 100);
};
