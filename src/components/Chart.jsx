import { Fragment, React, useState, useEffect } from "react";
import Bar from "./Bar";
import allAlgos from "./allAlgos";
import styles from "./App.module.css";

let steps = allAlgos("0");

function Chart(props) {
  const [nums, setNums] = useState(steps[0]);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    steps = allAlgos(props.algo);
    setStart(false);
    setCount(0);
    setNums(steps[0]);
  }, [props.algo]);

  let timeInterval;

  useEffect(() => {
    timeInterval = setInterval(() => {
      if (start) {
        setCount((prev) => {
          if (prev <= steps.length - 1) {
            setNums(steps[prev]);
          } else {
            setNums(steps[steps.length - 1]);
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
  }, [start, props.speed, props.algo]);

  const setShowHandler = () => {
    setStart(!start);
  };

  const setStopHandler = () => {
    setStart(false);
    setCount(0);
    setNums(steps[0]);
    clearInterval(timeInterval);
  };

  let Bars = [];
  for (let i = 0; i < steps[0].length; i++) {
    Bars.push(
      <Bar
        key={Math.random().toString()}
        height={nums[i]}
        color={props.color}
      />
    );
  }

  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex justify-center items-end mt-[3.3rem] xs:mt-[6rem]">
            {Bars}
          </div>
          <div className="flex mt-6 justify-center">
            <button
              className={`w-16 xs:w-20 h-7 mr-3 xs:mr-6 ${styles.button2}`}
              onClick={setShowHandler}
            >
              {start ? "Pause" : "Play"}
            </button>
            <button
              className={`w-16 xs:w-20 h-7 mr-3 xs:mr-6 ${styles.button2}`}
              onClick={setStopHandler}
            >
              Stop
            </button>
            <button
              className={`w-16 xs:w-20 h-7 ${styles.button2}`}
              onClick={() => {
                setStart(false);
                setCount(0);

                steps = allAlgos(props.algo);

                setNums(steps[0]);
              }}
            >
              Reload
            </button>
          </div>
        </div>
        <div>
          <button
            className={`mt-4 xs:mt-7 mb-3`}
            onClick={() => {
              props.onTrack();
            }}
          >
            <h1
              style={{
                backgroundImage: `${props.color}`,
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              Back To Home Page
            </h1>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Chart;
