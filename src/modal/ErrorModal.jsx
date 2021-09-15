import React, { useState } from 'react';
import { Translate } from 'react-redux-i18n';
import ModalWrapper from './ModalWrapper';
import { Grid } from '../ui';

const ErrorModal = props => {
  const [isModalShow, setModalShow] = useState(true);
  const title = 'Error!';

  const buttons = (
    <>
      <span style={{ marginRight: 10 }} />
      <button onClick={() => setModalShow(false)}>
        <Translate value="buttons.close" />
      </button>
    </>
  );

  return (
    <ModalWrapper
      warning
      isOpen={isModalShow}
      type="type2"
      size="md"
      title={title}
      buttons={buttons}
      closeAction={() => setModalShow(false)}
    >
      <Grid cols="auto" width="100%">
        <h3>{props.error}</h3>
      </Grid>
    </ModalWrapper>
  );
};
export default ErrorModal;
