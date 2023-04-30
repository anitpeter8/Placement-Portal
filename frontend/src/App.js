import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Jobspage from './pages/Jobspage';
import Students from './pages/Students';
import Statistics from './pages/Statistics';
import Navbar from './components/Navbar';
import Registration from './pages/Registration'
import './App.css';
import Login from './pages/Login';

function App() {

  return (<>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/admin' >
    <Route path='/admin/Announcements' element={<Announcements />} />
        <Route path='/admin/JobAlerts' element={<Jobspage />} />
        <Route path='/admin/Students' element={<Students />} />
        <Route path='/admin/Statistics' element={<Statistics />} />
    </Route>
     
 
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
