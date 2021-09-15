import { combineReducers } from 'redux';

import { i18nReducer } from 'react-redux-i18n';
import projectsReducer from './projects';
import uiReducer from './ui';

import { userDetailsReducer, userLoginReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { projectsReducerOld, projectCreateReducer, projectDetailsReducer } from './reducers/projectReducers_old';
import { briefReducer } from './reducers/briefReducer';

export default combineReducers({
  i18n: i18nReducer,
  ui: uiReducer,

  projects: projectsReducer,

  projectsReducer: projectsReducerOld,

  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  projectCreate: projectCreateReducer,
  projectDetails: projectDetailsReducer,

  briefReducer,
});
