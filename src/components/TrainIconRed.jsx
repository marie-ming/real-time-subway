import styled, { css } from "styled-components";
import arroeIcon from "../arrow.png";

const TrainDiv = styled.div`
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 50px;
  background-color: #c20000;
  border-radius: 30%;
  padding: 0 5px;
  box-sizing: content-box;
  opacity: 0.6;
  display: inline-block;

  ${(props) =>
    props.display0 &&
    css`
      display: none;
    `};
  ${(props) =>
    props.away &&
    css`
      transform: rotateY(180deg);
    `}
`;
const Train = styled.img`
  width: 50px;
  vertical-align: middle;
`;

const TrainIconRed = ({ left, top, display, away }) => {
  return (
    <TrainDiv left={left} top={top} display0={display} away={away}>
      <Train src={arroeIcon} alt="화살표 아이콘" />
    </TrainDiv>
  );
};

export default TrainIconRed;
