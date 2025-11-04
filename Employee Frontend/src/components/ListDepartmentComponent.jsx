import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { deleteDepartment, listDepartments } from '../services/DepartmentService';
import { useState } from 'react';


const ListDepartmentComponent = () => {
    
const [departments,setDepartments]=useState([])

const navigator=useNavigate();

    useEffect( () => {
        getAllDepartments();
    }, [])

function getAllDepartments(){
    listDepartments().then((response) => {
            const sortedDepartments = response.data.sort((a, b) => a.id - b.id);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
   }
    
    function addDepartment(){
        navigator('/created')
    }

    function updateDepartment(id)
    {
        navigator(`/updated/${id}`);     
    }

 function removeDepartment(id)
    {
       if(window.confirm('Are you sure you want to delete the department with id : '+id)){
        deleteDepartment(id).then((response) => {
            setTimeout(() => {
               alert("Department with id : "+id+" has been successfully deleted"); 
             }, 100);
            getAllDepartments();   
           }).catch(error => {
              console.error(error);
            })
         }  
    }


  return (
    <div className='container'>
            <br/> <br/>
            <h2 className='text-center'><u>Departments Table</u></h2>
            <br/>
            <button className='btn btn-primary' onClick={addDepartment}>Add Department</button>
            <br/> <br/>
            <table className="table table-dark table-hover table-bordered text-center">
                <thead className='table-light'>
                <tr>
                    <th>Department No.</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody >
                    { 
                        departments.map(dept => 
                            <tr key={dept.id}>
                                <td>{dept.id}</td>
                                <td>{dept.name}</td>
                                <td>{dept.description}</td>
                                <td>
                                    <button className='btn btn-info me-3'  onClick={()=>updateDepartment(dept.id)}>Update</button>
                                    
                                    <button className='btn btn-danger'  onClick={()=>removeDepartment(dept.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      )
  
}

export default ListDepartmentComponent