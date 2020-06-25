export default {
  arabicToRoman: function(number) {
    switch (number) {
      case 4:
        return 'IV'
      case 9:
        return 'IX'
      case 10:
        return 'X'
      default:
        if (number < 5) {
          return 'I'.repeat(number)
        }
        return 'V' + 'I'.repeat(number - 5)
    }
  }
}
