import styled, { css } from "styled-components";
import arroeIcon from "../arrow.png";

const TrainDiv = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 50px;
  background-color: #2a50ae;
  border-radius: 30%;
  padding: 0 5px;
  box-sizing: content-box;
  opacity: 0.6;
  display: inline-block;
  transform: ${(props) => props.away};
`;
const Train = styled.img`
  width: 50px;
  vertical-align: middle;
`;

const TrainIconBlue = ({ left, top, away }) => {
  return (
    <TrainDiv left={left} top={top} away={away}>
      <Train src={arroeIcon} alt="화살표 아이콘" />
    </TrainDiv>
  );
};

export default TrainIconBlue;
