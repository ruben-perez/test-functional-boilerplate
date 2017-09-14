const R = require('ramda');

export const sum = (...items) => items.reduce((total, current) => {
  return total + current;
})

export const mult = (...items) => items.reduce((total, current) => total * current)

export const multBy = R.partial(mult)

export const multBy2 = R.partial(mult, [2])

export const multBy10 = R.partial(mult, [10])

export const multBy20 =R.partial(mult, [20])