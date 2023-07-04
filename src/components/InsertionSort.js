function insertionSort(inputArr, steps) {
  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      steps.push([...inputArr]);
      j = j - 1;
    }
    inputArr[j + 1] = key;
    steps.push([...inputArr]);
  }
  return steps;
}

export default insertionSort;
