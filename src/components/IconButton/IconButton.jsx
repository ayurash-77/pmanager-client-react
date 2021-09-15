import * as ToolbarIcons from '../../assets/icons/toolbar-icons';
import * as s from './IconButton.styles';

const IconButton = ({
  icon, onClick, marginLeft = 0, marginRight = 0,
}) => {
  const Icon = ToolbarIcons[icon];
  return (
    <s.container marginLeft={marginLeft} marginRight={marginRight} onClick={onClick}>
      <Icon />
    </s.container>
  );
};
export default IconButton;
