import { FC } from "react";
import styled from "styled-components";
import ActiveLinkIcon from "../../../assets/icons/activeLinkIcon.svg";

const StyledLink = styled.a<LinkStyles>`
  font-weight: 600;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.main : theme.palette.common.black};
  text-decoration: none;
`;

const LinkWrapper = styled.div`
  position: relative;
  padding: 30px 0;
`;

const IconWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

interface LinkStyles {
  isActive?: boolean;
}

interface LinkProps extends LinkStyles {
  url: string;
  text: string;
}

const Link: FC<LinkProps> = ({ url, text, isActive }) => {
  return (
    <LinkWrapper>
      <StyledLink isActive={isActive} href={url}>
        {text}
      </StyledLink>
      <IconWrapper>
        {isActive && <img src={ActiveLinkIcon} alt="upper triangle" />}
      </IconWrapper>
    </LinkWrapper>
  );
};

export default Link;
