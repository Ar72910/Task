import axios from 'axios'
import { log } from 'console';
import React, { useEffect, useState } from 'react'
import Home from './Home';

const Fetchdata = ({data,setData}) => {
    // const [data,setData] = useState([]);
  return (
    
    

    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/fdbea412-6c46-4918-958f-aba8b0f994fd`).then((res) => {
            console.log("response: ",res.data);
            
            setData(res.data);
        })
            
            

        
      },[])
      
   

      
    
  )
 
}

export default Fetchdata