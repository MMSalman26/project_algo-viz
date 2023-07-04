import selectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import insertionSort from "./InsertionSort";
import bubbleSort from "./BubbleSort";
import QuickSort from "./QuickSort";
import heapSort from "./HeapSort";

let numbers = [];
let steps = [];

function allAlgos(algo) {
  if (algo === "0") {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = selectionSort(numbers, steps);

    return steps;
  } else if (algo === "1") {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = insertionSort(numbers, steps);

    return steps;
  } else if (algo === "2") {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = MergeSort(numbers, steps);

    return steps;
  } else if (algo === "3") {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = bubbleSort(numbers, steps);

    return steps;
  } else if (algo === "4") {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = QuickSort(numbers, steps);

    return steps;
  } else {
    numbers = [];
    steps = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(Math.floor(Math.random() * 26 + 5));
    }

    steps = [[...numbers]];

    steps = heapSort(numbers, steps);

    return steps;
  }
}

export default allAlgos;
