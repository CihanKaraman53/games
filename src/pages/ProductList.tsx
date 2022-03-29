import React from 'react';
import { useSelector } from 'react-redux';
import ProductListTemplate from "../components/templates/ProductListTemplate";
import { IGameReducer } from '../store/gameReducer';

const ProductList = () => {
  const games = useSelector((state: IGameReducer) => state.filteredGames);

  return (
    <ProductListTemplate games={games} />
  )
}

export default ProductList;
