import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Jobspage from './pages/Jobspage';
import Students from './pages/Students';
import Statistics from './pages/Statistics';
import Navbar from './components/Navbar';

import './App.css';

function App() {

  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Announcements' element={<Announcements />} />
        <Route path='/JobAlerts' element={<Jobspage />} />
        <Route path='/Students' element={<Students />} />
        <Route path='/Statistics' element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
