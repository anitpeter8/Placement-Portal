import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Announcements from './pages/Announcements';
import './App.css';
function App() {

  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/Announcements' element={<Announcements />}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
 