import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Announcements from './pages/Announcements';
import './App.css';
import Jobs from './pages/Jobspage';
function App() {

  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/Announcements' element={<Announcements />}/>
      <Route path='/Jobs' element={<Jobs />}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
 