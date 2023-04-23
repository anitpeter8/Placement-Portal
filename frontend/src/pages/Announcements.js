// import axios from 'axios';
// import Announcement from '../components/Announcement';
// import { useEffect, useState } from 'react';
// import NewAnnouncement from '../modals/NewAnnouncement';
// const Announcements = () => {
//     const [announcements, setancment] = useState(null)
//     useEffect(() => {
//         axios.get('http://localhost:5000/api/announcements').then((response) => {
//             setancment(response.data);
//         });
//     }, [])
//     return (
//         <>
//         <h3>Announcements</h3>
//         <NewAnnouncement/>
//         {
//         announcements && announcements.map((announcement) => (
//          <Announcement announcement={announcement} key={announcement._id}/>
//         ))
//     }
//         </>
//     )
// }

// export default Announcements;
import React, { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

const Announcements = () => {
  const a=[]
  //
  const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
    a.push(val);
    console.log(a);
  }

  const  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]

  return(
    <div className="app">
      <div  className="preview-values">
        <h4>Values</h4>
        {value}
      </div>

      <MultiSelect
        onChange={handleOnchange}
        options={options}
      />
    </div>
)}
export  default Announcements