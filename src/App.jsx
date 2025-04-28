import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Task from './Components/Task';
import Support from './Components/Support';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Settings from './Components/Settings';
import Reports from './Components/Reports';
import Teams from './Components/Teams';
import TaskAssingned from './Components/TaskAssigned';
import Logout from './Components/Logout';
import Homepage from './Components/Homepage';
import User from './Components/User';
import Admin from './Components/Admin';
import Manager from './Components/Manager';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/task' element={<Task />}></Route>
          <Route path='/support' element={<Support />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          <Route path='/TA' element={<TaskAssingned />}></Route>
          <Route path='/logout' element={<Logout />}></Route>

          <Route path='/user' element={<User />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/manager' element={<Manager />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
