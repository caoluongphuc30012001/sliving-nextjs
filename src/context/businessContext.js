import React, { useReducer, createContext } from "react";

export const BusinessStateContext = createContext();
export const BusinessDispatchContext = createContext();

const initialState = {
  userChoices: [],
  total: 0,
  houseID: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_USER_CHOICES": {
      return {
        ...state,
        userChoices: action.payload,
      };
    }
    case "REMOVE_USER_CHOICES": {
      return {
        ...state,
        userChoices: state.userChoices.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case "GET_TOTAL_HOUSES": {
      return {
        ...state,
        total: action.payload.total,
      };
    }
    case "GET_HOUSE_ID": {
      return {
        ...state,
        houseID: action.payload,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

export const BusinessContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BusinessStateContext.Provider value={state}>
      <BusinessDispatchContext.Provider value={dispatch}>
        {children}
      </BusinessDispatchContext.Provider>
    </BusinessStateContext.Provider>
  );
};
