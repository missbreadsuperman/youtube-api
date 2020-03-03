import React from 'react';
import styled from 'styled-components';
import { ItemCard } from './ItemCard';


const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 20px auto;
  justify-content: center;
  max-width: 1300px;
`;
const StyledItemCard = styled(ItemCard)`
  flex-basis: 450px;
  flex-grow: 0;
`;
export const ResultPanel = ({ items = [] }) => (
  <Container>
    {
      items.map((item, index) => (
        <StyledItemCard key={index} item={item} />
      ))
    }
  </Container>
);
