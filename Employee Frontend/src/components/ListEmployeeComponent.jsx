import React,{useEffect, useState} from 'react'
import { listEmployees,deleteAnEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

const ListEmployeeComponent = () => {

    const [employees,setEmployees]=useState([])

    const navigator=useNavigate();

    useEffect( () => {
        getAllEmployees();
    }, [])

   function getAllEmployees(){
    listEmployees().then((response) => {
            const sortedEmployees = response.data.sort((a, b) => a.id - b.id);
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
   }

    function addAnEmployee(){
        navigator('/create')
    }

    function updateEmployee(id)
    {
        navigator(`/update/${id}`);    // Use the back-tick(tilde operator) symbols to take info from the user 
    }

    function removeEmployee(id)
    {
    if(window.confirm('Are you sure you want to remove the employee with id : '+id)){
        deleteAnEmployee(id).then((response) => {
           getAllEmployees();
           setTimeout(() => {
            alert("Employee with id : "+id+" has been successfully deleted"); 
          }, 100);  
        }).catch(error => {
           console.error(error);
          })
      }  
   }

  return (
    <div className='container'>
        <br/> <br/>
        <h2 className='text-center'><u>Employees Table</u></h2>
        <br/>
        <button className='btn btn-primary' onClick={addAnEmployee}>Add Employee</button>
        <br/> <br/>
        <table className="table table-dark table-hover table-bordered text-center">
            <thead className='table-light'>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Surname</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                { 
                    employees.map(emp => 
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td >
                                <button className='btn btn-info'  onClick={()=>updateEmployee(emp.id)}>Update</button>
                                 <FaTrash  onClick={()=>removeEmployee(emp.id)} style={{color:'red',marginLeft:'15px',cursor:'pointer'}} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
export default ListEmployeeComponent