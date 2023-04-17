import '../css/Registration.css'

import sideimage from './sideimage.jpg'
import 'bootstrap/dist/css/bootstrap.css';

const Registration = () => {
    return (
        <div className='container '>
        <div className='container p-5 d-flex justify-content-center align-items-center white'>
            <div className=' shadow row col-12 rounded '>
                <div className='col-5 nopadding'>
                    <img className='img-fluid h-100 rounded-2"' src={sideimage} alt='notfound' />
                </div>
                <div className='col-7 p-4 white brown'>
                    <h2>Register </h2>
                    <p className='lead'>Enter your details</p>
                    <form >
                        <div class="mb-3 col-7">
                            <label class="form-label">Email:</label>
                            <input type="email" class="inp form-control" />
                        </div>
                        <div class="mb-3 col-7">
                            <label class="form-label">Name:</label>
                            <input type="text" class="inp form-control" />
                        </div>
                        <div class="mb-3 col-7 display-flex rounded">
                            <label class="form-label">Student id:</label>
                            <input type="text" class="inp form-control" />
                        </div>
                        <div class="mb-3 col-7">
                        <label class="form-label">Branch</label>
                        <select class="form-select inp">
                            <option selected>Branch</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Mechanical</option>
                            <option value="3">Electronics</option>
                        </select>
                        </div>
                        <div class="mb-3 col-7 ">
                            <label class="form-label ">CGPA</label>
                            <input type="number" class="form-control inp" />
                        </div>
                       <button class="btn px-3 mt-3">Submit</button>
                    </form>
                </div>
            </div>
            </div>
            </div>
       
    )
}
export default Registration;