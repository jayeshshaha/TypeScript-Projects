// import { ReactNode } from "react"

// type PropsType = {
//     heading:string,
//     count?:number,
//     children:ReactNode

// }
// const Box = ({heading,count,children}:PropsType) => {
//   return (
//     <div>
//         <h1>{heading}</h1>
//         {
//             count && <p>{count}</p>
//         }
//         {children}
//     </div>
//   )
// }

// export default Box

// // !Eg2
// type InputValType  = string | number;
// const Box = <T extends InputValType>({label,value,onChange}: {
//   label: string;
//   value: T;
//   onChange: () => void;
// }) => {
//   return <form>
//     <label >{label}</label>
//     <input type="text" value={value} onChange={onChange}/>
//     </form>
// };

// export default Box;

// !React Hooks 
import  { Dispatch, SetStateAction } from "react";

type InputValType  = string | number;
const Box = <T extends InputValType>({label,value,setter}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>,
}) => {
  return <form>
    <label >{label}</label>
    <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)}/>
    </form>
};

export default Box;