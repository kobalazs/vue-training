import { expect } from 'chai'

import RomanService from '../../src/services/RomanService'

describe('RomanService', () => {
  it('works', () => {
    const testData = [
      { input: 1, output: 'I' },
      { input: 2, output: 'II' },
      { input: 4, output: 'IV' },
      { input: 5, output: 'V' },
      { input: 6, output: 'VI' },
      { input: 7, output: 'VII' },
      { input: 9, output: 'IX' },
      { input: 10, output: 'X' }
    ]
    for (let testRow of testData) {
      expect(RomanService.arabicToRoman(testRow.input)).to.equal(testRow.output)
    }
  })
})
