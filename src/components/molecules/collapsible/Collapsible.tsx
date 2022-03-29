import { FC, useState } from "react";
import { default as ReactCollapsible } from "react-collapsible";
import styled from "styled-components";
import ArrowUp from "../../../assets/icons/arrowUp.svg";

interface CollapsibleHeaderProps {
  text: string;
  isActive: boolean;
}

const Title = styled.h3`
  color: ${({ theme }) => theme.palette.common.lightGray2};
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

interface ImageProps {
  isActive: boolean;
}

const StyledIcon = styled.img<ImageProps>`
  transform: ${({ isActive }) => (isActive ? "rotate(0)" : "rotate(180deg)")};
  transition: 0.4s;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CollapsibleHeader: FC<CollapsibleHeaderProps> = ({ text, isActive }) => {
  return (
    <HeaderWrapper>
      <Title>{text}</Title>
      <StyledIcon isActive={isActive} src={ArrowUp} alt="arrow icon" />
    </HeaderWrapper>
  );
};

interface CollapsibleProps extends CollapsibleHeaderProps {}

const Collapsible: FC<CollapsibleProps> = ({ text, isActive, children }) => {
  const [isOpened, setIsOpened] = useState(isActive);
  const handleClose = () => setIsOpened(false);
  const handleOpen = () => setIsOpened(true);
  return (
    <ReactCollapsible
      open={isOpened}
      onTriggerClosing={handleClose}
      onTriggerOpening={handleOpen}
      trigger={<CollapsibleHeader isActive={isOpened} text={text} />}
    >
      {children}
    </ReactCollapsible>
  );
};

export default Collapsible;
