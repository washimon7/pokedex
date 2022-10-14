export const authReducer = (state, action) => {
  switch (action.type) {
    case 'signed-in':
      return {
        ...state,
        signedInUser: action.payload,
      };
    case 'signed-out':
      return {
        ...state,
        signedInUser: null,
      };
    default:
      return state;
  }
};
