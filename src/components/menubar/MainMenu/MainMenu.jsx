import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Translate } from 'react-redux-i18n';

import MenuItem from '../MenuItem';
import Loader from '../../../ui/Loader';
import DatesMenu from '../DatesMenu';
import * as SideIcons from '../../../assets/icons/menubar-icons';
import { fetchAllProjects } from '../../../store/actions/projectActions';
import { loadProjects } from '../../../store/projects';

const MainMenu = props => {
  const { isSidebarOpen } = props;

  const [selectedMenuItem, setSelectedMenuItem] = useState('allProjects');
  const [isSubmenuShow, setIsSubmenuShow] = useState(false);

  const { loading, list: projects } = useSelector(state => state?.projects);

  const projectsCount = projects !== undefined ? projects.length : 0;

  const loader = <Loader size={24} />;

  const dispatch = useDispatch();

  const handleMenuItemClick = name => {
    setSelectedMenuItem(name);
    name === 'byDate' ? setIsSubmenuShow(true) : setIsSubmenuShow(false);
    name === 'allProjects' && dispatch(fetchAllProjects());
    name === 'allProjects' && dispatch(loadProjects());
  };

  useEffect(() => {
    // dispatch(fetchAllProjects())
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <>
      <MenuItem
        onClick={() => handleMenuItemClick('allProjects')}
        icon={<SideIcons.Home />}
        name={<Translate value="menu.allProjects" />}
        count={loading ? loader : projectsCount}
        selected={selectedMenuItem === 'allProjects'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('favorites')}
        icon={<SideIcons.Star />}
        name={<Translate value="menu.favorites" />}
        count={5}
        selected={selectedMenuItem === 'favorites'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('lastActivity')}
        icon={<SideIcons.Update />}
        name={<Translate value="menu.lastActivity" />}
        count={5}
        selected={selectedMenuItem === 'lastActivity'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('lastAdded')}
        icon={<SideIcons.Clock />}
        name={<Translate value="menu.lastAdded" />}
        count={5}
        selected={selectedMenuItem === 'lastAdded'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('byDate')}
        icon={<SideIcons.Calendar />}
        name={<Translate value="menu.byDate" />}
        count={loading ? loader : projectsCount}
        selected={selectedMenuItem === 'byDate'}
        isSidebarOpen={isSidebarOpen}
      />
      <DatesMenu
        isSidebarOpen={isSidebarOpen}
        isByDateMenuShow={isSubmenuShow}
        projects={projects}
      />
    </>
  );
};

export default MainMenu;
