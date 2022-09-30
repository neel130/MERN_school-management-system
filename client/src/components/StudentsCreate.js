import React,{useState,useEffect} from 'react'

const StudentsCreate = ({getdata}) => {
      const [name,setName] = useState("");
      const [studentclass,setClass] = useState("");
      const [age,setAge] = useState("");
      const [school,setSchool] = useState("");



       const subData = async (e) =>{
        e.preventDefault();
        console.log(name,studentclass,age,school)
        const response = await fetch('http://localhost:4000/students/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 name,
                 class:studentclass,
                 age,
                 school
               })
            });
            const data = await response.json();
            getdata(data)
            console.log(data);
         
           
       }

      

  return (

    <div>
        <form>
  <div class="mb-3">
    <label  class="form-label">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Class</label>
    <input onChange={(e)=>setClass(e.target.value)} type="text" class="form-control"/>
  </div>

  <div class="mb-3">
    <label  class="form-label">Age</label>
    <input onChange={(e)=>setAge(e.target.value)} type="number" class="form-control"/>
  </div>

  <div class="mb-3">
    <label  class="form-label">School</label>
    <input onChange={(e)=>setSchool(e.target.value)} type="text" class="form-control"/>
  </div>
 
  <button onClick={subData} type="submit" class="btn btn-primary">Create</button>

</form>
    </div>
  )
}

export default StudentsCreate