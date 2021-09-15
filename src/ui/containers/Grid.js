import styled from 'styled-components';

const cols = p => p.cols || 'auto auto';
const rows = p => p.rows || 'max-content';
const width = p => p.width || 'auto';
const gap = p => p.gap || 4;
const gapCol = p => p.gapCol || 4;
const gapRow = p => p.gapRow || 4;
const marginTop = p => p.marginTop || 0;
const marginBottom = p => p.marginBottom || 0;
const textAlign = p => p.textAlign || 'left';

export const Grid = styled.div`
  label {
    text-align: ${textAlign};
    margin-left: 1px;
  }
  text-align: ${textAlign};
  margin-top: ${marginTop};
  margin-bottom: ${marginBottom};
  width: ${width};
  align-items: center;
  display: grid;
  grid-gap: ${gap}px;
  grid-column-gap: ${gapCol}px;
  grid-row-gap: ${gapRow}px;
  
  
  grid-template-columns: ${cols};
  grid-template-rows: ${rows};  
  
  }
`;
