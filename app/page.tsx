'use client'
import { AddTask } from "@/component/AddTask";
import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NoTask from "@/component/Notask";
import { Task } from "@/component/Task";
import { ITask } from "@/types";
import { Flex } from "@chakra-ui/react";
import axios from "axios";

import { useEffect, useState } from "react";


export default function Home(){
  const [task,setTask] = useState<string>('')
  const [isLoading,setIsLoadng] = useState<boolean>(true)
  const [allTask,setAllTask] = useState([])

  // Create Task
  const handleCreateTask = async()=>{
setIsLoadng(true)
try {
  const response = await axios.post('/api/task/new',{
    task : task
    })

  if(response.status === 201){
setTask('')
getTasklAll()
  }
  else(console.log('error')
  )
} catch (error) {
  console.log(error);
  setIsLoadng(false)
}

  }
// Récuperer les tâches
const getTasklAll = async () =>{

  try {
    const response = await axios.get("/api/task/all")
  // console.log(response.data);
  const data =  response?.data
 setAllTask(data)
  setIsLoadng(false)
  console.log(data);
  console.log(allTask);
  } catch (error) {
    console.log(error)
    
  }
  
  
}

 // Delete a task
 const handleDeletedTask = async(id: string) => {
  try {
    const response = await axios.delete(`/api/task/delete/${id}`)
    if(response.status === 200) {
      setAllTask((prevTasks) => prevTasks.filter((task: ITask) => task._id !== id));
    }
    else {
      console.log('error')
    }
  }
  catch(error) {
    console.log(error)
  }
}

// Complete a task
const handleCompletedTask = async(id: string) => {
  try {
    const response = await axios.patch(`/api/task/complete/${id.toString()}`)
    if (response.status===200) {
      await getTasklAll()
    } else {
      console.log("Error editing task.")
    }
  } catch (error) {
    console.log("Error editing task:", error)
  }
}
  useEffect(()=>{
    // setIsLoadng(true)

getTasklAll()
  },[])

  
 
 
  return (
 <div>
 <Header />
 <AddTask task={task} setTask={setTask} handleCreateTask = {handleCreateTask} />
{isLoading ? <>
<Loading/>
</> : <Flex direction={'column'} p='2rem'>
{allTask?.length > 0 ? allTask.map((taskIndividual:ITask)=><>
{/* <Text >{taskIndividual.task}</Text> */}
<Task taskIndividual={taskIndividual} handleCompletedTask ={handleCompletedTask} handleDeletedTask={handleDeletedTask}  />
</>): <NoTask />}
</Flex>
}
 </div>
  );
}
