const formatCurrency = (num: number) => {
  const numString = num.toString();
  const lastIndex = numString.length - 1;

  if (lastIndex <= 2) return `$ ${num}`;
  let result = "";

  for (let i = lastIndex; i >= 0; i--) {
    if (lastIndex - i === 0 || (lastIndex - i) % 3 !== 0)
      result = numString[i] + result;
    else result = numString[i] + "." + result;
  }

  return `$ ${result}`;
};

export default formatCurrency;
