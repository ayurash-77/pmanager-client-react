import styled from 'styled-components';

export const tr = styled.tr`
  cursor: default;

  height: 22px;
  background: ${p => (p?.isSelected ? 'var(--table1-selected)' : 'var(--table1-row1)')};

  &:nth-of-type(even) {
    background: ${p => (p.isSelected ? 'var(--table1-selected)' : 'var(--table1-row2)')};
  }

  &:active {
    transition: background-color 200ms;
    background: var(--table1-selected);
  }

  td {
    padding: 0 5px;
    overflow: hidden;
    white-space: nowrap;
  }

  #num {
    color: var(--text-fg-low);
    width: 24px;
    text-align: right;
  }
`;
export const td = styled.td`
  color: ${p => p?.color};

  .bold {
    font-weight: 500;
  }

  .accent {
    &:after {
      content: '! ';
    }
    color: var(--accent);
    font-weight: 600;
  }
`;
export const status = styled.div`
  font-size: var(--font-size-small1);
  color: ${p => p?.color};
`;
