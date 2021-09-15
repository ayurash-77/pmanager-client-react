import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import * as s from './BottomMenu.styles';

import MenuItem from '../MenuItem';
import * as SideIcons from '../../../assets/icons/menubar-icons';
import { logout } from '../../../store/actions/userActions';
import SettingsModal from '../../../modal/SettingsModal';
import UserProfileModal from '../../../modal/UserProfileModal';

const BottomMenu = props => {
  const { isSidebarOpen = true } = props;

  const userLogin = useSelector(state => state?.userLogin);
  const { userInfo } = userLogin;

  const [isUserModalShow, setUserModalShow] = useState(false);
  const [isSettingsModalShow, setSettingsModalShow] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <UserProfileModal isOpen={isUserModalShow} closeAction={() => setUserModalShow(false)} />
      <SettingsModal isOpen={isSettingsModalShow} closeAction={() => setSettingsModalShow(false)} />

      <s.MenuContainer>
        <MenuItem
          icon={<SideIcons.User />}
          name={userInfo.username}
          isSidebarOpen={isSidebarOpen}
          onClick={() => setUserModalShow(true)}
        />

        <Link to="/logout">
          <MenuItem
            icon={<SideIcons.Logout />}
            name={<Translate value="menu.logout" />}
            isSidebarOpen={isSidebarOpen}
            onClick={logoutHandler}
          />
        </Link>

        <MenuItem
          icon={<SideIcons.Gear />}
          name={<Translate value="menu.settings" />}
          isSidebarOpen={isSidebarOpen}
          onClick={() => setSettingsModalShow(true)}
        />
      </s.MenuContainer>
    </>
  );
};

export default BottomMenu;
