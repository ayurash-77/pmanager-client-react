import styled from 'styled-components';

export const container = styled.div`
  transition: all 150ms;
  display: flex;
  align-items: center;
  margin-left: ${p => p.marginLeft};
  color: var(--btn-fg-normal);

  :hover {
    color: var(--btn-fg-hover);
  }
  :active {
    color: var(--btn-fg-pressed);
  }
`;
