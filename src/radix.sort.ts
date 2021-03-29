export const radixSort = (arr: number[]): number[] => {
  const max = getMax(arr); // length of the max digit in the array
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => {
        const x: number[] = [];
        return x;
    });
    for (let j = 0; j < arr.length; j++) {
      buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into buckets
    }
    const x: number[] = [];
    arr = x.concat(...buckets);
  }
  return arr;
};

const getMax = (arr: number[]): number => {
  let max = 0;
  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }
  return max;
};

const getPosition = (num: number, place: number): number => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};
