const data = {
  data: [],
};

const allData = (state = data, action) => {
  switch (action.type) {
    case "getdata":
        console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};


export default allData