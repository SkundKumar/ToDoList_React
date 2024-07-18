
import './App.css'
import {useState,useEffect} from 'react'
import {motion} from 'framer-motion'

export default function App() {
  const [note, setNote] = useState("")
  const [todo, setTodo] = useState([])
  
  
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
  const arrow = '>'
  return (
    
      <div className='bg-zinc-800 min-h-screen min-w-screen font-mono flex justify-center items-center'>
        <div>
        <h1 className=' flex justify-center text-red-100 text-[8vw] mb-[1vh] '>ToDo List</h1>
        <input onChange={handleChange}  className='text-zinc-200 px-2 w-[50vw] flex bg-zinc-800 border-double border-4 border-red-300  h-15 rounded-xl' placeholder='  Write new task.....' type="text" />
        <motion.button whileHover={{scale:0.98}}
                      whileTap={{scale: 2}} onClick={handleClick} className=' bg-red-300/90 text-zinc-800 font-semibold w-full h-12 rounded-xl mt-[2vh]' type="button">Submit</motion.button>
        <ul className='mt-5'>
          {todo.map((item,index)=>{
           return <li  key={index} className='bg-red-200 w-fit text-zinc-800 m-2 p-1.5 font-semibold rounded-lg'> {arrow} {item}</li>
          })}
          
        </ul>
        </div>
      </div>
     
      
      
    
    
    
  )
}