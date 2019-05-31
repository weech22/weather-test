import React from 'react';
import styled from 'styled-components';
import frown from './images/frown.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const FrownImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export default () => (
  <Wrap>
    <FrownImage src={frown} />
    No Results
  </Wrap>
);
