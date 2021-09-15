import React from 'react';

import Moment from 'react-moment';
import { Translate } from 'react-redux-i18n';
import * as s from './ProjectCard.styles';
import { ProgressBar } from '../../ui';
import statuses from '../../constants/statuses';
import ProjectPic from '../../ui/ProjectPic';

const ProjectCard = ({ item, isSelected, viewFilter }) => (
  <s.container isSelected={isSelected}>
    {/* <s.pic id={'pic'} isSelected={isSelected}> */}
    <ProjectPic project={item} isSelected={isSelected} />
    {/* <Clapper /> */}
    {/* </s.pic> */}
    <ProgressBar width="160px" height={3} progress={item.progress} color={statuses[item.statusCode].color} />
    <s.infoContainer id="info" isSelected={isSelected}>
      {viewFilter.name && (
      <s.title isSelected={isSelected}>
        {item.highPriority && <span className="accent" />}
        {item.name}
      </s.title>
      )}

      <s.table>
        <tbody>
          {viewFilter.brand && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.brand" />
            </s.label>
            <s.value isSelected={isSelected}>Brand Name</s.value>
          </tr>
          )}
          {viewFilter.client && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.client" />
            </s.label>
            <s.value isSelected={isSelected}>Client Name</s.value>
          </tr>
          )}
          {viewFilter.agency && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.agency" />
            </s.label>
            <s.value isSelected={isSelected}>Agency Name</s.value>
          </tr>
          )}
          {viewFilter.created && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.created" />
            </s.label>
            <s.value isSelected={isSelected}>
              <Moment format="YYYY.MM.DD">{item.dateCreated}</Moment>
            </s.value>
          </tr>
          )}
          {viewFilter.startDate && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.startDate" />
            </s.label>
            <s.value isSelected={isSelected}>
              <s.blueLight>
                {item.dateStart ? <Moment format="YYYY.MM.DD">{item.dateStart}</Moment> : '---'}
              </s.blueLight>
            </s.value>
          </tr>
          )}
          {viewFilter.deadline && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.deadline" />
            </s.label>
            <s.value isSelected={isSelected}>
              <s.accent>{item.dateEnd ? <Moment format="YYYY.MM.DD">{item.dateEnd}</Moment> : '---'}</s.accent>
            </s.value>
          </tr>
          )}
          {viewFilter.status && (
          <tr>
            <s.label isSelected={isSelected}>
              <Translate value="project.status" />
            </s.label>
            <s.value isSelected={isSelected}>
              <s.status status={statuses[item.statusCode]}>
                {statuses[item.statusCode].name}
              </s.status>
            </s.value>
          </tr>
          )}
        </tbody>
      </s.table>
    </s.infoContainer>
  </s.container>
);

export default ProjectCard;
