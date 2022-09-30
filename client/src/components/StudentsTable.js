import React,{useState,useEffect} from 'react'

const StudentsTable = ({newdata}) => {
   const [data,setData] = useState([])

   useEffect(()=>{
    const fetchStudentData = async ()=>{

       const response = await fetch('http://localhost:4000/students');
                 const data = await response.json();
                 setData(data)
                 console.log( data);
    }
   fetchStudentData();

   },[newdata])

   console.log(data.length)
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Age</th>
      <th scope="col">School</th>
    </tr>
  </thead>

  <tbody>

    {
      data.map((elem)=>{
        return(
          
           <tr>
      
      <td>{elem.name}</td>
      <td>{elem.class}</td>
      <td>{elem.age}</td>
      <td>{elem.school}</td>
    </tr>
          
        )
      })
    }

   
  
  </tbody>
</table>

    </div>
  )
}

export default StudentsTable