import { Fragment, React, useState, useEffect } from "react";
import Bar from "./Bar";
import QuickSort from "./QuickSort";
let numbers = [];

for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 26 + 5));
}

let steps = [[...numbers]];

steps = QuickSort(numbers, steps);

function QuickChart(props) {
  const [nums, setNums] = useState(steps[0]);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  let timeInterval;

  useEffect(() => {
    timeInterval = setInterval(() => {
      if (start) {
        setCount((prev) => {
          if (prev <= steps.length - 1) {
            setNums(steps[prev]);
          } else {
            setNums(numbers);
            setStart(false);
            return 0;
          }
          return prev + 1;
        });
      }
    }, parseInt(props.speed));

    return () => {
      clearInterval(timeInterval);
    };
  }, [start, props.speed]);

  const setShowHandler = () => {
    setStart(!start);
  };

  const setStopHandler = () => {
    setStart(false);
    setCount(0);
    setNums(steps[0]);
    clearInterval(timeInterval);
  };

  const Bars = [];
  for (let i = 0; i < numbers.length; i++) {
    Bars.push(<Bar key={Math.random().toString()} height={nums[i]} />);
  }
  return (
    <Fragment>
      <div className="flex justify-center items-end mt-[6rem]">{Bars}</div>
      <div className="flex mt-6">
        <button
          className="w-20 h-9 bg-black text-white rounded-lg mr-4"
          onClick={setShowHandler}
        >
          {start ? "Pause" : "Play"}
        </button>
        <button
          className="w-20 h-9 bg-black text-white rounded-lg mr-4"
          onClick={setStopHandler}
        >
          Stop
        </button>
        <button
          className="w-20 h-9 bg-black text-white rounded-lg"
          onClick={() => {
            setStart(false);
            setCount(0);
            numbers = [];
            steps = [];
            for (let i = 0; i < 50; i++) {
              numbers.push(Math.floor(Math.random() * 26 + 5));
            }

            steps = [[...numbers]];

            steps = QuickSort(numbers, steps);

            setNums(steps[0]);
          }}
        >
          Reload
        </button>
      </div>
      <button
        className="text-white mt-5"
        onClick={() => {
          props.onTrack();
        }}
      >
        <h1>Back To Home Page</h1>
      </button>
    </Fragment>
  );
}

export default QuickChart;
