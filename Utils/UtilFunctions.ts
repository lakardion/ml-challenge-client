export const formatCurrency = (num: number) => {
  const numString = Math.trunc(num).toString();
  const lastIndex = numString.length - 1;

  if (lastIndex <= 2) return `$ ${numString}`;
  let result = "";

  for (let i = lastIndex; i >= 0; i--) {
    if (lastIndex - i === 0 || (lastIndex - i) % 3 !== 0)
      result = numString[i] + result;
    else result = numString[i] + "." + result;
  }

  return `$ ${result}`;
};

const zeroDecimalArray = ["0", "0"];

export const getDecimals = (n: number, amountOfDecimals: number): string[] => {
  if (amountOfDecimals === 0) return zeroDecimalArray;
  const decimalPart = n - Math.trunc(n);
  const decimalAsInteger = Math.round(
    decimalPart * Math.pow(10, amountOfDecimals)
  );
  if (amountOfDecimals === 1) return [decimalAsInteger.toString(), "0"];
  return decimalAsInteger.toString().substr(0, 2).split("");
};
