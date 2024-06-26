import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum, getData } from "./actions";
function App() {
  const numberState = useSelector((state) => {
    return state.changeNumber;
  });
  const dispatch = useDispatch();
  const Data = useSelector((state) => {
    return state.allData.data;
  });

  function random() {
    let x = Math.floor(Math.random() * 100 + 1);
    return x;
  }
  return (
    <>
      <h1>This is Redux</h1>

      <h2>Increase and decrease example</h2>
      <div className="displayquantity">
        <button type="button" onClick={() => dispatch(decNum())}>
          decrease
        </button>
        <input
          type="text"
          name="number"
          id="number"
          value={numberState.number}
        />

        <button type="button" onClick={() => dispatch(incNum())}>
          increase
        </button>
      </div>
      <button type="button" onClick={() => dispatch(getData(random()))}>
        Click me
      </button>
      <ul>
        {Data.joke}
        {/* {
        Data.map((data,index)=>{
          
          return(
            <li key={index}>
              {
                data.userId
              }
            </li>
          )
        })
      } */}
      </ul>
    </>
  );
}

export default App;
