import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { InfobarContainer, TopContainer, Content } from './Infobar.styles';
import { deleteProject, selectProject } from '../../store/actions/projectActions';
import { ToolButton } from '../../ui';
import {
  InfoSummary, InfoBriefs, InfoReels, InfoTeam, InfoStuff, InfoShots,
} from '../info';
import ConfirmModal from '../../modal/ConfirmModal';
// import { useParams } from 'react-router'

const Infobar = ({ currentId, project }) => {
  const { infobarShow } = useSelector(state => state?.ui);

  const dispatch = useDispatch();
  // const { id: paramsId } = useParams()

  const { projects } = useSelector(state => state?.projectsReducer);
  const selectedProject = projects.find(project => project._id === currentId) || null;

  const [showInfobarInfo, setShowInfobarInfo] = useState(true);
  const [showInfobarBriefs, setShowInfobarBriefs] = useState(true);
  const [showInfobarReels, setShowInfobarReels] = useState(true);
  const [showInfobarTeam, setShowInfobarTeam] = useState(true);
  const [showInfobarStuff, setShowInfobarStuff] = useState(true);
  const [showInfobarShots, setShowInfobarShots] = useState(true);

  const [isModalShow, setModalShow] = useState(false);

  const deleteProjectHandler = (e, id) => {
    e.preventDefault();
    dispatch(selectProject(null));
    dispatch(deleteProject(id));
    setModalShow(false);
  };

  const currentProject = selectedProject || project;

  const content = currentProject && (
    <>
      {showInfobarInfo && <InfoSummary project={currentProject} />}
      {showInfobarBriefs && <InfoBriefs project={currentProject} />}
      {showInfobarReels && <InfoReels project={currentProject} />}
      {showInfobarTeam && <InfoTeam project={currentProject} />}
      {showInfobarStuff && <InfoStuff project={currentProject} />}
      {showInfobarShots && <InfoShots project={currentProject} />}
      <button className="warning" onClick={() => setModalShow(true)}>
        Delete Project
      </button>
      <ConfirmModal
        size="md"
        isOpen={isModalShow}
        onSubmitHandler={e => deleteProjectHandler(e, currentProject._id)}
        closeAction={() => setModalShow(false)}
        message="Are you sure you want to delete this project?"
        entity={currentProject}
        details={(
          <Content>
            <InfoSummary noIcon project={currentProject} />
          </Content>
        )}
      />
    </>
  );

  // console.log(paramsId)

  return (
    <InfobarContainer show={infobarShow}>
      <TopContainer>
        <ToolButton
          icon="Info"
          rounded="left"
          selected={showInfobarInfo}
          action={() => setShowInfobarInfo(prev => !prev)}
        />
        <ToolButton
          icon="Brief"
          rounded="none"
          selected={showInfobarBriefs}
          action={() => setShowInfobarBriefs(prev => !prev)}
        />
        <ToolButton
          icon="Reel"
          rounded="none"
          selected={showInfobarReels}
          action={() => setShowInfobarReels(prev => !prev)}
        />
        <ToolButton
          icon="User"
          rounded="none"
          selected={showInfobarTeam}
          action={() => setShowInfobarTeam(prev => !prev)}
        />
        <ToolButton
          icon="Stuff"
          rounded="none"
          selected={showInfobarStuff}
          action={() => setShowInfobarStuff(prev => !prev)}
        />
        <ToolButton
          icon="Shot"
          rounded="right"
          selected={showInfobarShots}
          action={() => setShowInfobarShots(prev => !prev)}
          marginRight
        />
      </TopContainer>

      <Content>{content}</Content>
    </InfobarContainer>
  );
};

export default Infobar;
