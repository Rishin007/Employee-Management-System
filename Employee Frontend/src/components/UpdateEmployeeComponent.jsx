import React, { useEffect, useState } from 'react'
import {  getAnEmployee,updateEmployee } from '../services/EmployeeService'
import { useNavigate , useParams} from 'react-router-dom'

const UpdateEmployeeComponent = () => {

const [firstName,setFirstName]=useState('')
  const [lastName, setLastName ]=useState('')
  const [email, setEmail]=useState('')

  const {id}=useParams();
  const navigator = useNavigate();

  useEffect( ()=> {
    if(id){
      getAnEmployee(id).then((response) => {
           setFirstName(response.data.firstName);
           setLastName(response.data.lastName);
           setEmail(response.data.email);
      }).catch( error => {
        console.error(error);
      })
    }
  },[id])

 const [errors,setErros] = useState({
        firstName: '',
        lastName: '',
        email: ''
  })

function savedUpdatedEmployee(e)
  {
    e.preventDefault();

    if(validateForm()){
    const employee={firstName,lastName,email}
    console.log(employee);

    if(id){
      updateEmployee(id,employee).then((response) => {
        console.log(response.data);
        setTimeout(() => {
            alert("Employee with id : "+id+" has been successfully updated"); 
          }, 100); 
        navigator('/employees');
      }).catch(error => {
        console.log(error);
      })
    }
 }
}   // end of savedUpdatedEmployee function

function validateForm(){
    let valid = true;
    const errosCopy= {... errors}

    if(firstName.trim())
    {
      errosCopy.firstName = '';
    }
    else{
      errosCopy.firstName = 'Give a valid First Name!!!';
      valid = false;
    }
    if(lastName.trim())
    {
      errosCopy.lastName = '';
    }
    else{
      errosCopy.lastName = 'Give a valid Last Name!!!';
      valid = false;
    }
    if(email.trim())
    {
      errosCopy.email = '';
    }
    else{
      errosCopy.email = 'Do give a valid E-mail';
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
         <h2 className='text-center' >Update The Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input type='text' placeholder="Enter Employee's updated First Name"
                  name='firstName' value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                  onChange={(e) => setFirstName(e.target.value)}>
                  </input>
                  {errors.firstName && <div className='invalid-feedback' >{ errors.firstName}</div>}
              </div>

               <div className='form-group mb-2'>
                  <label className='form-label'>Surname :</label>
                  <input type='text' placeholder="Enter Employee's updated surname"
                  name='lastName' value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                  onChange={(e) => setLastName(e.target.value)}>
                  </input>
                  {errors.lastName && <div className='invalid-feedback' >{ errors.lastName}</div>}
              </div>

               <div className='form-group mb-2'>
                  <label className='form-label'>Email ID :</label>
                  <input type='email' placeholder="Enter Employee's updated email"
                  name='email' value={email}
                  className={`form-control ${errors.email ? 'is-invalid': ''}`}
                  onChange={(e) => setEmail(e.target.value)}>
                  </input>
                  {errors.email && <div className='invalid-feedback' >{ errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={savedUpdatedEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployeeComponent