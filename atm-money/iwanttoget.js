var iWantToGet = (amountRequired, limits) => {
  const collect = (amount, nominals) => {
    if(amount === 0) return {};
    if(!nominals.length) return;

    const currentNominal = nominals[0];
    const avaliableNominalNotes = limits[currentNominal];
    const nominalAmount = Math.floor(amount / currentNominal);
    const actualNominalAmount = Math.min(avaliableNominalNotes, nominalAmount);

    for(let i = actualNominalAmount; i >= 0; i--) {
      let rest = collect(amount - currentNominal * i, nominals.slice(1));

      if(rest) {
        return i ? { [currentNominal]: i, ...rest } : rest;
      }
    }
  };

  let nominals = Object.keys(limits).map(Number).sort((a, b) => b - a);

  return collect(amountRequired, nominals);
}

module.exports = iWantToGet;
