import {
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_SELECT,
  PROJECT_QUARTER_SET,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_RESET,
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_ALL_FAIL,
} from '../../constants/projectConstants';

export const projectsReducerOld = (
  state = {
    loading: false, projects: [], quarterProjects: [], error: null, currentId: null,
  },
  action,
) => {
  switch (action.type) {
    case PROJECT_ALL_REQUEST:
      return { ...state, loading: true, projects: [] };
    case PROJECT_ALL_SUCCESS:
      return { ...state, loading: false, projects: action.payload };
    case PROJECT_ALL_FAIL:
      return { ...state, loading: false, error: action.payload };

    case PROJECT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.filter(project => project._id !== action.payload),
      };

    case PROJECT_SELECT:
      return { ...state, currentId: action.payload };

    case PROJECT_QUARTER_SET:
      return { ...state, quarterProjects: action.payload };

    default:
      return state;
  }
};

export const projectCreateReducer = (state = {}, action) => {
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

export const projectDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PROJECT_DETAILS_SUCCESS:
      return { loading: false, project: action.payload };
    case PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
