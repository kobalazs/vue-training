const symbolsForDigits = [
  { one: 'I', five: 'V', ten: 'X' },
  { one: 'X', five: 'L', ten: 'C' },
  { one: 'C', five: 'D', ten: 'M' },
  { one: 'M', five: 'D', ten: '?' }
]

function digitToRoman(digit, symbols) {
  switch (digit) {
    case 0:
      return ''
    case 4:
      return symbols.one + symbols.five
    case 9:
      return symbols.one + symbols.ten
    default:
      if (digit < 5) {
        return symbols.one.repeat(digit)
      }
      return symbols.five + symbols.one.repeat(digit - 5)
  }
}

export default {
  arabicToRoman: function(number) {
    return number
      .toString(10)
      .split('')
      .reverse()
      .map(function (digit, place) {
        return digitToRoman(parseInt(digit), symbolsForDigits[place])
      })
      .reverse()
      .join('')
  }
}
