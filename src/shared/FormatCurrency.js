const formatCurrencyWithinFixed = (number) =>
  number &&
  number
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default formatCurrencyWithinFixed;
