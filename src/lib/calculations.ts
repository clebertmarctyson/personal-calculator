export const calculateGrowthRate = (
  initialAmount: number,
  finalAmount: number
): number => {
  const growthRate = ((finalAmount - initialAmount) / initialAmount) * 100;
  const result = parseFloat(growthRate.toFixed(2));
  return result;
};

export const calculatePerncentRate = (
  initialAmount: number,
  percentage: number
): number => {
  const percentRate = (percentage / 100) * initialAmount;
  const result = parseFloat(percentRate.toFixed(2));
  return result;
};

export const calculateFinalAmount = (
  initialAmount: number,
  percentage: number
): number => {
  const finalAmount = initialAmount + (percentage / 100) * initialAmount;
  const result = parseFloat(finalAmount.toFixed(2));
  return result;
};
