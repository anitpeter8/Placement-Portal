
import Student from "../../components/Student";
import { StudentContext } from "../../context/studentcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import "../../css/Studentpage.css";
import React, { useState ,useContext} from "react";
import { Button } from "react-bootstrap";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;


const Students = () => {

  const [branchsearch, setbranch] = useState("ALL");
  const [classsearch, setclass] = useState("ALL");
  const [namesearch, setname] = useState("");

 
    const context=useContext(StudentContext);
    const {students}=context
  

  return (
    <div className="stmain">
      <div className="sthead-container">
        <h1 className="stheading1">STUDENTS</h1>

        <div className="sform">
          <div className="sname">
            <input
              type="text"
              className="name-search"
              value={namesearch}
              placeholder=" Name "
              onChange={(e) => {
                setname(e.target.value);
                console.log(namesearch);
              }}
            />
          </div>
          <div className="syear">
            <select
              className="year-search"
              value={classsearch}
              onChange={(e) => {
                setclass(e.target.value);
                console.log(classsearch);
              }}
            >
              <option>ALL</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div className="sbranch">
            <select
              className="branch-search"
              value={branchsearch}
              onChange={(e) => {
                setbranch(e.target.value);
                console.log(branchsearch);
              }}
            >
              <option>ALL</option>
              <option>CE</option>
              <option>CSE</option>
              <option>CSE AI</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>ME</option>
            </select>
          </div>

          {/* <div className="ficon"></div> */}
          <div>
            <Button className="dwnld-button"
              title="Download"
              variant="success"
              height
            >
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </div>
        </div>
      </div>

      <div className="stcontent">
        <div className="branch-name">
          {students != null && (
            <>
              <hr style={{ color: "white", height: "5px" }} />
              <div className="row row-cols-2">
                {students &&
                  students
                    .filter((s) => {
                      if (branchsearch === "ALL") {
                        return true;
                      }
                      return s.branch === branchsearch;
                    })
                    .filter((s) => {
                      if (classsearch === "ALL") {
                        return true;
                      }
                      return s.batch === classsearch;
                    })
                    .filter((s) => {
                      console.log("hello");
                      if (namesearch === "") {
                        return true;
                      }

                      return s.fullname
                        .toLowerCase()
                        .includes(namesearch.toLowerCase());
                    })
                    .map((student) => (
                      <div className="col">
                        <div className="dept-card">
                          <Student student={student} />
                        </div>
                      </div>
                    ))}
              </div>
            </>
          )}

          {Students.length > 0 && (
            <>
              <h4 className="label">CIVIL</h4>
              <hr style={{ color: "white", height: "5px" }} />
              <div className="row row-cols-2">
                {students.map((student) => (
                  <div className="col">
                    <div className="dept-card">
                      <Student student={student} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
