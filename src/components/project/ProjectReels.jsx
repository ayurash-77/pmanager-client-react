import ProjectHeader from './ProjectHeader';
import Statusbar from '../common/Statusbar';
import * as s from '../common/mainbar.styles';
import { Rows } from '../../ui';

const ProjectReels = ({ project }) => (
  <>
    <ProjectHeader project={project} />

    <s.MainViewContainer flexDirection="row">
      <Rows padding="15px">
        <h2>Project Reels</h2>
        <div>{project.name}</div>
      </Rows>
    </s.MainViewContainer>
    <Statusbar />
  </>
);

export default ProjectReels;
