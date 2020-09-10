export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) { throw new Error('Creating list from undefined array'); }
  if (array.length === 0) { throw new Error('Creating list from empty array'); }
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  const ans = new Node(null);
  let cur = ans;
  for (let i = 0; i < array.length; i += 1) {
    cur.next = new Node(array[i]);
    cur = cur.next;
  }
  return ans.next;
}
