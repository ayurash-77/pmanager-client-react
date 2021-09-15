import styled from 'styled-components';

export const container = styled.div`
  transition: all 300ms;
  width: ${p => (p?.isSidebarOpen ? 'var(--sidebar-width-max)' : 'var(--sidebar-width-min)')};
  min-width: ${p => (p.isSidebarOpen ? 'var(--sidebar-width-max)' : 'var(--sidebar-width-min)')};
  background-color: var(--navbar-bg);
  padding: 10px;
  display: flex;
  flex-direction: column;
  //overflow-x: hidden;
`;

export const toggleContainer = styled.div`
  transition: 200ms;
  align-self: center;
  height: 20px;
  width: 100%;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 0.2;
  &:after {
    transition: width 200ms;
    content: '';
    height: 3px;
    width: ${p => (p?.isSidebarOpen ? '72px' : '32px')};
    position: absolute;
    border-radius: 4px;
    margin-top: -2px;
    background: var(--fg-normal);
  }

  &:active {
    color: var(--navbar-fg-selected);
    opacity: 1;
  }
  &:hover {
    color: var(--navbar-fg-selected);
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Text = styled.div`
  font-weight: 500;
  margin-left: ${p => (p?.isSidebarOpen ? '6px' : '0')};
  left: 42px;
  opacity: ${p => (p.isSidebarOpen ? '1' : '0')};
  z-index: 0;
`;
export const Count = styled.div`
  font-weight: 600;
  margin-left: auto;
  opacity: ${p => (p?.isSidebarOpen ? '1' : '0')};
`;
