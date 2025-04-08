export type Digits = {
  thousand: number;
  hundred: number;
  dozen: number;
  singular: number;
};

export const splitNumberIntoChunks = (number: number): Digits => {
  const thousand = Math.floor((number % 10000) / 1000) * 1000;
  const hundred = Math.floor((number % 1000) / 100) * 100;
  const dozen = Math.floor((number % 100) / 10) * 10;
  const singular = number % 10;

  return {
    thousand,
    hundred,
    dozen,
    singular
  }
}

export const transformDigit = (length: number) => {
  let transformValue = 'scale(1, 1)';
  switch (length) {
    case 2:
      transformValue = 'scale(-1, 1)';
      break;
    case 3:
      transformValue = 'scale(1, -1)';
      break;
    case 4:
      transformValue = 'scale(-1, -1)';
      break;
  }

  return transformValue;
}