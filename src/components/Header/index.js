import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 56px;
  background-color: #EF4648;
`;
const StyledTextField = styled.input`
  width: 40%;
  height: 30px;
  padding-left: 16px;
`;
const StyledSearchIcon = styled(SearchIcon)`
  background-color: white;
  height: 36px !important;
  width: 36px !important;
  cursor: pointer;
`;
export const Header = ({ fetchResult }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Container>
      <StyledTextField placeholder="搜尋" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <StyledSearchIcon onClick={() => fetchResult(inputValue)} />
    </Container>
  );
};
