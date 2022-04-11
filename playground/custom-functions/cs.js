function calculateBill(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);
  return total;
}
