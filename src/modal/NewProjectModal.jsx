import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { useHistory } from 'react-router';
import axios from 'axios';
import {
  Grid, Switch, InputText, InputDate, InputTextarea, InputPic,
} from '../ui';
import { createProject, setCurrentId } from '../store/actions/projectActions';
import { getUserDetails } from '../store/actions/userActions';
import { PROJECT_CREATE_RESET } from '../constants/projectConstants';
// import ErrorModal from './ErrorModal'
import ModalWrapper from './ModalWrapper';

const NewProjectModal = props => {
  const title = 'app.newProject';

  const userDetails = useSelector(state => state?.userDetails);
  const { user } = userDetails;
  const { success, createdProject } = useSelector(state => state?.projectCreate);
  const { currentId } = useSelector(state => state?.projectsReducer);

  const [projectData, setProjectData] = useState({});
  const [isChecked, setChecked] = useState(false);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeHandler = (key, e) => {
    setProjectData({ ...projectData, [key]: e.target.value });
  };

  const onCheckedHandler = val => {
    setChecked(!val);
    setProjectData({ ...projectData, highPriority: !val });
  };

  const fileSelectedHandler = async e => {
    try {
      await axios.delete(`/api/uploads/thumbnail/${image.name}`);
    } catch (error) {}

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('thumbnail', file);
    setImage(null);
    setLoading(false);
    setUploading(true);
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      const { data } = await axios.post('/api/uploads/thumbnail', formData, config);
      setImage(data);
      setUploading(false);
      setLoading(true);

      setProjectData({ ...projectData, thumbnail: data.name });
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!projectData.name || projectData.name.trim().length === 0) return;
    dispatch(createProject(projectData));
  };

  const onCancelHandler = async () => {
    if (projectData.thumbnail) {
      try {
        await axios.delete(`/api/uploads/thumbnail/${image.name}`);
      } catch (error) {}
    }
    setImage(null);
    props.closeAction();
  };

  // const brands = [
  //   { name: 'Bepanten', fullName: 'Бепантен' },
  //   { name: 'Maloejka', fullName: 'Малоежка' },
  //   { name: 'Geksoral', fullName: 'Гексорал' },
  //   { name: 'Gerber', fullName: 'Gerber' },
  // ]

  const buttons = (
    <>
      <button type="submit" onClick={onSubmitHandler}>
        <Translate value="buttons.create" />
      </button>
      <span style={{ marginRight: 10 }} />
      <button type="button" onClick={onCancelHandler}>
        <Translate value="buttons.cancel" />
      </button>
    </>
  );

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch({ type: PROJECT_CREATE_RESET });

    if (!user || !user.username) {
      dispatch(getUserDetails('profile'));
    } else {
      setProjectData({ owner: user });
      if (success && createdProject) {
        dispatch(setCurrentId(createdProject._id));
        history.push(`/projects/${createdProject._id}/overview`);
      }
    }
  }, [dispatch, history, createdProject, success, user, currentId]);

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        type="type1"
        size="sm"
        title={title}
        buttons={buttons}
        closeAction={onCancelHandler}
        onSubmitHandler={onSubmitHandler}
      >
        <Grid cols="auto" width="100%" gap={5}>
          <input style={{ display: 'none' }} type="file" onChange={fileSelectedHandler} ref={fileInputRef} />
          <InputPic
            onClick={() => fileInputRef.current.click()}
            uploading={uploading}
            image={image}
            loading={loading}
            onLoad={() => setLoading(false)}
          />

          <Grid cols="max-content auto " marginTop="5px" textAlign="right">
            <InputText
              label={<Translate value="project.projectName" />}
              onChange={e => onChangeHandler('name', e)}
              autoFocus
            />
            <InputText label={<Translate value="project.brand" />} onChange={e => onChangeHandler('brand', e)} />
            <InputText label={<Translate value="project.client" />} onChange={e => onChangeHandler('client', e)} />
            <InputText label={<Translate value="project.agency" />} onChange={e => onChangeHandler('agency', e)} />
            <InputText
              label={<Translate value="project.production" />}
              onChange={e => onChangeHandler('production', e)}
            />
            <InputText
              label={<Translate value="project.postProduction" />}
              onChange={e => onChangeHandler('postProduction', e)}
            />
            <InputDate
              label={<Translate value="project.startDate" />}
              onChange={e => onChangeHandler('dateStart', e)}
              dateType="dateStart"
            />
            <InputDate
              label={<Translate value="project.deadline" />}
              onChange={e => onChangeHandler('dateEnd', e)}
              dateType="dateEnd"
            />

            <InputTextarea
              label={<Translate value="project.details" />}
              onChange={e => onChangeHandler('details', e)}
            />

            <Switch
              label={<Translate value="project.highPriority" />}
              checked={isChecked}
              onChange={() => onCheckedHandler(isChecked)}
            />
          </Grid>
        </Grid>
      </ModalWrapper>
      {/* {error && <ErrorModal error={error} />} */}
    </>
  );
};

export default NewProjectModal;
