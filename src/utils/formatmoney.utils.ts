export const formatToMoney = (amount: number) => {
  if (isNaN(amount)) {
    throw new Error("Invalid number");
  }
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
