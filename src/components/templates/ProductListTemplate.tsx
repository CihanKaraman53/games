import  { FC } from 'react';
import styled from 'styled-components';
import Header from "../organisms/header/Header";
import Container from "../atoms/container/Container";
import Promo from '../organisms/promo/Promo';
import { Col, Row } from 'react-grid-system';
import SortButton from '../molecules/sort-button/SortButton';
import SideBar from '../organisms/sidebar/Sidebar';
import ProductItem from '../organisms/product-item/ProductItem';
import Footer from '../organisms/footer/Footer';
import { useDispatch } from 'react-redux';
import { sortGames } from '../../store/gameActions';
import { breakPoints } from '../../common/theme';

const SyledMain = styled.main`
  background-color: ${({theme}) => theme.palette.common.black};
  padding-bottom: 30px;
`;

const SidebarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 51px 0 23px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 24px 0 12px;
  }
`

const SidebarTitle = styled.h3`
  color: ${({theme}) => theme.palette.common.white};
  font-size: 28px;
  margin: 0;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 18px;
  }
`;

const ProductItemWrapper = styled.div`
  margin-bottom: 30px;
`

const SidebarWrap = styled.div`

  @media (max-width: ${breakPoints.tablet}) {
    margin-bottom: 16px;
  }
`

interface ProductListTemplateProps{
  games: Array<IGame>;
}

const ProductListTemplate: FC<ProductListTemplateProps> = ({games}) => {
  const dispatch = useDispatch();
  const handleSort = () => dispatch(sortGames());

  return(
    <>
      <div>
        <Container>
          <Header></Header>
        </Container>
        <Promo></Promo>
        <SyledMain>
          <Container>
            <SidebarWrapper>
              <SidebarTitle>Browse Games</SidebarTitle>
              <SortButton onClick={handleSort}/>
            </SidebarWrapper>
            <Row>
              <Col lg={4}>
                <SidebarWrap>
                  <SideBar />
                </SidebarWrap>
              </Col>
              <Col lg={8}>
                {
                  games.map((game) => (
                    <ProductItemWrapper key={game.title}>
                      <ProductItem title={game.title[0].toUpperCase()} leftParagraph={game.description} rightParagraph={game.description2}></ProductItem>
                    </ProductItemWrapper>
                  ))
                }
              </Col>
            </Row>
          </Container>
        </SyledMain>
        <Footer />
      </div>
    </>
  )
}

export default ProductListTemplate;
