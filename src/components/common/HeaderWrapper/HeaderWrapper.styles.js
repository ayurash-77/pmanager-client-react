import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-height: var(--topbar-height);
  background-color: var(--bg-header);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 6;
  //box-shadow: 0 2px 10px var(--btn-shadow);
  box-shadow: 0 1px 8px var(--btn-shadow);
`;

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TitleContainer = styled.div`
  font-size: var(--font-size-normal);
  //text-transform: capitalize;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-wrap: none;
  height: 100%;
  position: relative;
`;
