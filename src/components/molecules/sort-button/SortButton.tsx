import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import UpArrow from "../../../assets/icons/arrowUp.svg";
import { breakPoints } from "../../../common/theme";
import { IGameReducer } from "../../../store/gameReducer";

const Wrapper = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.palette.common.darkGray};
  padding: 16px 24px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 8px 12px 4px 8px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.common.lightGray2};
  margin-right: 18px;
`;

const StyledImage = styled.img`
  transform: rotate(180deg);
`;

interface SortButtonProps {
  onClick?(): void;
}

const SortButton: FC<SortButtonProps> = ({ onClick }) => {
  const sortType = useSelector((state: IGameReducer) => state.sortType);
  return (
    <div style={{ display: "inline-block" }}>
      <Wrapper onClick={onClick}>
        <Title>{sortType === "desc" ? "Title A Z" : "Title Z A"}</Title>
        <StyledImage src={UpArrow} alt="arrow icon" />
      </Wrapper>
    </div>
  );
};

export default SortButton;
