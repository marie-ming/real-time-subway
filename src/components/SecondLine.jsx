import { useState, useEffect } from "react";
import TrainIconBlue from "./TrainIconBlue";
import TrainIconRed from "./TrainIconRed";
import axios from "axios";
import dummy from "../trainLine2.json";

const SecondLine = () => {
  const trainInline = dummy.inLine;
  // const trainOutline = dummy.outLine;

  // const [left, setLeft] = useState("1410px");
  // const [top, setTop] = useState("955px");
  // const [display, setDisplay] = useState(false);
  // const [away, setAway] = useState(true);

  let train = [];
  const [sumin, setSumin] = useState([]);
  const inTrainHandler = (data) => {
    if (!data) return;
    data
      .filter((dataaa) => dataaa.updnLine.includes("1"))
      .map((dataaa, idx) => (train[idx] = dataaa.statnNm));
    let haha = [];
    for (let i = 0; i < train.length; i++) {
      haha.push(
        trainInline
          .filter((datat) => datat.name.includes(train[i]))
          .map((datat) => (
            <TrainIconBlue
              key={datat.name}
              left={datat.left}
              top={datat.top}
              away={false}
            />
          ))
      );
    }
    // console.log("haha", haha);
    setSumin(haha);
  };

  const [data, setData] = useState(null);
  const [intervalCount, setIntervalCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://swopenAPI.seoul.go.kr/api/subway/49647867547368693131314c454c4f41/json/realtimePosition/0/40/2호선"
        );
        setData(response.data.realtimePositionList);
        inTrainHandler(response.data.realtimePositionList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    setTimeout(() => {
      setIntervalCount((count) => count + 1);
    }, 3000);
    console.log("3초마다 리랜더링");
  }, [intervalCount]);

  if (!data) {
    return null;
  }
  return (
    <div className="numberDiv">
      <div
        className="numberLine"
        style={{
          backgroundImage:
            "url('https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png')",
        }}
      >
        {sumin}
        {/* {data.map((dataaa) => (
          <div>
            현재역 : {dataaa.statnNm}, 종착역:{dataaa.statnTnm}, 내선1외선0:
            {dataaa.updnLine}
          </div>
        ))} */}
        {/* <TrainIconBlue left={"1410px"} top={"955px"} away={false} /> */}
        <TrainIconRed
          left={"1350px"}
          top={"875px"}
          display={false}
          away={true}
        />
      </div>
    </div>
  );
};

export default SecondLine;
