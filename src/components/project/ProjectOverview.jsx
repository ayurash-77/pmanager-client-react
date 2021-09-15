import ProjectHeader from './ProjectHeader';
import Statusbar from '../common/Statusbar';
import * as s from '../common/mainbar.styles';

import { Rows } from '../../ui';

const ProjectOverview = ({ project }) => (
  <>
    <ProjectHeader project={project} />

    <s.MainViewContainer flexDirection="row">
      <Rows padding="15px">
        <h2>Project Overview</h2>
        <div>{project.name}</div>
      </Rows>
    </s.MainViewContainer>
    <Statusbar />
  </>
);

export default ProjectOverview;
