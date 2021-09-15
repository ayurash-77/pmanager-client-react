import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  border: var(--group-border) solid 1px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

const Label = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  margin-left: 1px;
`;

export const Group = ({ children, label }) => (
  <Container>
    <Label>{label}</Label>
    <Body>{children}</Body>
  </Container>
);
