import styled from 'styled-components';

export const container = styled.div`
  display: flex;
  justify-self: center;
  width: 100%;
  overflow-x: auto;
  margin-bottom: auto;
`;
export const tableContainer = styled.div`
  display: flex;
  justify-self: center;
  width: 100%;
  z-index: 6;
`;

export const table = styled.table`
  width: 100%;
  background: var(--table1-border);
  border-collapse: collapse;

  th {
    white-space: nowrap;
    height: 24px;
    background: var(--table1-header);
    padding: 4px;
    font-weight: 400;

    color: var(--table1-header-fg);
    position: sticky;
    position: -webkit-sticky;

    z-index: 1;
    top: 0;
    &:hover {
      cursor: default;
      color: var(--table1-header-fg-hover);
    }
  }
`;
