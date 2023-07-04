function merge(arr, l, m, r, steps) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    steps.push([...arr]);
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    steps.push([...arr]);
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    steps.push([...arr]);
    j++;
    k++;
  }
}

function mergeSort(arr, l, r, steps) {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);

  mergeSort(arr, l, m, steps);
  mergeSort(arr, m + 1, r, steps);
  merge(arr, l, m, r, steps);
}

function MergeSort(arr, steps) {
  let size = arr.length;
  mergeSort(arr, 0, size - 1, steps);

  return steps;
}

export default MergeSort;
