import { ADD_TO_NUMPAD, ADD_ERROR_0, LOCK_SAFE } from "./actions";
const initialState = {
  pin: "",
  boxes: [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: "CLR" },
    { value: 0 },
    { value: "next" },
  ],
  error: null,
};
const numpadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_NUMPAD: {
      const { id } = action.payload;
      if (id === "CLR")
        return {
          ...state,
          pin: "",
          error: null,
        };
      return {
        ...state,
        pin: `${state.pin}${id}`,
      };
    }
    case ADD_ERROR_0: {
      return {
        ...state,
        error: "Maximum 4 digits allowed. Press CLR",
      };
    }
    default:
      return state;
  }
};
export default numpadReducer;
