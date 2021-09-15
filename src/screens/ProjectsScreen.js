import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectsList from '../components/projects/ProjectsList';
import Loader from '../ui/Loader';
import * as s from '../components/common/mainbar.styles';
import Statusbar from '../components/common/Statusbar';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import { setCurrentId } from '../store/actions/projectActions';
import MainMenu from '../components/menubar/MainMenu';
import Menubar from '../views/Menubar';
import Infobar from '../components/Infobar';
import ErrorModal from '../modal/ErrorModal';
import ViewFilterBar from '../components/ViewFilterBar';
import { setViewFilters, toggleViewFilterBarShow } from '../store/ui';
import { loadProjects } from '../store/projects';

const ProjectsScreen = () => {
  const { sidebarExpand, viewMode, viewFilterBar } = useSelector(state => state?.ui);
  const { quarterProjects, currentId } = useSelector(state => state?.projectsReducer);
  const { loading, error, list: projects } = useSelector(state => state?.projects);

  // const { loading, list, error } = useSelector(state => state?.projects)

  const dispatch = useDispatch();
  const history = useHistory();

  const toggleViewFilterBarShowHandler = () => {
    dispatch(toggleViewFilterBarShow());
  };

  const setViewFiltersHandler = key => {
    const newViewFilterData = {
      ...viewFilterBar.filters,
      [viewMode]: {
        ...viewFilterBar.filters[viewMode],
        [key]: !viewFilterBar.filters[viewMode][key],
      },
    };
    dispatch(setViewFilters(newViewFilterData));
  };

  const onProjectClickHandler = id => {
    currentId === id ? dispatch(setCurrentId(null)) : dispatch(setCurrentId(id));
  };

  const onProjectDoubleClickHandler = id => {
    dispatch(setCurrentId(id));
    history.push(`/projects/${id}/overview`);
  };

  const content = projects.length > 0 && viewMode === 'grid' ? (
    <ProjectsGrid
      viewFilter={viewFilterBar.filters.grid}
      projects={quarterProjects.length > 0 ? quarterProjects : projects}
      currentId={currentId}
      onClick={onProjectClickHandler}
      onDoubleClick={onProjectDoubleClickHandler}
    />
  ) : (
    <ProjectsList
      viewFilter={viewFilterBar.filters.list}
      projects={quarterProjects.length > 0 ? quarterProjects : projects}
      currentId={currentId}
      onClick={onProjectClickHandler}
      onDoubleClick={onProjectDoubleClickHandler}
    />
  );

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch, projects]);

  return (
    <>
      <Menubar isSidebarOpen={sidebarExpand}>
        <MainMenu isSidebarOpen={sidebarExpand} />
      </Menubar>
      <s.MainbarContainer>
        <ProjectsHeader isShow={viewFilterBar.show} action={toggleViewFilterBarShowHandler} />
        <ViewFilterBar
          isShow={viewFilterBar.show}
          viewFilter={viewMode === 'grid' ? viewFilterBar.filters.grid : viewFilterBar.filters.list}
          action={setViewFiltersHandler}
        />
        <s.MainViewContainer>
          {loading ? <Loader size={64} /> : error ? <ErrorModal error={error} /> : content}
        </s.MainViewContainer>
        <Statusbar />
      </s.MainbarContainer>
      <Infobar currentId={currentId} />
    </>
  );
};

export default ProjectsScreen;
