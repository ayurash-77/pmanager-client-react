import styled from 'styled-components';
import { Translate } from 'react-redux-i18n';
import { Grid, Switch } from '../../ui';

const Container = styled.div`
  transition: height 200ms;
  background-color: var(--navbar-toggle);
  height: ${p => (p?.show ? '38px' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-x: auto;

  z-index: 1;
`;
const ViewFilterBar = ({ viewFilter, ...props }) => (
  <Container show={props.isShow}>
    <Grid cols="auto auto auto auto auto auto auto auto auto auto" gapCol={15} gapRow={4}>
      <Switch
        row
        label={<Translate value="project.brand" />}
        checked={viewFilter.brand}
        onChange={() => {
          props.action('brand');
        }}
      />
      <Switch
        row
        label={<Translate value="project.client" />}
        checked={viewFilter.client}
        onChange={() => {
          props.action('client');
        }}
      />
      <Switch
        row
        label={<Translate value="project.agency" />}
        checked={viewFilter.agency}
        onChange={() => {
          props.action('agency');
        }}
      />
      <Switch
        row
        label={<Translate value="project.created" />}
        checked={viewFilter.created}
        onChange={() => {
          props.action('created');
        }}
      />
      <Switch
        row
        label={<Translate value="project.startDate" />}
        checked={viewFilter.startDate}
        onChange={() => {
          props.action('startDate');
        }}
      />
      <Switch
        row
        label={<Translate value="project.deadline" />}
        checked={viewFilter.deadline}
        onChange={() => {
          props.action('deadline');
        }}
      />
      <Switch
        row
        label={<Translate value="project.status" />}
        checked={viewFilter.status}
        onChange={() => {
          props.action('status');
        }}
      />
      {viewFilter.owner !== null && (
      <Switch
        row
        label={<Translate value="project.owner" />}
        checked={viewFilter.owner}
        onChange={() => {
          props.action('owner');
        }}
      />
      )}
      {viewFilter.details !== null && (
      <Switch
        row
        label={<Translate value="project.details" />}
        checked={viewFilter.details}
        onChange={() => {
          props.action('details');
        }}
      />
      )}
    </Grid>
  </Container>
);
export default ViewFilterBar;
