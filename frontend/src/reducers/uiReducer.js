import { types } from "../types/types";

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };
      break;

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
      break;

    default:
      return state;
  }
};
