import React, { useState } from 'react'



const CreateNew = ({data, setData}) => {
    
    

    const handleSubmit = (e)=>{
        const tasks = {
            description:description,
            title:title
        }
        setData[[...data,tasks]];
        
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log("title: ",title);
    console.log("description: ",description);
  return (
    <div>

<form>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter task title " required  onChange={(e)=>setTitle(e.target.value)}/>
      
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter task description "onChange={(e)=>setDescription(e.target.value)}  />

  </div>
  
  
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "onClick={handleSubmit} >Submit</button>
</form>

    </div>


  )
}

export default CreateNew