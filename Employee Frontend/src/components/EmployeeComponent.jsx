import React, { useState } from 'react'
import { createEmployee} from '../services/EmployeeService'
import { useNavigate , useParams} from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName,setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email, setEmail]=useState('')

  const {id}=useParams();
  const [errors,setErros] = useState({
        firstName: '',
        lastName: '',
        email: ''
  })

  const navigator = useNavigate();
  
  function savedEmployee(e)
  {
    e.preventDefault();
    
    if(validateForm())
  {
    const employee={firstName,lastName,email}
    console.log(employee);
     createEmployee(employee).then((response) => {
      console.log(response.data);
       setTimeout(() => {
            alert("A new Employee has been successfully added"); 
          }, 100); 
      navigator('/employees');
    }).catch(error => {
        console.log(error);
      })  
  }   
}    // end of savedEmployee()
     


  function validateForm(){
    let valid = true;

    const errosCopy= {... errors}

    if(firstName.trim())
    {
      errosCopy.firstName = '';
    }
    else{
      errosCopy.firstName = 'Please mention the First Name';
      valid = false;
    }

    if(lastName.trim())
    {
      errosCopy.lastName = '';
    }
    else{
      errosCopy.lastName = 'Please mention the Last Name';
      valid = false;
    }

    if(email.trim())
    {
      errosCopy.email = '';
    }
    else{
      errosCopy.email = 'Write a valid Email Please';
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
          <h2 className='text-center' >Add an Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input 
                  type='text' 
                  placeholder="Enter Employee's First Name"
                  name='firstName' 
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                  onChange={(e) => setFirstName(e.target.value)}>
                  </input>
                  {errors.firstName && <div className='invalid-feedback' >{ errors.firstName}</div>}
              </div>

               <div className='form-group mb-2'>
                  <label className='form-label'>Surname :</label>
                  <input type='text' placeholder="Enter Employee's Surname"
                  name='lastName' value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                  onChange={(e) => setLastName(e.target.value)}>
                  </input>
                  {errors.lastName && <div className='invalid-feedback' >{ errors.lastName}</div>}
              </div>

               <div className='form-group mb-2'>
                  <label className='form-label'>Email ID :</label>
                  <input type='email' placeholder="Enter Employee's valid Email"
                  name='email' value={email}
                  className={`form-control ${errors.email ? 'is-invalid': ''}`}
                  onChange={(e) => setEmail(e.target.value)}>
                  </input>
                  {errors.email && <div className='invalid-feedback' >{ errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={savedEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent