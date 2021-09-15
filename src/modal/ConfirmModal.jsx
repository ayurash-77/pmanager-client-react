import { Translate } from 'react-redux-i18n';
import ModalWrapper from './ModalWrapper';

import { Rows } from '../ui';

const ConfirmModal = props => {
  const title = 'Warning!';

  const buttons = (
    <>
      <button className="warning" type="submit">
        <Translate value="buttons.delete" />
      </button>
      <span style={{ marginRight: 10 }} />
      <button type="button" onClick={props.closeAction}>
        <Translate value="buttons.cancel" />
      </button>
    </>
  );

  return (
    <ModalWrapper
      warning
      isOpen={props.isOpen}
      type="type2"
      size={props.size || 'md'}
      title={title}
      buttons={buttons}
      closeAction={props.closeAction}
      onSubmitHandler={props.onSubmitHandler}
    >
      <Rows padding="0">
        <h4 style={{ color: 'var(--accent)', textAlign: 'center', marginBottom: 10 }}>
          {props.message.toString().toUpperCase()}
        </h4>
        <h3 style={{ color: 'var(--text-fg-high)', textAlign: 'center', marginBottom: 20 }}>{props.entity.name}</h3>
        {props.details}
      </Rows>
    </ModalWrapper>
  );
};
export default ConfirmModal;
