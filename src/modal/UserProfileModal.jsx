import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Translate } from 'react-redux-i18n';
import { getUserDetails, updateUserProfile } from '../store/actions/userActions';
import {
  InputDate, InputText, InputPass, Group, Grid, Switch,
} from '../ui';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
// import ProjectPic from '../UI/project-pic'
import ModalWrapper from './ModalWrapper';
import ErrorModal from './ErrorModal';

const UserProfileModal = props => {
  const title = 'app.userProfile';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState(' ');
  const [secondName, setSecondName] = useState(' ');
  const [birthday, setBirthday] = useState(null);
  const [phone, setPhone] = useState(' ');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector(state => state?.userDetails);
  const { error, user } = userDetails;

  const userLogin = useSelector(state => state?.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(state => state?.userUpdateProfile);
  const { success } = userUpdateProfile;

  const usernameHandler = e => setUsername(e.target.value);
  const emailHandler = e => setEmail(e.target.value);
  const firstNameHandler = e => setFirstName(e.target.value);
  const secondNameHandler = e => {
    setSecondName(e.target.value);
  };
  const passwordHandler = e => setPassword(e.target.value);
  const confirmPasswordHandler = e => setConfirmPassword(e.target.value);
  const birthdayHandler = e => {
    setBirthday(e.target.value);
  };
  const phoneHandler = e => setPhone(e.target.value);
  const isAdminHandler = () => {
    setIsAdmin(prev => !prev);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    dispatch(
      updateUserProfile({
        id: user._id,
        username,
        email,
        password,
        firstName,
        secondName,
        birthday,
        phone,
        isAdmin,
      }),
    );

    props.closeAction();
  };

  const buttons = (
    <>
      <button type="submit" onClick={onSubmitHandler}>
        <Translate value="buttons.save" />
      </button>

      <span style={{ marginRight: 10 }} />
      <button type="button" onClick={props.closeAction}>
        <Translate value="buttons.cancel" />
      </button>
    </>
  );

  useEffect(() => {
    if (!user || !user.username || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails('profile'));
    } else {
      setUsername(user.username);
      setEmail(user.email);
      // setPassword(user.password ? user.password : '')
      setFirstName(user.firstName ? user.firstName : '');
      setSecondName(user.secondName ? user.secondName : '');
      setBirthday(user.birthday ? moment(user.birthday).format('YYYY-MM-DD') : null);
      setPhone(user.phone ? user.phone : '');
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, userInfo, user, success]);

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        type="type1"
        size="md"
        title={title}
        buttons={buttons}
        closeAction={props.closeAction}
        onSubmitHandler={onSubmitHandler}
      >
        <Grid cols="auto" width="100%" gap={15}>
          <Group label={<Translate value="app.mainSettings" />}>
            {/* <ProjectPic /> */}
            <div>AVATAR</div>
            <Grid cols="max-content auto" marginTop="5px">
              <InputText
                label={<Translate value="user.username" />}
                onChange={usernameHandler}
                autoFocus
                value={username}
              />

              <InputText label={<Translate value="user.email" />} onChange={emailHandler} value={email} />
              <InputText label={<Translate value="user.firstName" />} onChange={firstNameHandler} value={firstName} />
              <InputText
                label={<Translate value="user.secondName" />}
                onChange={secondNameHandler}
                value={secondName}
              />
              <InputPass label={<Translate value="user.password" />} onChange={passwordHandler} value={password} />
              <InputPass
                label={<Translate value="user.confirmPassword" />}
                onChange={confirmPasswordHandler}
                value={confirmPassword}
              />

              <InputDate
                label={<Translate value="user.birthday" />}
                variant="blue-light"
                onChange={birthdayHandler}
                value={birthday !== null ? birthday : ''}
              />
              <InputText label={<Translate value="user.phone" />} onChange={phoneHandler} value={phone} />
              <Switch
                label={<Translate value="user.isAdmin" />}
                checked={isAdmin}
                onChange={() => isAdminHandler(isAdmin)}
              />
            </Grid>
          </Group>
        </Grid>
      </ModalWrapper>
      {error && <ErrorModal error={error} />}
      {success && <ErrorModal error="Changes Saved!" />}
    </>
  );
};

export default UserProfileModal;
