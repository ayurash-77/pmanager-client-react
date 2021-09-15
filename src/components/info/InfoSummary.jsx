import { Translate } from 'react-redux-i18n';
import Moment from 'react-moment';
import { Button16, Grid } from '../../ui';
import { BlockContainer, Title } from './info.styles';
import statuses from '../../constants/statuses';
import {
  InfoDate, InfoLabel, InfoProgress, InfoStatus,
} from './info';

export const InfoSummary = ({ project, noIcon }) => {
  const ownerName = project.owner.firstName && project.owner.secondName
    ? `${project.owner.firstName} ${project.owner.secondName}`
    : project.owner.username;

  return (
    <>
      <Grid cols="auto max-content" gap={1} marginBottom="5px">
        <Title>
          <Translate value="menu.projectInfo" />
        </Title>
        {!noIcon && <Button16 icon="Gear" />}
      </Grid>

      <BlockContainer>
        <Grid cols="auto auto" gap={1} marginBottom="10px">
          <Grid cols="max-content auto" gap={1}>
            <InfoLabel label={<Translate value="project.projectName" />}>
              <h4>
                <span className="blue">{project.name.toUpperCase()}</span>
              </h4>
            </InfoLabel>
            <InfoLabel label={<Translate value="project.brand" />}>{project.brand}</InfoLabel>
            <InfoLabel label={<Translate value="project.client" />}>{project.client}</InfoLabel>
            <InfoLabel label={<Translate value="project.agency" />}>{project.agency}</InfoLabel>

            <InfoLabel label={<Translate value="project.owner" />}>{ownerName}</InfoLabel>
          </Grid>
          <Grid cols="max-content auto" gap={1}>
            <InfoDate label={<Translate value="project.created" />}>
              {project.dateCreated && <Moment format="YYYY.MM.DD">{project.dateCreated}</Moment>}
            </InfoDate>
            <InfoDate label={<Translate value="project.startDate" />} className="blueLight">
              {project.dateStart && <Moment format="YYYY.MM.DD">{project.dateStart}</Moment>}
            </InfoDate>
            <InfoDate label={<Translate value="project.deadline" />} className="accent">
              {project.dateEnd && <Moment format="YYYY.MM.DD">{project.dateEnd}</Moment>}
            </InfoDate>
            <InfoStatus status={statuses[project.statusCode]} label={<Translate value="project.status" />}>
              {statuses[project.statusCode].name}
            </InfoStatus>
            <InfoProgress
              status={statuses[project.statusCode]}
              color={statuses[project.statusCode].color}
              progress={project.progress}
              label={<Translate value="project.progress" />}
            >
              {statuses[project.statusCode].name}
            </InfoProgress>
          </Grid>
        </Grid>
      </BlockContainer>
    </>
  );
};
