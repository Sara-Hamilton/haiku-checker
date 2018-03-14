export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  vowelCount(line) {
   let count = 0;
   const vowels = ["a","e","i","o","u"];
   for (let i = 0; i < line.length; i++) {
     if (vowels.includes(line[i])) {
       count += 1;
     }
   }
   return count;
  }

  lineSplit(line) {
    let splitArray = line.split(" ");
    return splitArray;
  }
}
