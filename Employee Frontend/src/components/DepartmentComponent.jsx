import React, { useState } from 'react'
import { createDepartment} from '../services/DepartmentService'
import { useNavigate , useParams} from 'react-router-dom'

const DepartmentComponent = () => {

  const [name,setName]=useState('')
  const [description, setDescription]=useState('')

  const {id}=useParams();
  const [errors,setErros] = useState({
        name: '',
        description: ''   
  })

  const navigator = useNavigate();
  
  function savedDepartment(f)
  {
    f.preventDefault();
    
    if(validateForm())
  {
    const department={name,description}
     createDepartment(department).then((response) => {
      console.log(response.data);
       setTimeout(() => {
            alert("A new Department has been introduced"); 
          }, 100); 
      navigator('/departments');
    }).catch(error => {
        console.log(error);
      })  
  }   
}    // end of saveddepartment()
     


  function validateForm(){
    let valid = true;

    const errosCopy= {... errors}

    if(name.trim())
    {
      errosCopy.name = '';
    }
    else{
      errosCopy.name = 'Please give the Department Name';
      valid = false;
    }

    if(description.trim())
    {
      errosCopy.description = '';
    }
    else{
      errosCopy.description = 'Write a valid Description';
      valid = false;
    }
    setErros(errosCopy);
    return valid;
  }   // end of validateForm()

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center' >Add a Department</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                  <label className='form-label'>Department Name :</label>
                  <input 
                  type='text' placeholder="Enter Department's Name" name='name' 
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid': ''}`}
                  onChange={(e) => setName(e.target.value)}>
                  </input>
                  {errors.name && <div className='invalid-feedback' >{ errors.name}</div>}
              </div>

               <div className='form-group mb-2'>
                  <label className='form-label'>Department Description :</label>
                  <input type='text' placeholder="Enter Department's Description"
                  name='description' value={description}
                  className={`form-control ${errors.description ? 'is-invalid': ''}`}
                  onChange={(e) => setDescription(e.target.value)}>
                  </input>
                  {errors.description && <div className='invalid-feedback' >{ errors.description}</div>}
              </div>
              <button className='btn btn-success' onClick={savedDepartment}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentComponent