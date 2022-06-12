import { GET_DATA_USER, SET_DATA_USER, IS_NEW } from "./../type";

export default (state, actions) => {
  
  const { payload, type } = actions;
  
  switch (type) {
    case GET_DATA_USER:
      return {
        ...state,
        dataUserInput: payload
      };

    case SET_DATA_USER:
      return {
        ...state,
        dataUserInput: payload
      };
    case IS_NEW:
      return {
        ...state,
        isNew: payload
      };

    default:
      return state;
  }
};
