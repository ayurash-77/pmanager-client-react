import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'projects',
  initialState: {
    loading: false,
    error: null,
    currentId: null,
    lastFetch: null,
    list: [],
  },
  reducers: {
    projectsRequested: projects => {
      projects.loading = true;
    },

    projectsReceived: (projects, action) => {
      projects.list = action.payload;
      projects.loading = false;
      projects.lastFetch = Date.now();
    },

    projectsRequestFailed: (projects, action) => {
      projects.loading = false;
      projects.error = action.payload;
    },
  },
});

export const { projectsRequested, projectsReceived, projectsRequestFailed } = slice.actions;

// Action Creators
const url = '/projects';

export const loadProjects = () => (dispatch, getState) => {
  const { lastFetch } = getState().projects;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 1) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: projectsRequested.type,
      onSuccess: projectsReceived.type,
      onError: projectsRequestFailed.type,
    }),
  );
};

export default slice.reducer;
