/**
 * @description This handles everything numbers
 * This is a test method 
 */
export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
