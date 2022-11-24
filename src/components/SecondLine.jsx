import { useState, useEffect } from "react";
import TrainIconBlue from "./TrainIconBlue";
import TrainIconRed from "./TrainIconRed";

const SecondLine = () => {
  const [left, setLeft] = useState("1410px");
  const [top, setTop] = useState("955px");
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
            "url('https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png')",
        }}
      >
        <TrainIconBlue left={left} top={top} display={display} />
        <TrainIconRed
          left={"1350px"}
          top={"875px"}
          display={display}
          away={away}
        />
      </div>
    </div>
  );
};

export default SecondLine;
