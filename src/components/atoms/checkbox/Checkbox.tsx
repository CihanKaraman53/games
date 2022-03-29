import React, { FC } from 'react';
import styled from 'styled-components';
import Tick from "../../../assets/icons/okay.svg";

const HiddenCheckbox = styled.input`
  display: none;
`;

const Label = styled.label`
  color: ${({theme}) => theme.palette.common.lightGray2};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CheckboxWrapper = styled.div``;

const Box = styled.div<BoxProps>`
  width: 24px;
  height: 24px;
  border: 1px solid ${({theme, isActive}) => isActive ? theme.palette.primary.main : theme.palette.common.lightGray2};
  background-color: ${({theme, isActive}) => isActive ? theme.palette.primary.main : theme.palette.common.white};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface BoxProps{
  isActive?: boolean;
}

interface CheckboxProp {
  label: string;
  name: string;
  value: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Checkbox: FC<CheckboxProp> = ({label, value, name, onChange}) => {
  return(
    <CheckboxWrapper>
      <HiddenCheckbox id={name} type='checkbox' onChange={onChange} />
      <Label htmlFor={name}>
        <Box isActive={value}>{value && <img src={Tick} alt="okay icon" />}</Box>
        {label}</Label>
    </CheckboxWrapper>
  )
}

export default Checkbox;
