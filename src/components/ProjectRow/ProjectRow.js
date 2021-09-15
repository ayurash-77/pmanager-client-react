import React from 'react';
import Moment from 'react-moment';
import * as s from './ProjectRow.styles';
import statuses from '../../constants/statuses';
import { ProgressBar } from '../../ui';

const Status = ({ status, progress }) => (
  <div>
    <s.status color={status.color}>{status.name}</s.status>
    <ProgressBar progress={progress} color={status.color} width="100%" height={2} />
  </div>
);

const ProjectRow = ({
  item, index, onClick, isSelected, onDoubleClick, viewFilter,
}) => (
  <s.tr
    onClick={() => onClick(item._id)}
    onDoubleClick={() => onDoubleClick(item._id)}
    isSelected={isSelected}
  >
    <td id="num" align="center">
      {index + 1}
    </td>
    {viewFilter.name && (
    <s.td color={statuses[item.statusCode].color}>
      <span className="bold">
        {item.highPriority && <span className="accent" />}
        {item.name}
      </span>
    </s.td>
    )}
    {viewFilter.brand && <td>{item.brand || '-'}</td>}
    {viewFilter.client && <td>{item.client || '-'}</td>}
    {viewFilter.agency && <td>{item.agency || '-'}</td>}
    {viewFilter.created && (
    <td className="center">
      <Moment format="YYYY.MM.DD">{item.dateCreated}</Moment>
    </td>
    )}
    {viewFilter.startDate && (
    <td className="blueLight center">
      {item.dateStart ? <Moment format="YYYY.MM.DD">{item.dateStart}</Moment> : '-'}
    </td>
    )}
    {viewFilter.deadline && (
    <td className="accent center">{item.dateEnd ? <Moment format="YYYY.MM.DD">{item.dateEnd}</Moment> : '-'}</td>
    )}
    {viewFilter.status && (
    <td>{item.status || <Status status={statuses[item.statusCode]} progress={item.progress} />}</td>
    )}
    {viewFilter.owner && <td>{item.owner.username}</td>}
    {viewFilter.details && <td>{item.details}</td>}
  </s.tr>
);

export default ProjectRow;
