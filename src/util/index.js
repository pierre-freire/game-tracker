export function replaceDot(price) {
  return price.replace(".", ",");
}

export function roundedDiscount(discount) {
  const save = Math.round(discount);

  if (save == 100) return "GRÁTIS";
  return `-${save}%`;
}