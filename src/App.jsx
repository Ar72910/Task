import React, { useState } from 'react'
import Home from './Page/Home'
import Fetchdata from './Page/Fetchdata';
import CreateNew from './Components/CreateNew';

const App = () => {
  const [data,setData] = useState([]);
  return (
    <div className='bg-violet-900 w-full h-full'>
    <div className='m-10 p-6'>
      <CreateNew  data={data} setData={setData} />
      <Fetchdata data={data} setData={setData}/>
      <Home data={data} setData={setData}/>

    </div>
    </div>
  )
}

export default App