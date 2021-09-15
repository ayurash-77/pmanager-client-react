import styled from 'styled-components';

export const InfobarContainer = styled.div`
  transition: 350ms;
  width: ${p => (p?.show ? '50%' : '0')};

  white-space: nowrap;
  overflow: hidden;
  //overflow-y: auto;

  background-color: var(--navbar-bg);
  position: relative;
  right: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  opacity: ${p => (p?.show ? 1 : 0)};
`;

export const TopContainer = styled.div`
  height: var(--topbar-width);
  min-height: var(--topbar-width);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;
  overflow-y: auto;
`;
