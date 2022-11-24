import { useState, useEffect } from "react";
import TrainIconBlue from "./TrainIconBlue";
import TrainIconRed from "./TrainIconRed";

const FirstLine = () => {
  const [left, setLeft] = useState("1270px");
  const [top, setTop] = useState("245px");
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
        <TrainIconBlue left={left} top={top} display={display} />
        <TrainIconRed
          left={"1210px"}
          top={"317px"}
          display={display}
          away={away}
        />
      </div>
    </div>
  );
};

export default FirstLine;
