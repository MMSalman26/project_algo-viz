function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right, steps) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      steps.push([...items]);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, steps) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, steps);
    if (left < index - 1) {
      quickSort(items, left, index - 1, steps);
    }
    if (index < right) {
      quickSort(items, index, right, steps);
    }
  }
  return items;
}

function QuickSort(items, steps) {
  quickSort(items, 0, items.length - 1, steps);

  return steps;
}

export default QuickSort;
