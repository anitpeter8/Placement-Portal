import axios from 'axios';
import Announcement from '../components/Announcement';
import { useEffect, useState } from 'react';
import NewAnnouncement from '../modals/NewAnnouncement';
import '../css/Announcements.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
const Announcements = () => {
  const [announcements, setancment] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:5000/api/announcements').then((response) => {
      setancment(response.data);
    });
  }, [])
  return (
    <>
      <div id="head-container" className="d-flex justify-content-between">
        <h1 id="heading">ANNOUNCEMENTS</h1>
        <NewAnnouncement />
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
    </>
  )
}

export default Announcements;