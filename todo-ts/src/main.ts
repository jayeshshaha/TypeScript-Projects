import './style.css'

interface Todo{
  title:string;
  isCompleted:boolean;
  readonly id: string;
}

const todos:Todo[] = [];

const todosContainer = document.querySelector(".todo-container") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm =  document.getElementById('myForm') as HTMLFormElement;

myForm.onsubmit = (e)=>{
  e.preventDefault();
  const todo:Todo = {
    title:todoInput.value,
    isCompleted:false,
    id:String(Math.random() * 1000)
  }
  todos.push(todo)
  todoInput.value = "";
  // console.log(todos);
  renderTodo(todos)
  
  
}

function renderTodo(todos:Todo[]) {
  todosContainer.innerText = '';
  todos.forEach((i)=>{
    generateTodoItem(i.title,i.isCompleted,i.id)
  })
}

function deleteTodo(id:string) {
  const idx = todos.findIndex((i)=>i.id === id)
  todos.splice(idx,1);
  renderTodo(todos);
}

function generateTodoItem(title:string,isCompleted:boolean,id:string) {

  // Creating 
  const todo : HTMLDivElement = document.createElement("div")
  todo.className = "todo"

  const checkBox : HTMLInputElement = document.createElement("input")
  checkBox.setAttribute("type","checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    // console.log(isCompleted);
    // console.log(checkBox.checked);
    todos.find((i)=>{
      if(i.id === id){
        i.isCompleted = checkBox.checked 
      }
    })
    paragraph.className = checkBox.checked? 'textCut' : '';
  }

  const paragraph : HTMLParagraphElement = document.createElement("p")
  paragraph.innerText = title;
  paragraph.className = isCompleted? 'textCut' : '';
  
  const btn : HTMLButtonElement = document.createElement("button")
  btn.innerText = "X";
  btn.className = 'deleteBtn'
  btn.onclick = () =>{
    deleteTodo(id)
  }
  
  // Appending
  todo.append(checkBox,paragraph,btn);
  todosContainer.append(todo)

}