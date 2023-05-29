import axios from 'axios';
import Announcement from '../../components/Announcement';
import { useEffect, useContext } from 'react';
import NewAnnouncement from '../../modals/NewAnnouncement';
import '../../css/Announcements.css';
import { useState } from 'react';
import { Jobscontext } from "../../context/Jobscontext";
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
const Announcements = () => {
  
     
  const context=useContext(Jobscontext);
  const {announcements}=context;
  const [NewAnnouncementmodal,setNewAnnouncementmodal]=useState(false);
  
  return (
    <div className="anctmain">
      <div  className="head-container">
        <h1 className="head1">ANNOUNCEMENTS</h1>
         <div className="new-announcement-btn">
         <Button variant="primary" 
         style={{ backgroundColor: '#ffa8a2', height: '45px', color: '#660a0a' }}
          onClick={()=>setNewAnnouncementmodal(true)}>
        + New Announcement
      </Button>
        <NewAnnouncement onclose={()=>setNewAnnouncementmodal(false)} NewAnnouncementmodal={NewAnnouncementmodal}/>
        </div>
      </div>
      <div className="content">
        {announcements && (
          <div className="row row-cols-2">
            {announcements.map((announcement) => (
              <div className="col" key={announcement._id}>
                <Announcement announcement={announcement} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Announcements;