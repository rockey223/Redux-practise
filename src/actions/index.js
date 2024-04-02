import axios from "axios";
export const incNum = () => {
  return {
    type: "increase",
  };
};

export const decNum = () => {
  return {
    type: "decrease",
  };
};

export const getData = (id) => {
  return (dispatch) => {
    axios
      .get(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        dispatch({
          type: "getdata",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
