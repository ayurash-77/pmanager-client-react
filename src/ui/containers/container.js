import styled from 'styled-components';

const padding = props => (props.padding ? props.padding : 0);
const vAlign = props => (props.vAlign ? props.vAlign : 'flex-start');
const height = p => p.height || '100%';

export const Rows = styled.div`
  height: ${height};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${vAlign};
  align-items: center;
  overflow: auto;
  padding: ${padding};
`;
export const Cols = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  padding: ${padding};
`;
