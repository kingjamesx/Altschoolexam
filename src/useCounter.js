import { useReducer } from "react";
const useCounter = (num) => {
  const initialValue = { count: num };
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return {
        count: state.count + action.payload
      };
    } else if (action.type === "DECREMENT") {
      return {
        count: state.count - 1
      };
    } else if (action.type === "RESET") {
      return {
        count: (state.count = initialValue.count)
      };
    } else if (action.type === "SETVALUE") {
      return {
        count: action.payload
      };
    } else {
      throw Error("unknown action");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const value = state.count;
  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const decrement = () => {
    if (state.count > 0) {
      dispatch({ type: "DECREMENT" });
    }
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const setvalue = (num) => {
    dispatch({ type: "SETVALUE", payload: num });
  };
  
  return { value, increment, decrement, reset, setvalue };
};

export default useCounter;
