import { Fragment, useState } from "react";
import Chart from "./components/Chart";
import styles from "../src/components/App.module.css";

const design =
  "min-h-screen w-screen bg-gray-900 px-8 flex flex-col flex-wrap justify-center items-center";

const span = "w-40 mx-4 px-2 py-[1px] rounded-full mt-2";

const algoViz = `${styles.algoViz} [font-size:1.2rem] xs:[font-size:1.5rem] sm:[font-size:2.5rem]`;
const para = `${styles.para} [font-size:1rem] xs:[font-size:1.2rem] sm:[font-size:1.5rem]`;
const para1 = `${styles.para1} [font-size:1rem] xs:[font-size:1.2rem] sm:[font-size:1.2rem]`;
const nameD = `${styles.name} [font-size:12px] xs:[font-size:16px] md:[font-size:22px] lg:[font-size:27px]`;

const selectD =
  "bg-black text-center rounded-md text-cyan-300 text-[11px] xs:text-[15px] md:text-xl lg:text-2xl outline-none";

const colors = [
  "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
  "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
  "linear-gradient(120deg, #f093fb 0%, #ec4899 100%)",
  "linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)",
  "linear-gradient(-225deg, #f9a8d4 0%, #9333ea 100%)",
  "linear-gradient(to top, #005bea 0%, #00c6fb 100%)",
];

function App() {
  const [speed, setSpeed] = useState("80");
  const [algo, setAlgo] = useState("0");
  const [name, setName] = useState("Selection Sort");
  const [show, setShow] = useState(true);
  const [color, setColor] = useState(colors[0]);

  const setSpeedHandler = (e) => {
    setSpeed(e.target.value);
  };

  const setAlgoHandler = (e) => {
    setAlgo(e.target.value);
    if (e.target.value === "0") {
      setName("Selection Sort");
      setColor(colors[0]);
    } else if (e.target.value === "1") {
      setName("Insertion Sort");
      setColor(colors[1]);
    } else if (e.target.value === "2") {
      setName("Merge Sort");
      setColor(colors[2]);
    } else if (e.target.value === "3") {
      setName("Bubble Sort");
      setColor(colors[3]);
    } else if (e.target.value === "4") {
      setName("Quick Sort");
      setColor(colors[4]);
    } else {
      setName("Heap Sort");
      setColor(colors[5]);
    }
  };

  const setShowHandler = () => {
    setShow(false);
  };

  const trackHandler = () => {
    setShow(true);
  };

  return (
    <Fragment>
      {show && (
        <div className={`${design}`}>
          <div className={`text-center ${styles.landing}`}>
            <h1 className={`${algoViz}`}>Welcome To Algo-Viz !!</h1>
            <p className={`${para} mb-3`}>
              Algo-Viz is the demonstration of visualizing the execution of six
              different sorting algorithms including
            </p>
            <p className={`${para1} mb-3`}>
              <div
                className={`flex flex-col sm:flex-row flex-wrap justify-center items-center ${styles.landing2}`}
              >
                <span className={`bg-teal-400 ${span}`}> Selection Sort </span>
                <span className={`bg-cyan-400 ${span}`}> Insertion Sort </span>
                <span className={`bg-sky-400 ${span}`}> Merge Sort </span>
                <span className={`bg-blue-400 ${span}`}> Bubble Sort </span>
                <span className={`bg-indigo-400 ${span}`}> Quick Sort </span>
                <span className={`bg-violet-400 ${span}`}> Heap Sort </span>
              </div>
            </p>
            <p className={`${para} mb-1 sm:mb-3`}>
              This data storytelling application will help to analyze the time
              complexity of different sorting algorithms. How these algorithms
              work under the hood can be observed easily by manipulating each
              and every execution steps.
            </p>
          </div>
          <button
            className={`${styles.button} ${styles.btng} mt-6 sm:mt-10 w-32 h-9 mb-3 sm:mb-0`}
            onClick={setShowHandler}
          >
            Get Started
          </button>
        </div>
      )}
      {!show && (
        <div className={`${design}`}>
          <div
            className={`fixed top-2 w-[98%] h-[7%] rounded-md ${styles.header} flex justify-between items-center`}
          >
            <div className={`${nameD} ml-1 sm:ml-3`}>{name}</div>
            <div className="flex flex-col md:flex-row items-center">
              <label for="speed" className={`${nameD} pr-3`}>
                Speed :
              </label>
              <select
                id="speed"
                value={speed}
                onChange={setSpeedHandler}
                className={`${selectD}`}
              >
                <option value="120" className="">
                  Slow
                </option>
                <option value="80" className="">
                  Medium
                </option>
                <option value="50" className="">
                  Fast
                </option>
              </select>
            </div>
            <div className="text-white md:mr-4 flex flex-col md:flex-row items-center">
              <label for="algos" className={`${nameD} pr-3`}>
                Algorithms :
              </label>
              <select
                id="algos"
                value={algo}
                onChange={setAlgoHandler}
                className={`${selectD}`}
              >
                <option value="0" className="">
                  Selection Sort
                </option>
                <option value="1" className="">
                  Insertion Sort
                </option>
                <option value="2" className="">
                  Merge Sort
                </option>
                <option value="3" className="">
                  Bubble Sort
                </option>
                <option value="4" className="">
                  Quick Sort
                </option>
                <option value="5" className="">
                  Heap Sort
                </option>
              </select>
            </div>
          </div>
          <Chart
            speed={speed}
            algo={algo}
            onTrack={trackHandler}
            color={color}
          />
        </div>
      )}
    </Fragment>
  );
}

export default App;
