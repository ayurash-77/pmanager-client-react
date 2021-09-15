import { Translate } from 'react-redux-i18n';
import Moment from 'react-moment';
import { Grid, ProgressBar } from '../../ui';
import { Label, Status, Value } from './info.styles';

import statuses from '../../constants/statuses';

export const InfoLabel = props => (
  <>
    <Label>{props.label}</Label>
    <Value className={props.className}>{props.children}</Value>
  </>
);
export const InfoDate = props => (
  <>
    <Label>{props.label}</Label>
    <Value className={props.className}>{props.children}</Value>
  </>
);

export const InfoStatus = props => (
  <>
    <Label>{props.label}</Label>
    <Status status={props.status}>{props.children}</Status>
  </>
);

export const InfoProgress = props => (
  <>
    <Label>{props.label}</Label>
    <ProgressBar progress={props.progress} color={props.color} height={4} withValue />
  </>
);

export const HeaderInfo = ({ project }) => {
  const ownerName = project.owner.firstName && project.owner.secondName
    ? `${project.owner.firstName} ${project.owner.secondName}`
    : project.owner.username;

  return (
    <>
      <Grid cols="max-content max-content" gap={1} marginTop="10px">
        <InfoDate label={<Translate value="project.startDate" />} className="blueLight">
          {project.dateStart && <Moment format="YYYY.MM.DD">{project.dateStart}</Moment>}
        </InfoDate>
        <InfoDate label={<Translate value="project.deadline" />} className="accent">
          {project.dateEnd && <Moment format="YYYY.MM.DD">{project.dateEnd}</Moment>}
        </InfoDate>
        <InfoStatus status={statuses[project.statusCode]} label={<Translate value="project.status" />}>
          {statuses[project.statusCode].name}
        </InfoStatus>
        <InfoLabel label={<Translate value="project.owner" />}>{ownerName}</InfoLabel>
      </Grid>
    </>
  );
};
