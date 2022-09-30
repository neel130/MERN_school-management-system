import React,{useState,useEffect} from 'react'
import StudentsCreate from './StudentsCreate'
import StudentsTable from './StudentsTable'

const Home = () => {
  const [newdata,setNewdata] = useState(null)

  const getdata = (data) =>{
   setNewdata(data)

  }

  return (
    <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between",marginTop:"70px"}} className='home-container' >

        <div style={{width:"60%"}} className="table-container">
         <StudentsTable newdata={newdata} />
        </div>
        <div style={{width:"30%"}} className="input-container">
        <StudentsCreate getdata={getdata} />
        </div>

     

    </div>
  )
}

export default Home