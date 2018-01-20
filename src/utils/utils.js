export const calculateSecondary = (conversions, primaryCurrency, secondaryCurrency, amount) =>
  (conversions[secondaryCurrency] / conversions[primaryCurrency]) * amount;

export default {
  calculateSecondary,
};
