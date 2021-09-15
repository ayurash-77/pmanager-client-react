import styled from 'styled-components';

export const SubmenuContainer = styled.div`
  transition: 150ms;
  border: solid 1px var(--table1-border);
  border-radius: 4px;
  background: var(--navbar-submenu-bg1);
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  opacity: ${p => (p?.isMenuShow ? '1' : '0')};
  height: ${p => (p.isMenuShow ? 'auto' : '0')};
  transform: scaleY(${p => (p.isMenuShow ? '1' : '0.8')}) translateY(${p => (p.isMenuShow ? '0' : '-10px')});
  overflow: auto;
  z-index: 1;
`;
