import { Fragment, React, useEffect, useState } from "react";
import selectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";

const numbers = [7, 3, 2, 10, 6, 1, 8, 5, 9, 4];

let steps = [[...numbers]];

// steps = selectionSort(numbers, steps);
// console.log(MergeSort(numbers, steps));

function Test() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  let timeInterval;

  useEffect(() => {
    timeInterval = setInterval(() => {
      if (start) {
        setCount((prev) => {
          if (prev <= steps.length - 1) {
            setNum(steps[prev]);
          } else {
            setNum(0);
          }
          return prev + 1;
        });
      }
    }, 500);

    return () => {
      clearInterval(timeInterval);
    };
  }, [start]);

  const setShowHandler = (e) => {
    setStart(true);
    setCount(0);
  };

  const setStopHandler = () => {
    setStart(false);
    clearInterval(timeInterval);
  };

  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div>
          <p className="text-4xl text-cyan-400">{num}</p>
        </div>
        <button
          className="w-20 h-9 bg-black text-white rounded-lg mt-10"
          onClick={setShowHandler}
        >
          Start
        </button>
        <button
          className="w-20 h-9 bg-black text-white rounded-lg mt-10"
          onClick={setStopHandler}
        >
          Stop
        </button>
      </div>
    </Fragment>
  );
}

export default Test;
