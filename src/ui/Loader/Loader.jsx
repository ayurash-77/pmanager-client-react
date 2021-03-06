import React from 'react';

import styled from 'styled-components';

const size = props => props.size;
const border = props => props.border;

const Container = styled.div`
  margin: auto;
`;

const Wrap = styled.div`
  width: ${size}px;
  height: ${size}px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.5);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const SpinnerDiv = styled.div`
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  border: ${border}px solid #636f7c;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
  top: ${size}px;
  left: ${size}px;
  box-sizing: content-box;
  @keyframes spinner {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Loader = ({ size = 32, border = 4 }) => (
  <Container>
    <Wrap size={size}>
      <Spinner className="spinner">
        <SpinnerDiv size={size} border={border} />
      </Spinner>
    </Wrap>
  </Container>
);

export default Loader;
