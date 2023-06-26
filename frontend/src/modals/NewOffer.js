import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './NewAnnouncement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jobscontext } from '../context/Jobscontext';
import { UserAuth } from '../context/authcontext';

function NewOffer({ onclose, NewOffermodal }) {

    const authcontext = useContext(UserAuth);
    if (!authcontext) {
        console.log("cannot ascess outside the provider");
    }
    const { user } = authcontext;

    const context = useContext(Jobscontext);
    const { dispatch } = context;
     const [companyname, setcompanyname] = useState();
     const [year, setyear] = useState()
     const [CSE, setCSE] = useState()
     const [AI, setAI] = useState()
     const [MECH, setMECH] = useState()
     const [CIVIL, setCIVIL] = useState()
     const [EEE, setEEE] = useState()
     const [ECE, setECE] = useState()

     const [LPA, setLPA] = useState()

    


    const handlesubmit = (e) => {

        e.preventDefault();
        onclose()
        axios.post("http://localhost:9000/api/statistics",{year,companyname,CSE,AI,CIVIL,MECH,EEE,ECE,total:parseInt(CSE)+parseInt(AI)+parseInt(CIVIL)+parseInt(MECH)+parseInt(EEE)+parseInt(ECE),LPA}).then((res)=>{
            console.log(res.data);
        }).catch((errror)=>{
            console.log(errror);
        })

      
        // axios.post("http://localhost:9000/api/announcements", announcement,
        //     { headers: {LPA 'Authorization': `Bearer ${user.token}` } }).then((response) => {
        //         console.log(response.data);
        //         dispatch({ type: 'CREATEANNOUNCEMENT', payload: response.data });

        //         console.log('vishayam')
        //         setHeading('');
        //         setDescription('');
        //     }).catch()
    }

    if (NewOffermodal) {
        return (
            <>
                <div className='announcementedit-modal-container' >
                    <div className='announcementedit-modal-content' >
                        <button className='modal-close-btn' onClick={onclose} ><p>X</p></button>
                        <div className='announcementedit-modal-title'>
                            <h3>Add an offer</h3>
                            <hr></hr>
                        </div>
                        <div className='announcementedit-modal-body'>
                            <form onSubmit={handlesubmit} className="announcement-form">
                                <div className='title'>

                                    <div className='title-label'>
                                        <label>Recruiter:</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='text' value={companyname} onChange={(e) =>
                                            setcompanyname(e.target.value)
                                        } />
                                    </div>

                                    <div className='title-label'>
                                        <label>Year of offer :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={year} onChange={(e) =>
                                            setyear(e.target.value)
                                        } />
                                    </div>

                                    <div className='title-label'>
                                        <label>Package(in LPA):</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={LPA} onChange={(e) =>
                                            setLPA(e.target.value)
                                        } />
                                    </div>


                                    <div className='title-label'>
                                        <label>CSE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={CSE} onChange={(e) =>
                                            setCSE(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>AI :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={AI} onChange={(e) =>
                                            setAI(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>MECH :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={MECH} onChange={(e) =>
                                            setMECH(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>EEE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={EEE} onChange={(e) =>
                                            setEEE(e.target.value)
                                        } />
                                    </div>
                                    <div className='title-label'>
                                        <label>ECE :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={ECE} onChange={(e) =>
                                            setECE(e.target.value)
                                        } />
                                    </div>

                                    <div className='title-label'>
                                        <label>CIVIL :</label>
                                    </div>
                                    <div className='textbox'>
                                        <input className='text1' type='number' value={CIVIL} onChange={(e) =>
                                            setCIVIL(e.target.value)
                                        } />
                                    </div>

                                </div>

                                <div className='sub'>
                                    <Button className='sub-but' type='submit' >Submit</Button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>


            </>
        );
    }
}
export default NewOffer;