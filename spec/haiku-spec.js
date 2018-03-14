import { Haiku } from './../js/haiku.js';

describe('Haiku', function() {
  let reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku("old pond", "frog leaps in", "water's sound");
  });

  it('will return number of vowels in input', function() {
    let result = reusableHaiku.vowelCount("testing string");
    expect(result).toEqual(3);
  });

  it('will return number of vowels in line3', function() {
    let result = reusableHaiku.vowelCount(reusableHaiku.line3);
    expect(result).toEqual(4);
  });

  it('will return an array of words', function() {
    let splitArray = reusableHaiku.lineSplit(reusableHaiku.line2);
    console.log(splitArray);
    expect(splitArray).toEqual(['frog','leaps','in']);
  });

  it('will return vowel count except for two vowels together', function() {
    var result = reusableHaiku.syllableCount("haiku");
    expect(result).toEqual(2);
  });

});
