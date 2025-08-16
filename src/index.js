module.exports = function toReadable(number) {
  const numbersArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const numDecArr = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';
  const str = number.toString();

  if (str.length === 1 || number < 20) {
    result = numbersArr[number];
  } else if (str.length === 2) {
    result =
      number % 10 === 0
        ? numDecArr[Number(str[0] - 2)]
        : `${numDecArr[Number(str[0] - 2)]} ${numbersArr[Number(str[1])]}`;
  } else if (str.length === 3) {
    if (number % 100 === 0) {
      result = `${numbersArr[Number(str[0])]} hundred`;
    } else if (Number(str[1] + str[2]) < 20) {
      result = `${numbersArr[Number(str[0])]} hundred ${
        numbersArr[Number(str[1] + str[2])]
      }`;
    } else {
      result = `${numbersArr[Number(str[0])]} hundred ${
        str[1] !== '0' ? `${numDecArr[Number(str[1] - 2)]} ` : ''
      }${str[2] !== '0' ? numbersArr[Number(str[2])] : ''}`;
    }
  }

  result = result.trim();
  return result;
};
