import { FC } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../../common/theme';
import Polygon from '../../atoms/polygon/Polygon';

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.palette.common.darkGray};
  padding: 30px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 12px 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 50%;
  
`

const Paragraph = styled.p`
  color: ${({theme}) => theme.palette.common.lightGray2};
  width: 70%;
  line-height: 2;
  margin: 0;

  @media (max-width: ${breakPoints.tablet}) {
    line-height: 1.5;
    width: 90%;
  }
`

const Header = styled.header`
  margin-bottom: 30px;


  @media (max-width: ${breakPoints.tablet}) {
    margin-bottom: 10px;
  }
`

interface ProductItemProps{
  title: string;
  leftParagraph: string;
  rightParagraph: string;
}

const ProductItem: FC<ProductItemProps> = ({title, leftParagraph, rightParagraph}) => {
  return (
    <Wrapper>
      <Header>
        <Polygon text={title} />
      </Header>
      <ContentWrapper>
        <Content>
          <Paragraph>{leftParagraph}</Paragraph>
        </Content>
        <Content>
          <Paragraph>{rightParagraph}</Paragraph>
        </Content>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProductItem;
