import React, {useState, useEffect} from "react";

import "./Updates.css";
import "../../commonCss/table.css";




  
  async function getData2() {
    let data = [];
    await fetch("/user/makeRequest/getAllRequests")
  .then(d=>d.json())
  .then(d=> {
    data = d;
    
  }).catch(e=>console.log(e.message));
  return data;
  }
  




function Updates() {
  let [requests,setRequests] = useState([]);
  let loggedInUser = JSON.parse(sessionStorage.getItem("currentlyLoggedin"));
  
    
    useEffect(() => {
      
      getData2().then(setRequests);
    },[]);

    return(
        <div className="updatesContainer">
            <div className="updatesTitle">
                <h1>Reporting Screen: Updates Requests</h1>
            </div>
            <div className="row">
        <table id="performanceTable" className="rwd-table">
          <thead>
          <tr>
            <th>Request Date</th>
            <th>Request Hour</th>
            <th>Individual Name</th>
            <th>Request Status</th>
          </tr>
          </thead>
          <tbody>
          {
            requests.map(request => {
                  if((request.userId===loggedInUser._id)&&(request.status==="approved")) {
                   return(
                    <tr key={request._id}>
              <td data-th="Request Date">{request.scheduledate}</td>
              <td data-th="Request Hour">{request.hourschedule}</td>
              <td data-th="Individual Name">{loggedInUser.name}</td>
              <td data-th="Request Status">
                        <button id="deleteDvo02" type="submit" className="feedbackContainer btn btn-info"  disabled>Your request has been rejected, for more information reach out to customer support.</button>
                    </td>
                  </tr>
                   )
                  }
                  if((request.userId===loggedInUser._id)&&(request.status==="rejected")) {
            return(
              <tr key={request._id}>
              <td data-th="Request Date">{request.scheduledate}</td>
              <td data-th="Request Hour">{request.hourschedule}</td>
              <td data-th="Individual Name">{loggedInUser.name}</td>
              <td data-th="Request Status">
                        <button id="deleteDvo02" type="submit" className="feedbackContainer btn btn-danger"  disabled>Your request has been rejected, for more information reach out to customer support.</button>
                    </td>
                  </tr>
                   )
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

export default Updates;

