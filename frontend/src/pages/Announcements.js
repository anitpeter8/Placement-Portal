import axios from 'axios';
import Announcement from '../components/Announcement';
import { useEffect, useState } from 'react';
import NewAnnouncement from '../modals/NewAnnouncement';
const Announcements = () => {
    const [announcements, setancment] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5000/api/announcements').then((response) => {
            setancment(response.data);
        });
    }, [])
    return (
        <>
        <h3>Announcements</h3>
        <NewAnnouncement/>
        {
        announcements && announcements.map((announcement) => (
         <Announcement announcement={announcement} key={announcement._id}/>
        ))
    }
        </>
    )
}

export default Announcements;