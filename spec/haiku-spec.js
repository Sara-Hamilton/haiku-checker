import { Haiku } from './../js/haiku.js';

describe('Haiku', function() {
  let reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku("old pond", "frog leaps in", "water's sound");
  });

  it('will return number of vowels in a word', function() {
    let result = reusableHaiku.vowelCount();
    expect(result).toEqual(2);
  });

});
