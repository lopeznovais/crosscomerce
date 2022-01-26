export default function MergeSort(items: number[]): number[] {
  return split(items);
}

function split(items: number[]): number[] {
  var halfLength = Math.ceil(items.length / 2);
  var low = items.slice(0, halfLength);
  var high = items.slice(halfLength);
  if (halfLength > 1) {
    low = split(low);
    high = split(high);
  }
  return merge(low, high);
}

function merge(low: number[], high: number[]): number[] {
  var indexLow = 0;
  var indexHigh = 0;
  var combined = [];
  while (indexLow < low.length && indexHigh < high.length) {
    if (low[indexLow] <= high[indexHigh]) {
      combined.push(low[indexLow++]);
    } else {
      combined.push(high[indexHigh++]);
    }
  }
  return combined.concat(low.slice(indexLow)).concat(high.slice(indexHigh));
}
