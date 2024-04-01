const initialState = {
  number: 0,
};

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, number: state.number + 1 };
    case "decrease":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export default changeNumber;

