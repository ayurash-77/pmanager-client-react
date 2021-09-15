import styled from 'styled-components';

const bg = p => (p.warning ? 'var(--accentBg)' : 'var(--modal-header-bg)');

export const Header = styled.div`
  border-radius: 6px 6px 0 0;
  background: ${bg};
  color: var(--modal-header-fg);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: var(--font-size-big1);
  padding: 10px 15px;
`;

export const Body = styled.div`
  max-height: calc(100vh - 150px);
  overflow: auto;
  background: var(--bg-header);
`;

export const Footer = styled.div`
  padding: 10px 15px;
  border-radius: 0 0 6px 6px;
  background: var(--modal-footer-bg);
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
