
import './App.css'
import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'

export default function App() {
  const [note, setNote] = useState("")
  const [todo, setTodo] = useState([])
  const [slash,setSlash] = useState(false)
  
  const handleChange = (event)=>{
    const newNote = event.target.value
    setNote(newNote)
    
  }
  const handleClick = ()=>{ 
   setTodo((prvTodo)=>{
    const updatedTodo = [...prvTodo, note]
    localStorage.setItem('todoList',JSON.stringify(updatedTodo))
    return updatedTodo
   })
   setNote("")
  }
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || []
    setTodo(storedTodoList)
  }, [])

  

  const deleteItem = (index) => { // Changed deleteItem function to accept index parameter
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1); // Removed item at the given index
    setTodo(updatedTodo);
    localStorage.setItem('todoList', JSON.stringify(updatedTodo));
  };
  const arrow = '>'
  return (
      
      <div className=' bg-zinc-800 font-body bg-zinc-900 min-h-screen min-w-screen flex justify-center items-center  text-emerald-500 '>
        <div>
        <h1 className=' flex justify-center text-[8vw] mb-[1vh]  '>ToDo List</h1>
        <input onChange={handleChange}  className='text-emerald-500 px-2 w-[50vw] flex bg-zinc-900 border-double border-4 border-emerald-400  h-15 rounded-xl' placeholder=' Write new task.....' type="text" />
        <motion.button whileHover={{scale:0.98}}
                      whileTap={{scale: 1}} onClick={handleClick} className=' border-dotted border-2 border-emerald-500  font-semibold w-full h-12 rounded-xl mt-[2vh]' type="button">Submit</motion.button>
        <ul  className='mt-5'>
          {todo.map((item,index)=>(
           <li onClick={deleteItem} key={index} id={index} className=' border-dotted border-2 border-emerald-400 w-fit  m-2 p-1.5 font-semibold rounded-lg'> {arrow} {item}</li>
          ))}
          
        </ul>
        </div>
      </div>
     
      
      
    
    
    
  )
}