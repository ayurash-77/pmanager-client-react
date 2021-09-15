// import * as api from '../../api/axios-api'
import axios from 'axios';
import {
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_SELECT,
  PROJECT_QUARTER_SET,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_DELETE_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_ALL_FAIL,
  PROJECT_ALL_REQUEST,
} from '../../constants/projectConstants';

export const fetchAllProjects = () => async dispatch => {
  try {
    dispatch({ type: PROJECT_ALL_REQUEST });
    const { data } = await axios.get('/api/projects');
    dispatch({ type: PROJECT_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_ALL_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const setCurrentId = id => async dispatch => {
  dispatch({ type: PROJECT_SELECT, payload: id });
};

export const getProjectDetails = id => async dispatch => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/projects/${id}`);
    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const createProject = project => async dispatch => {
  try {
    dispatch({ type: PROJECT_CREATE_REQUEST });
    const { data } = await axios.post('/api/projects', project);
    dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const selectProject = project => async dispatch => {
  dispatch({ type: PROJECT_SELECT, payload: project });
};

export const setQuarterProjects = projects => async dispatch => {
  dispatch({ type: PROJECT_QUARTER_SET, payload: projects });
};

export const deleteProject = id => async dispatch => {
  try {
    dispatch({ type: PROJECT_DELETE_REQUEST });
    await axios.delete(`/api/projects/${id}`);
    dispatch({ type: PROJECT_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};
