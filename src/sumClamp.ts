export const sumClamp = (numbers: number[], clamp: number) => {
  //  return 0;
  //  return numbers.reduce((sum, number) => sum + number, 0);
  return Math.min(
    numbers.reduce((sum, number) => sum + number, 0),
    clamp
  );
};
