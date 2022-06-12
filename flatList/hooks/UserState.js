import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const UserState = (props) => {
  let initialState = [
    {
      dataUserInput: {
        name: null,
        lastname: null,
        dni: null,
      },
      isNew: true
    }
  ];

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setDataUser = (data) => {
    dispatch({
      type: "SET_DATA_USER",
      payload: data
    });
  };

  const getDataUser = () => {
    dispatch({
      type: "GET_DATA_USER",
      payload: state
    });
  };


  const isNew = (value) => {
    dispatch({ type: "IS_NEW", payload: (state.isNew = value) });
  };
  return (
    <UserContext.Provider
      value={{
        dataUserInput: state.dataUserInput ?? initialState,
        isUserNew: state.isNew ?? true,
        getDataUser,
        setDataUser,
        isNew
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
