import React, { useReducer, createContext, useMemo } from "react";

export const NumberContext = createContext(); 

export const ACTIONS = {
  // action диспетчера
  INCREASE: "increase",
  DECREASE: "decrease"
};

const initialState = {
  // значение для инициации объекта
  value: 0
};

const reducer = (state, action) => {
  // обычный редюсер для управления состоянием
  switch (action.type) {
    case ACTIONS.INCREASE:
      return {
        value: state.value + 1
      };
    case ACTIONS.DECREASE:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};

export const NumberProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  // (**)
    const contextValue = useMemo(() => {
      return { state, dispatch };
    }, [state, dispatch]);
    
  return (
      <NumberContext.Provider value={contextValue}>
        {children}
      </NumberContext.Provider>
    );
  };