import { FC } from "react";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";
import Container from "../../atoms/container/Container";
import FacebookIcon from "../../../assets/icons/icon-facebook.svg";
import InstagramIcon from "../../../assets/icons/icon-instagram.svg";
import TwitterIcon from "../../../assets/icons/icon-twitter.svg";
import YoutubeIcon from "../../../assets/icons/icon-youtube.svg";

const LeftMenuWrapper = styled.ul`
  padding: 0;
  margin: 0;
  margin-right: 60px;
`;

const LeftMenuItem = styled.li`
  list-style: none;
`;

const LeftMenuLink = styled.a`
  color: ${({ theme }) => theme.palette.common.darkGray};
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.darkGray};
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconItem = styled.a`
  margin-right: 15px;
  cursor: pointer;
`;

const Top = styled.div`
  padding: 24px 0;
`;

const Bottom = styled.div`
  background-color: ${({ theme }) => theme.palette.common.darkGray};
  padding: 12px 0;
`;

const BottomLink = styled.a`
  font-size: 11px;
  color: ${({ theme }) => theme.palette.common.white};
`;

const BottomLinkRight = styled(BottomLink)`
  text-align: right;
  width: 100%;
  display: inline-block;
`;

const Footer: FC = () => {
  return (
    <footer>
      <Top>
        <Container>
          <Row>
            <Col xs={3} lg={2}>
              <LeftMenuWrapper>
                <LeftMenuItem>
                  <LeftMenuLink>Games</LeftMenuLink>
                </LeftMenuItem>
                <LeftMenuItem>
                  <LeftMenuLink>Membership</LeftMenuLink>
                </LeftMenuItem>
                <LeftMenuItem>
                  <LeftMenuLink>Download</LeftMenuLink>
                </LeftMenuItem>
              </LeftMenuWrapper>
            </Col>
            <Col xs={3} lg={2}>
              <LeftMenuWrapper>
                <LeftMenuItem>
                  <LeftMenuLink>Contact Us</LeftMenuLink>
                </LeftMenuItem>
                <LeftMenuItem>
                  <LeftMenuLink>Blog</LeftMenuLink>
                </LeftMenuItem>
              </LeftMenuWrapper>
            </Col>
            <Col xs={3} lg={2}>
              <LeftMenuWrapper>
                <LeftMenuItem>
                  <LeftMenuLink>FAQs</LeftMenuLink>
                </LeftMenuItem>
                <LeftMenuItem>
                  <LeftMenuLink>Service Status</LeftMenuLink>
                </LeftMenuItem>
              </LeftMenuWrapper>
            </Col>
            <Col xs={3} offset={{ lg: 2 }} lg={2}>
              <Title>Follow Us</Title>
              <IconWrapper>
                <IconItem>
                  <img src={FacebookIcon} alt="Facebook" />
                </IconItem>
                <IconItem>
                  <img src={TwitterIcon} alt="Twitter" />
                </IconItem>
                <IconItem>
                  <img src={InstagramIcon} alt="Instagram" />
                </IconItem>
                <IconItem>
                  <img src={YoutubeIcon} alt="Youtube" />
                </IconItem>
              </IconWrapper>
            </Col>
            <Col lg={2} offset={{ xs: 9, lg: 0 }}>
              <Title>Site Language</Title>
              <LeftMenuLink>English</LeftMenuLink>
            </Col>
          </Row>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <Row>
            <Col lg={1}>
              <BottomLink>Terms of Use</BottomLink>
            </Col>
            <Col lg={1}>
              <BottomLink>Privacy Policy</BottomLink>
            </Col>
            <Col lg={1}>
              <BottomLink>Terms of Use</BottomLink>
            </Col>
            <Col offset={{ lg: 7 }} lg={2}>
              <BottomLinkRight>Tüm hakları saklıdır</BottomLinkRight>
            </Col>
          </Row>
        </Container>
      </Bottom>
    </footer>
  );
};

export default Footer;
