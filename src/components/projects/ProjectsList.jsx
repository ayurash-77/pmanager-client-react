import React, { useState } from 'react';
import { Translate } from 'react-redux-i18n';
import * as s from './ProjectsList.styles';
import ProjectRow from '../ProjectRow/ProjectRow';

const ProjectsList = ({
  projects, currentId, onClick, onDoubleClick, viewFilter,
}) => {
  const [sortAttr, setSortAttr] = useState('name');
  const [sortDirection, setSortDirection] = useState(1);

  const sortHandler = name => {
    setSortAttr(name);
    setSortDirection(-sortDirection);
  };

  const projectsListRowJsx = (
    <s.table border={0}>
      <thead>
        <tr>
          <th>№</th>
          {viewFilter.name && (
            <th onClick={() => sortHandler('name')}>
              <Translate value="project.projectName" />
            </th>
          )}
          {viewFilter.brand && (
            <th>
              <Translate value="project.brand" />
            </th>
          )}
          {viewFilter.client && (
            <th>
              <Translate value="project.client" />
            </th>
          )}
          {viewFilter.agency && (
            <th>
              <Translate value="project.agency" />
            </th>
          )}
          {viewFilter.created && (
            <th onClick={() => sortHandler('dateCreated')}>
              <Translate value="project.created" />
            </th>
          )}
          {viewFilter.startDate && (
            <th onClick={() => sortHandler('dateStart')}>
              <Translate value="project.startDate" />
            </th>
          )}
          {viewFilter.deadline && (
            <th onClick={() => sortHandler('dateEnd')}>
              <Translate value="project.deadline" />
            </th>
          )}
          {viewFilter.status && (
            <th onClick={() => sortHandler('statusCode')}>
              <Translate value="project.status" />
            </th>
          )}
          {viewFilter.owner && (
            <th>
              <Translate value="project.owner" />
            </th>
          )}
          {viewFilter.details && (
            <th>
              <Translate value="project.details" />
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {[...projects]
          .sort((a, b) => (a[sortAttr] > b[sortAttr] ? sortDirection : -sortDirection))
          .map((item, index) => (
            <ProjectRow
              key={index}
              item={item}
              index={index}
              isSelected={currentId === item._id}
              onClick={onClick}
              onDoubleClick={onDoubleClick}
              viewFilter={viewFilter}
            />
          ))}
      </tbody>
    </s.table>
  );

  return (
    <s.container>
      <s.tableContainer>{projectsListRowJsx}</s.tableContainer>
    </s.container>
  );
};

export default ProjectsList;
