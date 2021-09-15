import ReactModal from 'react-modal';
import './ModalWrapper.css';
import { Translate } from 'react-redux-i18n';
import React from 'react';
import * as s from './ModalWrapper.styles';
import { Rows } from '../ui';

const ModalWrapper = props => (
  <ReactModal
    appElement={document.getElementById('#root')}
    ariaHideApp={false}
    closeTimeoutMS={300}
    isOpen={props.isOpen}
    className={{
      base: `content-base ${props.type} ${props.size}`,
      afterOpen: `content-after-open-${props.type}`,
      beforeClose: `content-before-close-${props.type}`,
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-after-open',
      beforeClose: 'overlay-before-close',
    }}
    onRequestClose={props.closeAction}
  >
    <form onSubmit={props.onSubmitHandler}>
      <s.Header warning={props.warning}>
        {props.title && (
        <Translate value={props.title} />
        )}
      </s.Header>
      <s.Body>
        <Rows padding="15px">{props.children}</Rows>
      </s.Body>
      <s.Footer>{props.buttons}</s.Footer>
    </form>
  </ReactModal>
);
export default ModalWrapper;
