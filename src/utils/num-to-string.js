export const numToString = (num) => {
  if (typeof num === 'string') return num;
  if (typeof num === 'number') return num.toString();
  throw Error('Input data is incorrect.');
};
