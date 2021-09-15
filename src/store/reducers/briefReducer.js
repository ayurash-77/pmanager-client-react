import {
  BRIEF_ADD_FAIL, BRIEF_ADD_REQUEST, BRIEF_ADD_SUCCESS, BRIEF_DATA_RESET, BRIEF_DELETE_FAIL,
  BRIEF_DELETE_REQUEST,
  BRIEF_DELETE_SUCCESS, BRIEF_GET_FAIL, BRIEF_GET_REQUEST,
  BRIEF_GET_SUCCESS, BRIEF_LIST_FAIL, BRIEF_LIST_REQUEST,
  BRIEF_LIST_SUCCESS,
} from '../../constants/briefConstants';
import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_RESET,
  PROJECT_CREATE_SUCCESS,
} from '../../constants/projectConstants';

export const briefReducer = (
  state = {
    loading: false, success: false, briefs: [], error: null, currentBrief: {},
  },
  action,
) => {
  switch (action.type) {
    case BRIEF_LIST_REQUEST:
      return { ...state, loading: true };
    case BRIEF_LIST_SUCCESS:
      return { ...state, loading: false, briefs: action.payload };
    case BRIEF_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case BRIEF_GET_REQUEST:
      return { ...state, loading: true };
    case BRIEF_GET_SUCCESS:
      return { ...state, loading: false, currentBrief: action.payload };

    case BRIEF_GET_FAIL:
      return { ...state, loading: false, error: action.payload };

    case BRIEF_ADD_REQUEST:
      return { ...state, loading: true };
    case BRIEF_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        briefs: [...state.briefs, action.payload],
      };
    case BRIEF_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };

    case BRIEF_DATA_RESET:
      return {
        ...state, loading: false, error: null, currentBrief: {},
      };

    case BRIEF_DELETE_REQUEST:
      return { ...state, loading: true };
    case BRIEF_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        briefs: state.briefs.filter(brief => brief._id !== action.payload),
      };
    case BRIEF_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const briefCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REQUEST:
      return { ...state, loading: true };
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, createdProject: action.payload };
    case PROJECT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PROJECT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
