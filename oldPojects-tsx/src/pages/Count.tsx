// import { useContext, useState } from "react"
// import { Context } from "../App"


// const Count = () => {
//     // const [count, setcount] = useState<number>(0)
//     const {count, setcount} = useContext(Context);
//     const [num, setnum] = useState<number>(0)
//   return (
//     <div>
//         {/* <h1>{count}</h1> */}
//         <button onClick={()=>setcount(count+1)}>Increment</button>
//         <button onClick={()=>setcount(count-1)}>Decrement</button>
//         <br />
//         <br />
//         <input type="number" value={num} onChange={(e)=>setnum(Number(e.target.value))} />
//         <button
//         onClick={()=>{
//             setcount(count + num);
//             setnum(0);
//         }
//         }>Add</button>
//     </div>
//   )
// }

// export default Count




import { Dispatch, useState } from "react"



const Count = ({setcount,count}:{
    // setcount:React.Dispatch<React.SetStateAction<number>>;
    setcount:Dispatch<number>
    count: number}) => {
    const [num, setnum] = useState<number>(0)
  return (
    <div>
        {/* <h1>{count}</h1> */}
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        <br />
        <br />
        <input type="number" value={num} onChange={(e)=>setnum(Number(e.target.value))} />
        <button
        onClick={()=>{
            setcount(count + num);
            setnum(0);
        }
        }>Add</button>
    </div>
  )
}

export default Count