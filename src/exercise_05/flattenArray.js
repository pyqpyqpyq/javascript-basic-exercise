export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const ans = [];
  if (array === undefined || array === null) { throw new Error('Flatten undefined or null array'); }
  if (array.length === 0) { return []; }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof (array[i]) !== 'number') {
      for (let j = 0; j < array[i].length; j += 1) {
        ans.push(array[i][j]);
      }
    } else { ans.push(array[i]); }
  }
  return ans;
}
