import FirstLine from "./components/FirstLine";
import SecondLine from "./components/SecondLine";
import { useState } from "react";
import LineButton from "./styled-components/LineButton";

const MainPage = () => {
  const [openMap, setOpenMap] = useState(0);

  // const openLine = () => {
  //   if (openMap === 1) {
  //     <FirstLine />;
  //   } else if (openMap === 2) {
  //     <SecondLine />;
  //   } else {
  //     <div className="numberDiv">
  //       <img
  //         src="https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg_all.png"
  //         alt="전체보기"
  //         className="numberLine"
  //       />
  //     </div>;
  //   }
  // };
  console.log(openMap);
  return (
    <div>
      <h1>실시간 지하철!</h1>
      <LineButton onClick={() => setOpenMap(0)} sname={"전체보기"} />
      <LineButton onClick={() => setOpenMap(1)} sname={"1호선"} />
      <LineButton onClick={() => setOpenMap(2)} sname={"2호선"} />
      <LineButton onClick={() => setOpenMap(3)} sname={"3호선"} />
      {/*{openLine} */}
      <div className="numberDiv">
        <img
          src="https://ssl.pstatic.net/sstatic/keypage/outside/subway/img/220718/smap_sg_all.png"
          alt="전체보기"
          className="numberLine"
        />
      </div>
    </div>
  );
};

export default MainPage;
