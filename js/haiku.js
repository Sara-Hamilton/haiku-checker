export class Haiku {
  constructor(line1, line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

   vowelCount() {
    let count = 0;
    const vowels = ["a","e","i","o","u"];
    for (let i = 0; i < this.line1.length; i++) {
      if (vowels.includes(this.line1[i])) {
        count += 1;
      }
    }
    return count;
  }

}
