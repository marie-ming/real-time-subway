import styled from "styled-components";

const Button = styled.button`
  font-size: 16px;
  border-bottom: 1px solid #333333;
  padding: 10px 5px;
  margin: 2px;

  &:hover {
    border-bottom: 1px solid red;
  }
`;

const LineButton = ({ sname }) => {
  return <Button>{sname}</Button>;
};

export default LineButton;
