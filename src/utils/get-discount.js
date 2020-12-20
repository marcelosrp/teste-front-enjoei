export function getDiscount(currentPrice, originalPrice) {
  const porcentagemPaga = (currentPrice / originalPrice) * 100;
  const desconto = Math.round(100 - porcentagemPaga);

  return `${desconto}% off`;
}
