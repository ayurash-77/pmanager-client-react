// import { Grid, Switch, InputText, InputDate, InputTextarea, InputPic } from '../ui'
import React, { useEffect, useRef, useState } from 'react';
// import moment from 'moment'

import { Translate } from 'react-redux-i18n';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import path from 'path';
import ModalWrapper from './ModalWrapper';
import { addBrief } from '../store/actions/briefActions';
import { Label } from '../ui/inputs/Input';
import { Button, Grid, InputText } from '../ui';
// import { PROJECT_CREATE_RESET } from '../constants/projectConstants'
// import { BRIEF_DATA_RESET } from '../constants/briefConstants';

const NewBriefModal = props => {
  const title = 'app.newBrief';

  const [briefData, setBriefData] = useState({});

  const dispatch = useDispatch();

  const onChangeHandler = (key, e) => {
    setBriefData({ ...briefData, [key]: e.target.value });
  };

  const fileSelectedHandler = async e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('brief', file);

    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const { data } = await axios.post('/api/uploads/brief', formData, config);

      setBriefData({ ...briefData, filename: data.filename });
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!briefData.filename || briefData.filename.trim().length === 0) return;

    const ext = path.extname(briefData.filename);
    const filenameBase = path.basename(briefData.filename, ext);

    if (!briefData.name || briefData.name.trim().length === 0) {
      briefData.name = filenameBase;
    }

    console.log('onSubmitHandler: ', briefData);

    dispatch(addBrief(briefData));
    // dispatch({ type: BRIEF_DATA_RESET })
    props.closeAction();
  };

  const onCancelHandler = async () => {
    if (briefData.filename) {
      try {
        await axios.delete(`/api/uploads/brief/${briefData.filename}`);
      } catch (error) {
        console.log(error.message);
      }
    }
    // dispatch({ type: BRIEF_DATA_RESET })
    props.closeAction();
  };

  const buttons = (
    <>
      <button type="submit" onClick={onSubmitHandler}>
        <Translate value="buttons.add" />
      </button>
      <span style={{ marginRight: 10 }} />
      <button type="button" onClick={onCancelHandler}>
        <Translate value="buttons.cancel" />
      </button>
    </>
  );

  const fileInputRef = useRef();

  useEffect(() => {
    // dispatch({ type: BRIEF_DATA_RESET })
    setBriefData({ project: props.project });
  }, [dispatch, props.project]);

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        type="type1"
        size="md"
        title={title}
        buttons={buttons}
        closeAction={onCancelHandler}
        onSubmitHandler={onSubmitHandler}
      >
        <Grid cols="auto" width="100%" gap={5}>
          <input style={{ display: 'none' }} type="file" onChange={fileSelectedHandler} ref={fileInputRef} />

          <Grid cols="max-content auto max-content" marginTop="5px" textAlign="right">
            <Label>
              <Translate value="brief.selectedFile" />
            </Label>
            <div className="input">{briefData.filename}</div>
            <Button onClick={() => fileInputRef.current.click()} autoFocus>
              <Translate value="buttons.browse" />
            </Button>
            <InputText
              gridColumn="2 / 4"
              label={<Translate value="brief.title" />}
              onChange={e => onChangeHandler('name', e)}
            />
            <InputText
              gridColumn="2 / 4"
              label={<Translate value="brief.category" />}
              onChange={e => onChangeHandler('category', e)}
            />
          </Grid>
        </Grid>
      </ModalWrapper>
    </>
  );
};

export default NewBriefModal;
