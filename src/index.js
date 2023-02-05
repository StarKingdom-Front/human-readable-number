const one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const twenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred';

module.exports = function toReadable (number) {

  num = number.toString();

  if (num == 0){
    result = 'zero';
    return result;
  } else if (num < 10) {
    result = `${one[num]}`;
    return result.trim();
  } else if (num >= 10 && num < 20) {
    result = `${ten[str[1]]}`;
    return result.trim();
  } else if (num >= 20 && num < 100) {
    result = `${twenty[num[0]]} ${one[num[1]]}`;
    return result.trim();
  } else if (num >= 100 && num[1] != 1 && num[1] != 0){
    result = `${one[num[0]]} ${hundred} ${twenty[num[1]]} ${one[num[2]]}`;
    return result.trim();
  } else if (num >= 100 && num[1] == 1 && num[1] != 0) {
    result = `${one[num[0]]} ${hundred} ${ten[num[2]]}`;
    return result.trim();
  } else if (num >= 100 && num[1] == 0) {
    result = `${one[num[0]]} ${hundred} ${one[num[2]]}`;
    return result.trim();
  } else {
    return result;
  }
}
