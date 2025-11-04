import React,{useState,useEffect} from 'react'
import { getDepartment,updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams} from 'react-router-dom'

const UpdateDepartmentComponent = () => {

const [name,setName]=useState('')
const [description, setDescription ]=useState('')

  const {id}=useParams();
  const navigator = useNavigate();


useEffect( ()=> {
    if(id){
      getDepartment(id).then((response) => {
           setName(response.data.name);
           setDescription(response.data.description);
      }).catch( error => {
        console.error(error);
      })
    }
  },[id])

 const [errors,setErros] = useState({
        name: '',
        description: ''
  })

function savedUpdatedDepartment(e)
  {
    e.preventDefault();

    if(validateForm()){
    const department={name,description}

    if(id){
      updateDepartment(id,department).then((response) => {
        console.log(response.data);
         setTimeout(() => {
            alert("Department with id : "+id+" has been successfully updated"); 
          }, 100); 
        navigator('/departments');
      }).catch(error => {
        console.log(error);
      })
    }
 }
}   // end of savedUpdatedEmployee function

function validateForm(){
    let valid = true;
    const errosCopy= {... errors}

    if(name.trim())
    {
      errosCopy.name = '';
    }
    else{
      errosCopy.name = 'Proper Department Name is required....';
      valid = false;
    }

    if(description.trim())
    {
      errosCopy.description = '';
    }
    else{
      errosCopy.description = 'Provide a certain description about your Department..';
      valid = false;
    }
    setErros(errosCopy);
    return valid;
  }

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
         <h2 className='text-center'>Update The Department</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                  <label className='form-label'>Department Name :</label>
                  <input type='text' placeholder="Enter Department's updated Name"
                  name='name' value={name}
                  className={`form-control ${errors.name ? 'is-invalid': ''}`}
                  onChange={(e) => setName(e.target.value)}>
                  </input>
                  {errors.name && <div className='invalid-feedback' >{ errors.name}</div>}
              </div>
               <div className='form-group mb-2'>
                  <label className='form-label'>Department Description :</label>
                  <input type='text' placeholder="Enter Updated Description"
                  name='description' value={description}
                  className={`form-control ${errors.description ? 'is-invalid': ''}`}
                  onChange={(e) => setDescription(e.target.value)}>
                  </input>
                  {errors.description && <div className='invalid-feedback' >{ errors.description}</div>}
              </div>
              <button className='btn btn-success' onClick={savedUpdatedDepartment}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateDepartmentComponent