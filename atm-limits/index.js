function atmLimits(amount, limits) {
  const notes = Object.keys(limits).map(Number).sort((a, b) => b - a);
  const collect = (amount, notes) => {
    if(amount === 0) { return {}}
    if(!notes.length) return;
    const currentNote = notes[0];
    const avaliableNoteCnt = limits[currentNote];
    const needNotesCnt = Math.floor(amount / currentNote);
    const cnt = Math.min(avaliableNoteCnt, needNotesCnt);

    for(let i = cnt; i >= 0; i--) {
      let res = collect(amount - i * currentNote, notes.slice(1));

      if (res) {
        return i ? {[currentNote]: i, ...res} : res;
      }
    }
  }
  
  return collect(amount, notes);
}

var limits = {
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
  30: 60
};

console.log(atmLimits(1000, limits)) // {1000: 1}
console.log(atmLimits(150, limits)) // {100: 1, 50: 1}
console.log(atmLimits(120, limits)) // {30: 4}
console.log(atmLimits(230, limits)) // {100: 2, 30: 1}
console.log(atmLimits(275, limits)) // undefined
console.log(atmLimits(5000000, limits)) // undefined

