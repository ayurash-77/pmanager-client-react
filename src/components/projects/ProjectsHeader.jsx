import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Translate } from 'react-redux-i18n';
import HeaderWrapper from '../common/HeaderWrapper/HeaderWrapper';
import { ToolButton, Button16 } from '../../ui';
import NewProjectModal from '../../modal/NewProjectModal';
import Loader from '../../ui/Loader';
import { setViewMode, toggleInfobarShow } from '../../store/ui';

const ProjectsHeader = props => {
  const dispatch = useDispatch();

  // const { loading, projects } = useSelector(state => state?.projectsReducer)
  const { loading, list: projects } = useSelector(state => state?.projects);

  const loader = <Loader size={24} />;

  const { infobarShow } = useSelector(state => state?.ui);
  const { viewMode } = useSelector(state => state?.ui);

  const projectsCount = loading ? 0 : projects.length;
  const [isModalShow, setModalShow] = useState(false);

  const titleJSX = (
    <>
      <Translate value="projectInfo.projects" />
      :
      {loading ? loader : projectsCount}
      <Button16 icon="Plus" marginLeft="10px" onClick={() => setModalShow(true)} />
      <NewProjectModal isOpen={isModalShow} closeAction={() => setModalShow(false)} />
    </>
  );

  return (
    <HeaderWrapper titleJSX={titleJSX}>
      <ToolButton icon="Eye" rounded="all" selected={props.isShow} action={props.action} />
      <ToolButton //
        icon="Grid"
        rounded="left"
        selected={viewMode === 'grid'}
        action={() => dispatch(setViewMode('grid'))}
      />
      <ToolButton //
        icon="List"
        rounded="right"
        selected={viewMode === 'list'}
        action={() => dispatch(setViewMode('list'))}
      />
      <ToolButton icon="Info" rounded="all" selected={infobarShow} action={() => dispatch(toggleInfobarShow())} />
    </HeaderWrapper>
  );
};

export default ProjectsHeader;
