const anagrams = (strA, strB) => {
  let 
    a = strA.toLowerCase().match(/[a-zа-я]/g),
    b = strB.toLowerCase().match(/[a-zа-я]/g);

  if(a.length !== b.length) {
    return false;
  }
  return a.sort().toString() === b.sort().toString();
};

module.exports = anagrams
