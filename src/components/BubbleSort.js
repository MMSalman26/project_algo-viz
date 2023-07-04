function bubbleSort(Array, steps) {
  let len = Array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (Array[j] > Array[j + 1]) {
        let tmp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = tmp;
        steps.push([...Array]);
      }
    }
  }
  return steps;
}

export default bubbleSort;
