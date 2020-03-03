import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const PageButton = styled.button`
  background-color: ${(props) => props.focused && '#EF4648'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${(props) => props.focused && '#fff'};;
  font-size: 16px;
  font-weight: 500;
  margin: 0 5px 5px 5px;
  outline: inherit;
`;
export const Pagination = ({ currentPage, setCurrentPage }) => {
  const handlePageClick = ({ index }) => {
    setCurrentPage(index);
  };
  return (
    <Container>
      {
        Array.from(Array(3)).map((e, i) => (
          <PageButton key={i} focused={currentPage === i} onClick={() => handlePageClick({ index: i })}>{i + 1}</PageButton>
        ))
      }
    </Container>
  );
};
