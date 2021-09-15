import styled from 'styled-components';

export const BlockContainer = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: auto;
  margin-bottom: 10px;
`;
export const TableContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  z-index: 6;
  white-space: nowrap;
  overflow: auto;
  border-radius: 4px;
  border: solid 1px var(--table1-border);
`;
export const Table = styled.table`
  font-size: var(--font-size-small1);
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  //table-layout: fixed;
  //white-space: normal !important;

  tr {
    border-radius: 14px;
    cursor: default;
    height: 20px;
    background: var(--table1-row1);

    &:nth-of-type(even) {
      background: var(--table1-row2);
    }

    &.link {
      color: var(--text-fg-high);
      text-overflow: ellipsis;
      overflow: hidden;
      //opacity: 0.8;
      :hover {
        color: var(--text-fg-high2);
        //opacity: 1;
        cursor: pointer;
      }
    }
  }

  th {
    text-align: left;
    white-space: nowrap;
    height: 20px;
    background: var(--table1-header);
    padding: 4px;
    font-weight: 500;
    color: var(--table1-header-fg);
  }
  td {
    padding: 0 5px;
    text-align: left;

    &.date {
      color: var(--blue-light);
    }
    &.info {
      color: var(--text-fg-mid);
    }
  }
`;
export const Label = styled.div`
  font-size: var(--font-size-small1);
  color: var(--text-fg-low);
  &:after {
    content: ':';
    margin-left: 2px;
    margin-right: 2px;
  }
`;
export const Value = styled.div`
  font-size: var(--font-size-small1);
  font-weight: 500;
`;
export const Status = styled.span`
  font-size: var(--font-size-small1);
  color: ${p => p?.status.color};
  font-weight: 500;
`;
export const Title = styled.h4`
  text-transform: uppercase;
  color: var(--text-fg-low);
`;
