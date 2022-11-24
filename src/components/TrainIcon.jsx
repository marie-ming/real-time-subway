import styled, { css } from "styled-components";
import trainIcon from "../train.png";

const TrainDiv = styled.div`
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 32px;
  display: block;

  ${(props) =>
    props.display0 &&
    css`
      display: none;
    `};
`;
const Train = styled.img`
  width: 32px;

  ${(props) =>
    props.away &&
    css`
      transform: rotateY(180deg);
    `}
`;

const TrainIcon = ({ left, top, display, away }) => {
  return (
    <TrainDiv left={left} top={top} display0={display}>
      <Train src={trainIcon} alt="트레인아이콘" away={away} />
    </TrainDiv>
  );
};

export default TrainIcon;
