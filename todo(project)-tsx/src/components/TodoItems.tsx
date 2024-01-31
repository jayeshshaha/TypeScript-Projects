import { Paper, TextField } from "@mui/material";
import { Typography, Checkbox, Button, Stack } from "@mui/material";
import { useState } from "react";
type PropsType = {
  todo: TodoItemType;
  completeHandler:(id:TodoItemType['id'])=>void
  deleteHandler:(id:TodoItemType['id'])=>void
  editHandler:(id:TodoItemType['id'],newtitle:TodoItemType["title"])=>void
};
// onKeyDown={(e)=>{if(e.key === "Enter")}}
const TodoItems = ({ todo,completeHandler,deleteHandler,editHandler}: PropsType) => {
    const [editActive, setEditActive] = useState<boolean>(false)
    const [textVal, setTextVal] = useState<string>(todo.title);
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        {
            editActive ?   <TextField fullWidth label={"Update Task"} value={textVal} onChange={(e)=>setTextVal(e.target.value)} 
            onKeyDown={(e)=>{
                if(e.key === "Enter" && textVal!== ""){
                    editHandler(todo.id,textVal)
                    setEditActive(false);
                    }}} >
                    </TextField> 
            :  <Typography marginRight={"auto"}>{todo.title}</Typography>
        }
        {/* <Typography marginRight={"auto"}>{todo.title}</Typography> */}
        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)} />
        <Button onClick={()=> setEditActive((prev)=>!prev)} >
            {
                editActive ? "Done" : "Edit"
            }
        </Button>
        <Button onClick={()=>deleteHandler(todo.id)}>Delete</Button>
      </Stack>
    </Paper>
  );
};


export default TodoItems;
