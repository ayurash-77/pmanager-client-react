import styled from 'styled-components';

const flexDirection = p => p.flexDirection;

export const MainbarContainer = styled.div`
  background: var(--bg-main);
  width: 100%;
  //transition: 200ms;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: hidden;
`;
export const MainViewContainer = styled.div`
  //transition: 200ms;
  height: 100%;
  display: flex;
  flex-direction: ${flexDirection};
  overflow: auto;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${flexDirection};
  align-items: center;
  overflow: auto;
  padding: 10px;
`;
