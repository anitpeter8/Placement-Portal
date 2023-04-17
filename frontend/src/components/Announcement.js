import EditAnnouncement from "../modals/EditAnnouncement";

const Announcement=({announcement})=>{
  return(
    <div>
    <h1>{announcement.heading}</h1>
    <p>{announcement.description}</p>
    <EditAnnouncement announcement={announcement}/>

    </div>
  )
}
export default Announcement;