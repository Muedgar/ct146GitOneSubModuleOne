import React, {useState, useEffect} from "react";

import "./Rejected.css";
import "../../commonCss/table.css";

async function getData() {
  let data = [];
    await fetch("user/makeRequest/getAllUsers")
    .then(d=>d.json())
    .then(d=> {
      data = d;
    }).catch(e=>console.log(e.message));
  
    return data;
  
  }
  
  async function getData2() {
    let data = [];
    await fetch("user/makeRequest/getAllRequests")
  .then(d=>d.json())
  .then(d=> {
    data = d;
    
  }).catch(e=>console.log(e.message));
  return data;
  }
  


function Rejected() {
  let [users, setUsers] = useState([]);
  let [requests,setRequests] = useState([]);

  useEffect(() => { 


    getData().then(setUsers);
    
    },[]);
    
    useEffect(() => {
      
      getData2().then(setRequests);
    },[]);


    return(
        <div className="rejectedContainer">
            <div className="rejectedTitle">
                <h1>Reporting Screen: Rejected Requests</h1>
            </div>
            <div className="row">
        <table id="performanceTable" className="rwd-table">
          <thead>
          <tr>
            <th>Insurance Id</th>
            <th>Request Date</th>
            <th>Individual Name</th>
            <th>Send Feedback</th>
          </tr>
          </thead>
          <tbody>
          {
            requests.map(request => {
              for(let i=0;i<users.length;i++) {
                  if((request.userId===users[i]._id)&&(request.status==="rejected")) {
                   return(
<tr key={request._id}>
              <td data-th="Request Date">{request.scheduledate}</td>
              <td data-th="Request Hour">{request.hourschedule}</td>
              <td data-th="Individual Name">{users[i].name}</td>
              <td data-th="Send Feedback">
                        <textarea className="form-control textAreaCss" cols="14" rows="5" value="Your request has been rejected, for more information reach out to customer support."/>
                        <button id="deleteDvo02" type="submit" className="btn btn-success" >Send Feedback</button>
                    </td>
                  </tr>

                   )
                  }
              }
              return true;
            })
          }

          
          </tbody>
        </table>
      </div>
        </div>


    );
}

export default Rejected;

