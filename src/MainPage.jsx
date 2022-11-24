import FirstLine from "./components/FirstLine";
import SecondLine from "./components/SecondLine";
import ThirdLine from "./components/ThirdLine";
import { useState, useEffect } from "react";
import "./main.css";
import reload from "./reload.png";

const MainPage = () => {
  const [openMap, setOpenMap] = useState(0);

  const [intervalCount, setIntervalCount] = useState(0);
  const reloadHandler = () => {
    setTimeout(() => {
      setIntervalCount((count) => count + 1);
    }, 0);
    console.log("새로고침");
  };
  const onClickHander = () => {
    setOpenMap(2);
    window.scrollTo({ left: 1500, top: 710, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo({ left: 1500, top: 500, behavior: "auto" });
  }, []);

  return (
    <div className="body">
      <div className="headerDiv">
        <div className="titleDiv">
          <span className="title">실시간 지하철</span>
          <button className="reload" onClick={reloadHandler}>
            <img
              src={reload}
              alt="새로고침"
              style={{ width: "22px", margin: "8px", verticalAlign: "middle" }}
            />
          </button>
        </div>
        <div className="lineDiv">
          <button
            className={openMap === 0 ? "lineBtn clicked" : "lineBtn"}
            onClick={() => setOpenMap(0)}
          >
            전체보기
          </button>
          <div>
            <button
              className={openMap === 1 ? "lineBtn clicked" : "lineBtn"}
              onClick={() => setOpenMap(1)}
            >
              1호선
            </button>
            <button
              className={openMap === 2 ? "lineBtn clicked" : "lineBtn"}
              onClick={onClickHander}
            >
              2호선
            </button>
            <button
              className={openMap === 3 ? "lineBtn clicked" : "lineBtn"}
              onClick={() => setOpenMap(3)}
            >
              3호선
            </button>
          </div>
        </div>
      </div>
      <div className="mainDiv">
        {openMap === 0 && (
          <div className="numberDiv">
            <img
              src="https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg_all.png"
              alt="전체보기"
              className="numberLine"
            />
          </div>
        )}
        {openMap === 1 && <FirstLine />}
        {openMap === 2 && <SecondLine />}
        {openMap === 3 && <ThirdLine />}
      </div>
    </div>
  );
};

export default MainPage;
