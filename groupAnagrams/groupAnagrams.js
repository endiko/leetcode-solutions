const stringSignature = (str) => {
  const strHash = new Map();
  let hashSum = '';
  let newStr = str.replace(/\W/g, '').toLowerCase().match(/[a-zа-я]/g).sort().join('');

  for(let s of newStr) {
    strHash.set(s, strHash.get(s) + 1 || 1);
  }

  for (let str of strHash) {
    hashSum += str;
  }

  return hashSum;
}

const groupAnagrams = (arr) => {
  if(!arr.length) {
    console.log('Был задан пустой массив!')
    return;
  }

  const groupsHash = {};
 
  arr.forEach(str => {
    const sign = stringSignature(str);
    (groupsHash[sign] || (groupsHash[sign] = [])).push(str);
  });

  return Object.values(groupsHash);
}

module.exports = groupAnagrams;
