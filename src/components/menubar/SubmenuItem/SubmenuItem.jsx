import React from 'react';

import * as s from './SubmenuItem.styles';

const SubmenuItem = props => (
  <s.MenuItem isSelected={props.isSelected} onClick={props.onClick}>
    <s.Text isSidebarOpen={props.isSidebarOpen}>{props.text}</s.Text>
    <s.Count isSidebarOpen={props.isSidebarOpen}>{props.count}</s.Count>
  </s.MenuItem>
);

export default SubmenuItem;
