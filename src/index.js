module.exports = function toReadable (number) {
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
        'nineteen'
    ];

    const numDecArr = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    let result = "";
    let str = number.toString();

    if (str.length == 1 || number < 20) {
        result = numbersArr[number];
    } else if (str.length == 2) {
        result = (number % 10 == 0)
        ? numDecArr[parseInt(str[0]-2)]
        : numDecArr[parseInt(str[0]-2)] + " " + numbersArr[parseInt(str[1])];
    } else if (str.length == 3) {
        if (number % 100 == 0) {
            result = numbersArr[parseInt(str[0])] + " hundred";
        } else if (parseInt(str[1]+str[2]) < 20) {
            result = numbersArr[parseInt(str[0])] + " hundred " + numbersArr[parseInt(str[1]+str[2])];
        } else {
            result = numbersArr[parseInt(str[0])] + " hundred " + ((str[1] != "0")
            ? numDecArr[parseInt(str[1]-2)] + " "
            : "") + ((str[2] != 0) ? numbersArr[parseInt(str[2])]
            : "");
        }
    }

    result = result.trim();
    return result;
}
