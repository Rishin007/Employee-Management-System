import './App.css'
import Image from './components/Image.jsx';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent.jsx';
import DepartmentComponent from './components/DepartmentComponent.jsx';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import ListDepartmentComponent from './components/ListDepartmentComponent.jsx';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent.jsx';
import UpdateDepartmentComponent from './components/UpdateDepartmentComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

function App() {
return (
  <> 
    {/* <BrowserRouter>
      <HeaderComponent/>
         <Routes> */}
            {/* http://localhost:5500 */ }
            {/* <Route path='/' element={<ListEmployeeComponent/>}></Route> */}
            {/* http://localhost:5500/employees */}
            {/* <Route path='/employees' element={ <ListEmployeeComponent/>}></Route> */}
            {/* http://localhost:5500/create */}
            {/* <Route path='/create' element={ <EmployeeComponent/> }></Route> */}
             {/* http://localhost:5500/update/{id} */}
            {/* <Route path='/update/:id' element={ <UpdateEmployeeComponent/> }></Route> */}
         {/* </Routes>
       <FooterComponent/>
    </BrowserRouter> */}

<div className="page-wrapper">

    <BrowserRouter>
    <nav class="navbar navbar-expand-lg " style={{backgroundColor:'black'}}>
  < div class="container-fluid">
    <Link class="navbar-brand" style={{color:'white'}} to='/employee_image'>
      Employee Management System</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" style={{color:'white'}} to='/employees'>Employees</Link>
        <Link class="nav-link" style={{color:'white'}} to='/departments'>Departments</Link> 
      </div>
    </div>
  </div>
</nav>

<div className='main-content'>
  <Routes>
    <Route path='/employee_image' element={<Image/>}></Route>
    <Route path='/employees' element={<ListEmployeeComponent/>}/>
    <Route path='/departments' element={<ListDepartmentComponent/>}/>
     {/* http://localhost:5000/create */}
    <Route path='/create' element={ <EmployeeComponent/> }/>
    {/* http://localhost:5000/created */}
    <Route path='/created' element={ <DepartmentComponent/> }/>
    {/* http://localhost:5000/update/{id} */}
    <Route path='/update/:id' element={ <UpdateEmployeeComponent/> }/>
    {/* http://localhost:5000/updated/{id} */}
    <Route path='/updated/:id' element={ <UpdateDepartmentComponent/> }/>
  </Routes>
  </div>
   <FooterComponent/>
</BrowserRouter>
</div>
  </>
)}

export default App;