import React, { FC } from 'react';
import styled from 'styled-components';
import SearchIcon from "../../../assets/icons/searchIcon.svg";
import { breakPoints } from '../../../common/theme';

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 56px;
  font-size: 20px;

  &::placeholder{
    color: ${({theme}) => theme.palette.common.lightGray};
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: 44px;
    font-size: 18px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

interface SearchInputProps{
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: FC<SearchInputProps> = ({placeholder, value, onChange}) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <img src={SearchIcon} alt="search icon" />
      </IconWrapper>
      <Input placeholder={placeholder} value={value} onChange={onChange}/>
    </InputWrapper>
  )
}

export default SearchInput;
