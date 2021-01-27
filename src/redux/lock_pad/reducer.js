import { LOCK_SAFE } from "./actions";
const initialState = {
  lockStatus: false,
};
const lockpadReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOCK_SAFE: {
      return {
        ...state,
        lockStatus: action.payload.lock,
      };
    }
    default:
      return state;
  }
};
export default lockpadReducer;
