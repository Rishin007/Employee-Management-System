import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='heading'>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
               <a className='navbar-brand styling' href='#'>Employee Management System</a>
               {/* <a className='nav-link' href='src\components\ListEmployeeComponent.jsx'>Employees</a>
               <a className='nav-link' href='#'>Department</a> */}
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent