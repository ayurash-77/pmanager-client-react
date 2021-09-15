import React from 'react';
import { useDispatch } from 'react-redux';
import * as s from './Menubar.styles';
import BottomMenu from '../components/menubar/BottomMenu';

// import { toggleExpandMenu } from '../store/actions/appActions'
import { toggleSidebarExpand } from '../store/ui';
// import { useEffect } from 'react'

const Menubar = ({ isSidebarOpen, children }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(toggleSidebarExpanded())
  // }, [dispatch])

  return (
    <s.container isSidebarOpen={isSidebarOpen}>
      {children}
      <s.toggleContainer
        isSidebarOpen={isSidebarOpen}
        onClick={() => dispatch(toggleSidebarExpand())}
      />
      <BottomMenu isSidebarOpen={isSidebarOpen} />
    </s.container>
  );
};

export default Menubar;
