import React from 'react'
import Fetchdata from './Fetchdata'

const Home = ({data,setData}) => {
  console.log("data in Home: ",data);
  
  return (
    

    <div className=' flex gap-6 justify-center items-center'>

      <div className='bg-violet-900 h-[1790px] w-[400px] border-2 border-sky-500'>
        <div className='flex flex-col items-center'>

        <div className='font-bold text-4xl color-white text-slate-100 pt-3 '>{data[0]?.title}</div>

        {/* box title and des */}
{
  
            data[0]?.tasks.map((val,i)=>(
              <div className='bg-violet-600 h-100 w-[350px] p-2 mt-[65px] rounded-lg   m-2'>
              <div className='text-slate-100'>
                
               <div>{val.title}</div>
               <div className='text-slate-100 mt-2'>
                  {val.description}
            </div>
              </div>
              </div>

            ))
            }
            
            


      

        </div>

      </div>

      <div className='bg-violet-900 h-full w-[400px] border-2 border-sky-500'>
        <div className='flex flex-col items-center'>

        <div className='font-bold text-4xl color-white text-slate-100 pt-3 '>{data[1]?.title}</div>

        {/* box title and des */}
{
  
            data[1]?.tasks.map((val,i)=>(
              <div className='bg-violet-600 h-100 w-[350px] p-2 mt-[65px] rounded-lg   m-2'>
              <div className='text-slate-100'>
                
               <div>{val.title}</div>
               <div className='text-slate-100 mt-2'>
                  {val.description}
            </div>
              </div>
              </div>

            ))
            }
            
            


      

        </div>

      </div>

      
      <div className='bg-violet-900 h-[1790px] w-[400px] border-2 border-sky-500'>
        <div className='flex flex-col items-center'>

        <div className='font-bold text-4xl color-white text-slate-100 pt-3 '>{data[2]?.title}</div>

        {/* box title and des */}
{
  
            data[2]?.tasks.map((val,i)=>(
              <div className='bg-violet-600 h-full w-[350px] p-2 mt-[65px] rounded-lg   m-2'>
              <div className='text-slate-100'>
                
               <div>{val.title}</div>
               <div className='text-slate-100 mt-2'>
                  {val.description}
            </div>
              </div>
              </div>

            ))
            }
            
            


      

        </div>

      </div>

   
    </div>
  )
}

export default Home