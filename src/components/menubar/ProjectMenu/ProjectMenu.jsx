import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import MenuItem from '../MenuItem';
import * as SideIcons from '../../../assets/icons/menubar-icons';
import { fetchAllProjects } from '../../../store/actions/projectActions';

const ProjectMenu = props => {
  const { isSidebarOpen } = props;
  const { id } = useParams();
  const [selectedMenuItem, setSelectedMenuItem] = useState('overview');

  const handleMenuItemClick = name => {
    setSelectedMenuItem(name);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  return (
    <>
      <Link to="/projects">
        <MenuItem
          onClick={() => handleMenuItemClick('allProjects')}
          icon={<SideIcons.Home />}
          name={<Translate value="menu.allProjects" />}
          count={props.projectsCount}
          selected={selectedMenuItem === 'allProjects'}
          isSidebarOpen={isSidebarOpen}
        />
      </Link>
      <Link to={`/projects/${id}/overview`}>
        <MenuItem
          onClick={() => handleMenuItemClick('overview')}
          icon={<SideIcons.Project />}
          name={<Translate value="menu.overview" />}
          // count={5}
          selected={selectedMenuItem === 'overview'}
          isSidebarOpen={isSidebarOpen}
        />
      </Link>
      <Link to={`/projects/${id}/reels`}>
        <MenuItem
          onClick={() => handleMenuItemClick('reels')}
          icon={<SideIcons.Reels />}
          name={<Translate value="menu.reels" />}
          count={5}
          selected={selectedMenuItem === 'reels'}
          isSidebarOpen={isSidebarOpen}
        />
      </Link>
      <MenuItem
        onClick={() => handleMenuItemClick('sequences')}
        icon={<SideIcons.Sequence />}
        name={<Translate value="menu.sequences" />}
        count={5}
        selected={selectedMenuItem === 'sequences'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('shots')}
        icon={<SideIcons.Shot />}
        name={<Translate value="menu.shots" />}
        count={5}
        selected={selectedMenuItem === 'shots'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('tasks')}
        icon={<SideIcons.Check />}
        name={<Translate value="menu.tasks" />}
        count={5}
        selected={selectedMenuItem === 'tasks'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('graph')}
        icon={<SideIcons.Graph />}
        name={<Translate value="menu.graph" />}
        // count={5}
        selected={selectedMenuItem === 'graph'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('stuff')}
        icon={<SideIcons.Stuff />}
        name={<Translate value="menu.stuff" />}
        count={5}
        selected={selectedMenuItem === 'stuff'}
        isSidebarOpen={isSidebarOpen}
      />
      <MenuItem
        onClick={() => handleMenuItemClick('team')}
        icon={<SideIcons.People />}
        name={<Translate value="menu.team" />}
        count={5}
        selected={selectedMenuItem === 'team'}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
};

export default ProjectMenu;
