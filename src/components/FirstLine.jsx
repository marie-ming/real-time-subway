import { useState, useEffect } from "react";
import TrainIcon from "./TrainIcon";

const FirstLine = () => {
  const [left, setLeft] = useState("1275px");
  const [top, setTop] = useState("255px");
  const [display, setDisplay] = useState(false);
  const [away, setAway] = useState(true);

  const [intervalCount, setIntervalCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIntervalCount((count) => count + 1);
    }, 3000);
    console.log("3초마다 리랜더링");
  }, [intervalCount]);

  return (
    <div className="numberDiv">
      <div
        className="numberLine"
        style={{
          backgroundImage:
            "url('https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg1.png')",
        }}
      >
        <TrainIcon left={left} top={top} display={display} />
        <TrainIcon
          left={"1225px"}
          top={"312px"}
          display={display}
          away={away}
        />
      </div>
    </div>
  );
};

export default FirstLine;
