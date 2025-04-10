export const strToNum = (string) => {
  if (typeof string === 'number') return string;
  if (typeof string === 'string') {
    const number = Number.parseFloat(string);
    if (!Number.isNaN(number)) {
      return number;
    }
  }
  console.log({ string });
  throw Error('Incorrect input data in function');
};
