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
import { FormEvent, useState } from "react";

interface Person {
  name:string,
  age:number,
}

const App = () => {
  // const [user, setUser] = useState<Person>({
  //   name:'',
  //   age:0
  // })
  const [user, setUser] = useState<Person>()
  function submitHandler(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(user);
    
  }
  return (
    <div>
      <form onSubmit={submitHandler} >
        <input type="number" value={user?.age || ""} onChange={(e) => setUser((prev) =>({...prev!,age:Number(e.target.value)}))} placeholder="Age" /> 

        <input type="text" value={user?.name || ""} onChange={(e) => setUser((prev) =>({...prev!,name:e.target.value}))} placeholder="Name" /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

