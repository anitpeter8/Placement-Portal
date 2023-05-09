import axios from 'axios';
import Announcement from '../../components/StdtAnnouncement';
import { useEffect, useState } from 'react';
import '../../css/Announcements.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
const Announcements = () => {
  const [announcements, setancment] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:9000/api/announcements').then((response) => {
      setancment(response.data);
    });
  }, [])
  return (
    <div className="anctmain">
      <div  className="head-container">
        <h1 className="head1">ANNOUNCEMENTS</h1>
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
  )
}

export default Announcements;