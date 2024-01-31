import { AppBar, Button, Container , Stack, Toolbar, Typography} from "@mui/material"
import TodoItems from "./components/TodoItems"
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import { getTodos, saveTods } from "./utils/features";
// import Button from '@mui/material/Button';

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos())
//   const [todos, setTodos] = useState<TodoItemType[]>([
//     // { id: '1', title: 'Todo 1', isCompleted: false },
//     // { id: '2', title: 'Todo 2', isCompleted: true },
// ]);
 const [title, settitle] = useState<TodoItemType['title']>("");


   
 const addTodo = ():void =>{

    const newTodo : TodoItemType = {
      title,
      id:String(Math.random() * 1000),  
      isCompleted:false
    }
    setTodos((prev)=>[...prev,newTodo])
    settitle("");
 }

  const completeHandler = (id:TodoItemType['id']):void =>{
     const newTodo : TodoItemType[] = todos.map((i)=>{
        if(i.id === id){
          i.isCompleted = !i.isCompleted
          return i
        }
        return i;
      })
      setTodos(newTodo) 
      
  }
  
  const deleteHandler = (id:TodoItemType['id']):void =>{
    const dt:TodoItemType[] = todos.filter((i)=>(i.id !== id))
    setTodos(dt);
   
  }

  const editHandler = (id:TodoItemType['id'],newtitle:TodoItemType["title"]):void =>{
    const newTodo : TodoItemType[] = todos.map((i)=>{
      if(i.id === id){
        i.title = newtitle
        return i
      }
      return i;
    })
    setTodos(newTodo) 

  }

  useEffect(() => {
    saveTods(todos)  
  }, [todos])
  


  return (
    <Container maxWidth="sm" sx={{height:'100vh'}}>
      <AppBar position="static" >
        <Toolbar>
          <Typography>Todo App</Typography>

        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={'column'} spacing={'1rem'} p={'1rem'} >
      {
        todos.map((i)=>(
          <TodoItems 
          completeHandler={completeHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          key={i.id} 
          todo={i}/>
        ))
      }
      <TextField fullWidth label={"New Task"} value={title} onChange={(e)=>settitle(e.target.value)}
      onKeyDown={(e)=>{
        if(e.key === "Enter" && title !== ""){addTodo()}
      }}
       />
      <Button sx={{
        margin:'1rem 0'
      }} fullWidth variant="outlined" onClick={addTodo} disabled={title === ""} >ADD</Button>
      </Stack>
    </Container>
  )
}

export default App