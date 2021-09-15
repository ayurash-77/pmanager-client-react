import axios from 'axios';
import {
  BRIEF_ADD_FAIL,
  BRIEF_ADD_REQUEST,
  BRIEF_ADD_SUCCESS,
  BRIEF_DELETE_FAIL,
  BRIEF_DELETE_REQUEST,
  BRIEF_DELETE_SUCCESS,
  BRIEF_GET_FAIL,
  BRIEF_GET_REQUEST,
  BRIEF_GET_SUCCESS,
  BRIEF_LIST_FAIL,
  BRIEF_LIST_REQUEST,
  BRIEF_LIST_SUCCESS,
} from '../../constants/briefConstants';

export const addBrief = briefData => async dispatch => {
  try {
    dispatch({ type: BRIEF_ADD_REQUEST });
    const { data } = await axios.post('/api/briefs/', briefData);
    dispatch({ type: BRIEF_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRIEF_ADD_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const listBriefs = () => async dispatch => {
  try {
    dispatch({ type: BRIEF_LIST_REQUEST });
    const { data } = await axios.get('/api/briefs/');
    dispatch({ type: BRIEF_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRIEF_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const getBrief = id => async dispatch => {
  try {
    dispatch({ type: BRIEF_GET_REQUEST });
    const { data } = await axios.get(`/api/briefs/${id}`);

    dispatch({ type: BRIEF_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BRIEF_GET_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};

export const deleteBrief = id => async dispatch => {
  try {
    dispatch({ type: BRIEF_DELETE_REQUEST });
    await axios.delete(`/api/briefs/${id}`);
    dispatch({ type: BRIEF_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: BRIEF_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
  }
};
