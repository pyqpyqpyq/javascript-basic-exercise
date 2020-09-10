export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
// * Please do NOT modify the signature of the function.

  if (string == null || ''|| undefined) {
    return 0;
  } if (prediction == null || undefined) { return string.length; }
  const tem = countCharacter(prediction).toString();
  let j = 0;
  for (let i = 0; i < string.length; i+=1) {
    if (prediction(string[i])) { j++; }
  }
  console.log(j);
  return j;
}
