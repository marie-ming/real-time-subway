import { useState, useEffect } from "react";
import axios from "axios";
import TrainIconBlue from "./TrainIconBlue";
import TrainIconRed from "./TrainIconRed";
import dummy from "../trainLine2.json";

const SecondLine = ({ intervalCount }) => {
  const trainInline = dummy.inLine;
  // const trainOutline = dummy.outLine;

  let train = [];
  const [inLine, setInLine] = useState([]);
  const inTrainHandler = (data) => {
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
              away={datat.away}
            />
          ))
      );
    }
    setInLine(haha);
  };

  const [data, setData] = useState(null);
  const [itvCount, setItvCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://swopenAPI.seoul.go.kr/api/subway/49647867547368693131314c454c4f41/json/realtimePosition/0/40/2호선"
        );
        setData(response.data.realtimePositionList);
        if (data) inTrainHandler(response.data.realtimePositionList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    console.log("useEffect 실행");
  }, [intervalCount, itvCount]);
  if (!data) {
    console.log("해당하는 데이터가 없습니다.");
  }

  useEffect(() => {
    setTimeout(() => {
      setItvCount((count) => count + 1);
      console.log("10초마다 리랜더링");
    }, 10000);
  }, [itvCount]);

  return (
    <div className="numberDiv">
      <div
        className="numberLine"
        style={{
          backgroundImage:
            "url('https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg2.png')",
        }}
      >
        {inLine}
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
