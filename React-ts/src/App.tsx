// import Box from "./components/Box"


// const App = () => {
//   return (
//     <div><Box heading="hellow" count={12} >{"wow"}</Box></div>
//   )
// }

// export default App

// Eg2
// import Box from "./components/Box";

// const App = () => {
//   return (
//     <div>
//       <Box label="Search" value={""} onChange={() => {}}></Box>
//     </div>
//   );
// };

// export default App;

// !React Hooks - useState
// import { useState } from "react";
// import Box from "./components/Box";

// const App = () => {
//   const [val, setval] = useState<string>("")
//   return (
//     <div>
//       <Box label="Search" value={val} setter={setval}></Box>
//     </div>
//   );
// };

// export default App;

// Eg2
// import { FormEvent, useState } from "react";

// interface Person {
//   name:string,
//   age:number,
// }

// const App = () => {
//   // const [user, setUser] = useState<Person>({
//   //   name:'',
//   //   age:0
//   // })
//   const [user, setUser] = useState<Person>()
//   function submitHandler(e:FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     console.log(user);

//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler} >
//         <input type="number" value={user?.age || ""} onChange={(e) => setUser((prev) =>({...prev!,age:Number(e.target.value)}))} placeholder="Age" />

//         <input type="text" value={user?.name || ""} onChange={(e) => setUser((prev) =>({...prev!,name:e.target.value}))} placeholder="Name" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// !React Hooks - useContext
// import { ReactNode, createContext, useState } from "react";
// import Box2 from "./components/Box2";

// type ThemeType = "light" | "dark";
// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// const ThemeProvider = ({children}:{children:ReactNode})=>{
//   const [theme, setTheme] = useState<ThemeType>("light");
//   const toggleTheme = ()=>{
//     setTheme((prev)=> prev === "light" ? 'dark' : 'light')
//   }
//   return (
//   <ThemeContext.Provider value={{theme,toggleTheme}}>
//     {children}
//   </ThemeContext.Provider>)
// }

// const App = () => {
//   return(
//     <ThemeProvider>
//       <Box2/>
//     </ThemeProvider>)
// };

// export default App;

// ! Reducer
import React, { useReducer } from 'react';

type StateType = {
  count:number
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count:0
};

const reducer = (state: StateType, action: ActionType) : StateType=> {
  switch (action.type) {
    case "Increment":
      return {
        count:state.count + action.payload
      };
    case "Decrement":
        return {
            count:state.count - action.payload
        };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  
  function Increment():void {
    dispatch({
        type:"Increment",
        payload:1
    })
  }
  function Decrement():void {
    dispatch({
        type:"Decrement",
        payload:1
    })
  }

  return <div>
    <h1>Count Change</h1>
    <p>Count:{state.count}</p>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>

  </div>;
};

export default App;
