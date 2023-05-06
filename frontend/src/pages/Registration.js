import "../css/Registration.css";

const Registration = () => {
  return (
    <>
    <div className="registration">
    <div className="reg-box">
    <div className="head">
      <h2>Student Registration</h2>
    </div>
      <div className="reg-form">
        <form>
          <div className="input-group">
            <div className="input-field">
              <label for="fname">Full Name :</label>
              <input type="text" name="fname" placeholder=""></input>
            </div>
            <div className="input-field">
              <label for="sid">Student ID :</label>
              <input type="text" name="sid" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="semester">Semester :</label>
              <input type="text" name="semester" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="branch">Branch :</label>
              <input type="text" name="branch" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="email">Email ID :</label>
              <input type="email" name="email" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="mobno">Mobile No. :</label>
              <input type="number" name="mobno" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="address">Address :</label>
              <input type="text" name="address" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="dob">DOB :</label>
              <input type="date" name="dob" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="street">Street :</label>
              <input type="text" name="street" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="city">City :</label>
              <input type="text" name="city" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="district">District :</label>
              <input type="text" name="district" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="pincode">Pincode :</label>
              <input type="number" name="pincode" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="cgpa">CGPA :</label>
              <input type="number" name="cgpa" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="noofbacklogs">No of Backlogs :</label>
              <input type="number" name="noofbacklogs" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="cocubesscore">Cocubes Score :</label>
              <input type="number" name="cocubesscore" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="amcatscore">Amcat Score :</label>
              <input type="number" name="amcatscore" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="tenth">10th Score :</label>
              <input type="number" name="tenth" placeholder=" "></input>
            </div>
            <div className="input-field">
              <label for="twelth">12th Score :</label>
              <input type="number" name="twelth" placeholder=" "></input>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label for="resume-link">Resume Link :</label>
              <input type="text" name="resume-link" placeholder=" "></input>
            </div>
            <div className="input-history">
            <label for="history">Do you have any history of backlogs:</label>
            <input type="checkbox" className="history" name="history"></input>
          </div>
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
export default Registration;
