import styled from 'styled-components';

export const MenuItem = styled.div`
  transition: all 200ms;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 6px;
  color: ${p => (p?.selected ? 'var(--navbar-fg-selected)' : 'var(--fg-normal)')};

  background: ${p => p.selected && 'var(--navbar-bg-selected)'};

  &:hover {
    color: ${p => (p.selected ? 'var(--navbar-fg-selected)' : 'var(--navbar-fg-hover)')};
  }

  &:active {
    color: var(--navbar-fg-pressed);
    background: var(--navbar-bg-pressed);
  }

  cursor: default;
  user-select: none;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

export const Text = styled.span`
  transition: opacity 250ms, margin-left 250ms;
  font-weight: 500;
  margin-left: ${p => (p?.isSidebarOpen ? '6px' : '0')};
  position: absolute;
  left: 42px;
  opacity: ${p => (p.isSidebarOpen ? '1' : '0')};
  z-index: 0;
`;

export const Count = styled.div`
  transition: opacity 250ms;
  font-weight: 500;
  margin-left: auto;
  opacity: ${p => (p?.isSidebarOpen ? '1' : '0')};
`;
