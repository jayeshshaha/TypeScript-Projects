// import { Dispatch, SetStateAction, createContext, useState } from "react";
// import Count from "./pages/Count";


// interface ContextType {
//   count: number; 
//   setcount: Dispatch<SetStateAction<number>>
// }

// export const Context = createContext<ContextType> ({count:0,setcount:()=>{}});
// const App = () => {
//   const [count, setcount] = useState<number>(0);
//   return (
//     <div>
//       {count}
//       <Context.Provider value={{count, setcount }}>
//         <Count />
//       </Context.Provider>
//     </div>
//   );
// };

// export default App;




import { useState } from "react";
import Count from "./pages/Count";


const App = () => {
  const [count, setcount] = useState<number>(0);
  return (
    <div>
      {count}
        <Count setcount={setcount} count={count} />
    </div>
  );
};

export default App;

