import styled from 'styled-components';

export const MenuItem = styled.div`
  transition: 150ms;
  cursor: default;
  user-select: none;
  height: 21px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px;
  border-radius: 3px;
  color: ${p => (p?.isSelected ? 'var(--navbar-fg-hover)' : 'var(--fg-normal)')};

  &:nth-child(2n) {
    background: ${p => (p.isSelected ? ' var(--navbar-submenu-selected)' : 'var(--navbar-submenu-bg2);')};
  }

  background: ${p => (p.isSelected ? ' var(--navbar-submenu-selected)' : 'var(--navbar-submenu-bg1);')};

  &:hover {
    ${p => !p.isSelected && 'color: var(--navbar-fg-hover)'};
  }

  &:active {
    background: var(--navbar-submenu-selected);
  }
`;

export const Text = styled.div`
  transition: 150ms linear;
  white-space: nowrap;
  text-wrap: none;
  font-weight: 600;
  overflow: hidden;
  margin-left: ${p => (p?.isSidebarOpen ? '5px' : '-1px')};
  font-size: var(--font-size-small1);
`;
export const Count = styled.div`
  font-weight: 500;
  margin-left: auto;
`;
