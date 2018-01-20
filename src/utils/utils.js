export const calculateSecondary = ( conversions, primaryCurrency, secondaryCurrency, amount) => {
    return conversions[secondaryCurrency] / conversions[primaryCurrency] * amount;
};

export default {
    calculateSecondary,
}