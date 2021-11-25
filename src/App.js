import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {sumCounter, subtr_counter} from "./store/modules/counter/action";

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  
  const sum = () => {
    dispatch(sumCounter());
  };

  const subtr = () => {
    dispatch(subtr_counter());
  };

  return (
    <div className="App-header">
        
      <h2>{counter}</h2>

      <div>
        <button onClick = {sum} >+</button>
        <button onClick = {subtr} >-</button>
      </div>
     
    </div>
  );
}

export default App;
