import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  position: relative;
  cursor: pointer;
`;
const Title = styled.p`
  width: 320px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ItemCard = ({ item = {} }) => {
  const title = _.get(item, 'snippet.title');
  const img = _.get(item, 'snippet.thumbnails.medium');
  return (
    <Container>
      <a href={`https://www.youtube.com/watch?v=${_.get(item, 'id.videoId')}`} target="_blank">
        <img src={_.get(img, 'url')} width={_.get(img, 'width')} height={_.get(img, 'height')} alt="video" />
        <Title>

          {title}
        </Title>
      </a>
    </Container>
  );
};
