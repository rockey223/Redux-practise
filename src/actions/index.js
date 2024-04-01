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
export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        
        dispatch({
          type: "getdata",
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};