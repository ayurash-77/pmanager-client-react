import styled from 'styled-components';

const bgColor = p => (p.isSelected ? 'var(--table1-selected)' : 'var(--project-card-info-bg)');
const bgColorHover = p => (p.isSelected ? 'var(--table1-selected)' : 'var(--project-card-info-bg-hover)');

export const container = styled.div`
  user-select: none;
  width: 160px;
  border-radius: 4px;
  margin: 10px;
  color: var(--fg-normal);

  #info,
  #pic {
    transition: opacity 200ms;
  }

  :hover #pic {
    opacity: 1;
  }

  :hover #info {
    background: ${bgColorHover};
  }

  box-shadow: 0 1px 3px #00000020;
  //filter: drop-shadow(0 1px 2px #00000020);
`;

export const pic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 90px;
  border-radius: 4px;
  color: var(--project-dummy-fg);
  background: var(--project-dummy-bg);
  opacity: ${p => (p?.isSelected ? 1 : 0.5)};
`;
export const pb = styled.div`
  width: 160px;
  height: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 2px;
  background: var(--btn-bg-normal);
`;

export const infoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 4px 4px;
  background: ${bgColor};
`;
export const table = styled.table`
  font-size: var(--font-size-small1);
`;
export const title = styled.div`
  font-size: var(--font-size-normal);
  font-weight: 500;
  text-align: center;
  margin-bottom: 2px;
  color: var(--text-fg-high);
  .accent {
    &:after {
      content: '! ';
    }
    color: var(--accent);
    font-weight: 600;
  }
`;
export const label = styled.td`
  text-align: right;
  color: var(--text-fg-low);
  &:after {
    content: ':';
    margin-left: 2px;
    margin-right: 2px;
  }
`;
export const value = styled.td`
  text-align: left;
  color: var(--text-fg-mid);
`;

export const status = styled.span`
  color: ${p => p?.status.color};
  font-weight: 500;
`;
export const accent = styled.span`
  color: var(--accent);
`;
export const blueLight = styled.span`
  color: var(--blue-light);
`;
