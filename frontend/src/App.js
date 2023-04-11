
 import axios from 'axios'; 
import './App.css';
import {useEffect,useState} from 'react';
function App() {
 const [announcement,setancment]=useState(null)
  useEffect(()=>{
    axios.get('http://localhost:3000/api/announcements').then((response) => {
      setancment(response.data);
    });
  },[])
  return (
    <div className="App">
    {announcement && announcement.map((announcement)=>(
      <>
        <h1>{announcement.heading}</h1>
      <p>{announcement.description}</p>
      </>
    
))}
    </div>
  );
}

export default App;
 