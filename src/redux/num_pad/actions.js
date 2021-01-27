export const ADD_TO_NUMPAD = "ADD_TO_NUMPAD";
export const ADD_ERROR_0 = "ADD_ERROR_0";

export const addToNumpad = (id) => ({
  type: ADD_TO_NUMPAD,
  payload: { id },
});
export const addError_0 = () => ({
  type: ADD_ERROR_0,
});
