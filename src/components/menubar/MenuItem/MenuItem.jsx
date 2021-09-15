import React from 'react';

import * as s from './MenuItem.styles';

const MenuItem = props => (
  <s.MenuItem selected={props.selected} onClick={props.onClick}>
    <s.Icon>{props.icon}</s.Icon>
    <s.Text isSidebarOpen={props.isSidebarOpen}>{props.name}</s.Text>
    <s.Count isSidebarOpen={props.isSidebarOpen}>{props.count}</s.Count>
  </s.MenuItem>
);

export default MenuItem;
