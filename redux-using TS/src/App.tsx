// import { useState } from "react";
// import {  useDispatch, useSelector } from "react-redux";
// import { StateType, decrement, increment,  } from "./redux/countReducer";

// const App = () => {
//   const [val, setval] = useState<number>(0)
//   const dispatch =  useDispatch();
//   const count = useSelector((state: StateType) => state.count);
  


// //  function incrementByValueHandler(){
// //   dispatch(incrementByValue(val));
// //  }


//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={()=>dispatch(increment())} >+</button>
//       <button onClick={()=>dispatch(decrement())}>-</button>
//       <input type="number" value={val} onChange={(e)=>setval(Number(e.target.value))}/>
//       {/* <button onClick={incrementByValueHandler} disabled={val < 0} >Add</button> */}
//     </div>
//   )
// }

// export default App




// ---- using createReducer

import {  useDispatch, useSelector } from "react-redux";
import { StateType  } from "./redux/countReducer";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState<number>(0)

  const dispatch =  useDispatch();
  const {count} = useSelector((state: StateType) => state.counter);
  // const count = useSelector((state: StateType) => state.count);

  function incrementHandler(){
      dispatch({
        type:"increment"
      })
  }

  function decrementHandler(){
    dispatch({
      type:"decrement"
    })
  }
  function incrementByValueHandler(){
    dispatch({
      type:"incrementByValue",
      payload:val
    })
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incrementHandler} >+</button>
      <button onClick={decrementHandler}>-</button>
      <input type="number" value={val} onChange={(e)=>setval(Number(e.target.value))}/>
      <button onClick={incrementByValueHandler} disabled={val < 0} >Add</button>
    </div>
  )
}

export default App
