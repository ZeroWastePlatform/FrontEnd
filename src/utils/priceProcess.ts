export const numberWithCommas = (price: number) => {
  const result = [];
  const inputPrice = Array.from(String(price)).reverse();

  for (let i = 0; i < inputPrice.length; i++) {
    result.unshift(inputPrice[i]);
    if (i % 3 === 2 && i !== inputPrice.length - 1) {
      result.unshift(",");
    }
  }
  return result.join("");
};

export const discountPrice = ({ price, discountRate }: { price: number; discountRate: number }) =>
  Math.floor((price * (100 - discountRate)) / 100);
