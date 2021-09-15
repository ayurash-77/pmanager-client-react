import { Translate } from 'react-redux-i18n';
import { Button16, Grid } from '../../ui';
import { Title } from './info.styles';

export const InfoReels = () => (
  <>
    <Grid cols="auto max-content" gap={1} marginTop="5px" marginBottom="10px">
      <Title>
        <Translate value="menu.reels" />
      </Title>
      <Button16 icon="Plus" />
    </Grid>
  </>
);
