import  { FC, useState } from 'react';
import styled from 'styled-components';
import Logo from "../../atoms/logo/Logo";
import Button from "../../atoms/button/Button";
import Link from "../../atoms/link/Link";
import {
  useWindowSize,
} from '@react-hook/window-size'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`

const ListWrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
  margin: 0 15px;
`

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
`
const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
`

const MenuClose = styled.span`
  font-size: 20px;
  color: ${({theme}) => theme.palette.common.black};
  font-weight: 700;
`

const MenuContent = styled.div`
  padding: 0 16px;
`

const MenuItem = styled.a`
  display: block;
  color: ${({theme}) => theme.palette.common.black};
  font-size: 24px;
  font-weight: 700;
  margin: 14px 0;
`

const Header: FC = () => {
  const [width] = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);

  const handleClose = () => setIsMenuOpen(false);
    
  return(
    <>
      <Wrapper>
        <Logo />
        <Navigation>
          {
            width > 660 ? (
              <>
                <ListWrapper>
                <ListItem>
                  <Link text='Games' url='/' isActive/>
                </ListItem>
                <ListItem>
                  <Link text='Membership' url='/' />
                </ListItem>
                <ListItem>
                  <Link text='Download' url='/' />
                </ListItem>
                <ListItem>
                  <Link text='Blog' url='/' />
                </ListItem>
                <ListItem>
                  <Link text='Support' url='/' />
                </ListItem>
                </ListWrapper>
                <Button text="LET'S PLAY" onClick={() => null}/>
              </>
            ) : <a onClick={handleOpen}>Menu</a >
          }
        </Navigation>
      </Wrapper>
      {isMenuOpen && (
        <Menu>
          <MenuHeader>
            <div></div>
            <MenuClose onClick={handleClose}>Çıkış</MenuClose>            
          </MenuHeader>
          <MenuContent>
            <MenuItem>Games</MenuItem>
            <MenuItem>Membership</MenuItem>
            <MenuItem>Download</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuContent>
        </Menu>
      )}
    </>
  )
}

export default Header;
