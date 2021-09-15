import React from 'react';
import styled from 'styled-components';

const width = p => (p.progress > p.height / 2 ? `${p.progress.toString()}%` : `${p.height / 2}px`);
const radius = p => p.height / 2;
const color = p => p.color;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 4px;
`;

const ProgressValue = styled.span`
  color: ${color};
  font-size: var(--font-size-small2);
`;

const ProgressBg = styled.div`
  width: ${p => p?.width || '100%'};
  height: ${p => p.height}px;
  margin: 2px 0;
  border-radius: ${radius}px;
  background: var(--prorogress-bar-bg);
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${width};
  height: ${p => p.height}px;
  background: ${p => p.color};
`;

export const ProgressBar = props => (
  <>
    <ProgressContainer>
      <ProgressBg width={props.width} height={props.height}>
        <Progress height={props.height} progress={props.progress} color={props.color} />
      </ProgressBg>
      {props.withValue && <ProgressValue color={props.color}>{`${props.progress.toString()}%`}</ProgressValue>}
    </ProgressContainer>
  </>
);
