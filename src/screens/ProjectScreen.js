import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router';
import Menubar from '../views/Menubar';
import Infobar from '../components/Infobar';
import * as s from '../components/common/mainbar.styles';
import ProjectOverview from '../components/project/ProjectOverview';
import ProjectReels from '../components/project/ProjectReels';
import ProjectMenu from '../components/menubar/ProjectMenu/ProjectMenu';
import Loader from '../ui/Loader';
import { setCurrentId } from '../store/actions/projectActions';

const ProjectScreen = () => {
  const { sidebarExpand } = useSelector(state => state?.ui);

  const { id } = useParams();
  const { projects, error } = useSelector(state => state?.projectsReducer);
  const project = projects.find(project => project._id === id) || null;

  const dispatch = useDispatch();

  const loader = <Loader size={64} />;
  const errorJSX = <h3>{error}</h3>;

  useEffect(() => {
    dispatch(setCurrentId(id));
  }, [dispatch, id]);

  return (
    <>
      <Menubar isSidebarOpen={sidebarExpand}>
        <ProjectMenu isSidebarOpen={sidebarExpand} projectsCount={projects.length} />
      </Menubar>

      <s.MainbarContainer>
        {project ? (
          <Switch>
            <Route path="/projects/:id/overview" exact component={() => <ProjectOverview project={project} />} />
            <Route path="/projects/:id/reels" exact component={() => <ProjectReels project={project} />} />
          </Switch>
        ) : error ? (
          errorJSX
        ) : (
          loader
        )}
      </s.MainbarContainer>
      <Infobar project={project} />
    </>
  );
};

export default ProjectScreen;
