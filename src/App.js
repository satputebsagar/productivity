import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {CreateProject,CreateTask,Navbar,EditTask,TaskList} from "./components"
const App = () => {
  return (
    <BrowserRouter>
          <div className='container container-top'>
            <Navbar/>
            <br/>
          
            <div className='container'>
            <Routes>
              <Route path='/' exact element={<TaskList/>}/>
              <Route path='/edit/:id' element={<EditTask/>}/>
              <Route path="/create" element={<CreateTask/>}/>
              <Route path="/project" element={<CreateProject/>}/>
              </Routes>
            </div>
          </div>
    
    </BrowserRouter>
  )
}

export default App;