import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderWrapper from '../common/HeaderWrapper/HeaderWrapper';
import { ToolButton, ProgressBar } from '../../ui';
import statuses from '../../constants/statuses';
import ProjectPic from '../../ui/ProjectPic';
import { HeaderInfo } from '../info';
import { toggleInfobarShow } from '../../store/ui';

const ProjectHeader = ({ project }) => {
  const { infobarShow } = useSelector(state => state?.ui);
  const dispatch = useDispatch();

  const titleJSX = (
    <>
      <div style={{
        width: 160, height: '100%', paddingBottom: 15, position: 'relative',
      }}
      >
        <ProjectPic project={project} isSelected />
        <ProgressBar
          height={3}
          progress={project.progress}
          color={statuses[project.statusCode].color}
        />
      </div>

      <div style={{ marginLeft: 10, alignItems: 'flex-start', height: '100%' }}>
        <h3>
          <span className="blue">{project.name.toUpperCase()}</span>
        </h3>

        <HeaderInfo project={project} />
      </div>
    </>
  );

  return (
    <HeaderWrapper titleJSX={titleJSX}>
      <ToolButton icon="Eye" rounded="all" />
      <ToolButton icon="Info" rounded="all" selected={infobarShow} action={() => dispatch(toggleInfobarShow())} />
    </HeaderWrapper>
  );
};

export default ProjectHeader;
