import {
  GET_TECHS,
  TECHS_ERROR,
  SET_LOADING,
  ADD_TECH,
  DELETE_TECH
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log("loading from techReducer");
      return {
        ...state,
        loading: true
      };

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };

    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };

    default:
      return state;
  }
};
