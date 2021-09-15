import styled from 'styled-components';
import { useState } from 'react';
import Loader from '../Loader';
import { Clapper } from '../../assets/thumbnails/thumbnails';

const ProjectPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p?.width && '100%'};
  height: 90px;
  max-height: 90px;
  position: relative;

  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-project-dummy2);
  color: var(--table1-header);
  opacity: ${p => (p?.isSelected ? 1 : 0.7)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

const ProjectPic = ({ project, isSelected }) => {
  const src = `/root/${project.quarter}/${project.homeDir}/.pmdata/project-thumbnail.jpg`;
  const [loading, setLoading] = useState(true);

  return (
    <ProjectPicContainer id="pic" isSelected={isSelected}>
      <>
        {project.thumbnail ? (
          <>
            {loading && (
              <div style={{ position: 'absolute' }}>
                <Loader />
              </div>
            )}
            <img src={src} alt={project.name} onLoad={() => setLoading(false)} />
          </>
        ) : (
          <div style={{ position: 'absolute' }}>
            <Clapper />
          </div>
        )}
      </>
    </ProjectPicContainer>
  );
};

export default ProjectPic;
