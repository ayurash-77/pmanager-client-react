import styled from 'styled-components';
import * as ToolbarIcons from '../../assets/icons/toolbar-icons';

const marginLeft = p => p.marginLeft;
const marginRight = p => p.marginRight;

export const Button16Div = styled.div`
  transition: color 150ms;
  //height: 22px;
  //width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: ${marginLeft};
  margin-right: ${marginRight};

  color: ${p => (p.selected ? 'var(--btn-fg-selected)' : 'var(--btn-fg-normal)')};

  &:hover {
    ${p => (p.selected ? '' : 'color: var(--btn-fg-hover);')}
  }
  &:active {
    ${p => (p.selected ? '' : 'color: var(--btn-fg-pressed);')}
  }
`;

export const Button16 = props => {
  const ToolbarIcon = ToolbarIcons[props.icon];
  return (
    <Button16Div marginLeft={props.marginLeft} selected={props.selected} onClick={props.onClick}>
      <ToolbarIcon />
    </Button16Div>
  );
};
