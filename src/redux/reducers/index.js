import { SET_FIRST_NAME, SET_LAST_NAME } from "../types";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  message: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};
