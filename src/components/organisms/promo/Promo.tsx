import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { breakPoints } from '../../../common/theme';
import { searchGame } from '../../../store/gameActions';
import Container from '../../atoms/container/Container';
import SearchInput from '../../atoms/search-input/SearchInput';

const Wrapper = styled.div`
  padding: 90px 0;
  background-color: #082903;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 30px 0;
  }
`

const Title = styled.h2`
  text-align: center;
  margin: 0 0 15px;
  color: ${({theme}) => theme.palette.common.white};
  font-weight: 700;
  font-size: 40px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${({theme}) => theme.palette.common.white};
  margin-bottom: 50px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

const Promo: FC = () => {
  const dispatch = useDispatch();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedText = event.target.value;
    dispatch(searchGame(searchedText));
  }
    
  return(
    <Wrapper>
      <Container>
        <Row>
          <Col lg={8} offset={{lg: 2}}>
            <Title>Lorem ipsum dolor sit amet consectetur</Title>
            <Description>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device</Description>
            <SearchInput  placeholder='Search Games' onChange={handleSearch}/>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Promo;
