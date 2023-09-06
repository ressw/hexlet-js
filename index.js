const l = console.log;

// @ts-check
// eslint-disable-next-line no-unused-vars

import _ from "lodash";

// BEGIN (write your solution here)

function loop(arr, res) {
  let elem;

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      res.push(arr[i].splice(0));
      l('res1:', res);

    } else if (i === arr.length - 1) {
      while (arr[i].length) {
        elem = arr[i].splice(-1, 1);
        res.push(elem[0]);
      }
      l('2:', res);

    } else {
      elem = arr[i].splice(-1, 1);
      res.push(elem)[0];
    }

    if (!arr[i].length) arr.splice(i, 1);
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    res.push(arr[i].splice(0, 1)[0]);
    if (!arr[i].length) arr.splice(i, 1);
  }

}

export default function buildSnailPath(arr) {
  const res = [];
  while (arr.length) {
    loop(arr, res);
  }
  // l(_.flattenDeep(res));
  l(res);
  return res;
}

buildSnailPath([
  [1, 2],
  [3, 4],
]); // [1, 2, 4, 3]

// buildSnailPath([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]



