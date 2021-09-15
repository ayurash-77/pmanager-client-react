import React from 'react';
import * as s from './ProjectsGrid.styles';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsGrid = ({
  projects, currentId, onClick, onDoubleClick, viewFilter,
}) => {
  const projectsCardsJsx = [...projects]
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map(item => (
      <div
        key={item._id}
        onClick={() => onClick(item._id)}
        onDoubleClick={() => onDoubleClick(item._id)}
        aria-hidden="true"
      >
        <ProjectCard item={item} isSelected={currentId === item._id} viewFilter={viewFilter} />
      </div>
    ));

  return <s.container>{projectsCardsJsx}</s.container>;
};

export default ProjectsGrid;
