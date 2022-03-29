import { FC } from "react";
import styled from "styled-components";
import PolygonIcon from "../../../assets/icons/polygon.svg";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  max-height: 52px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.palette.common.darkGray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 30px;
`;

interface PolygonProps {
  text: string;
}

const Polygon: FC<PolygonProps> = ({ text }) => {
  return (
    <Wrapper>
      <img src={PolygonIcon} alt="polygon icon" />
      <Title>{text}</Title>
    </Wrapper>
  );
};

export default Polygon;
