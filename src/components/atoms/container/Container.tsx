import { FC } from "react";
import styled from "styled-components";
import { breakPoints } from "../../../common/theme";

const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakPoints.smallScreen}) {
    width: 1024px;
    padding: 0 16px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`;

const Container: FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
