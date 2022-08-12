import React, {useState, useEffect} from "react";

import "./Approved.css";
import "../../commonCss/table.css"



async function getData() {
  let data = [];
    await fetch("/user/makeRequest/getAllUsers")
    .then(d=>d.json())
    .then(d=> {
      data = d;
    }).catch(e=>console.log(e.message));
  
    return data;
  
  }
  
  async function getData2() {
    let data = [];
    await fetch("/user/makeRequest/getAllRequests")
  .then(d=>d.json())
  .then(d=> {
    data = d;
    
  }).catch(e=>console.log(e.message));
  return data;
  }
  




function Approved() {

  let [feedBack, setFeedBack] = useState("Your request has been rejected, for more information reach out to customer support.");

    let [users, setUsers] = useState([]);
  let [requests,setRequests] = useState([]);

  useEffect(() => { 


    getData().then(setUsers);
    
    },[]);
    
    useEffect(() => {
      
      getData2().then(setRequests);
    },[]);


    async function handleFeedback(requestId, userId) {
      let data = {requestId, userId, feedBack};
      console.log(data);
      await fetch("/user/makeRequest/createFeedback", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({data})
      }).then(d=>{}).catch(e=>console.log(e.message))
    }

    return(
        <div className="approvedContainer">
        <div className="approvedTitle">
            <h1>Reporting Screen: Approved Requests</h1>
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
                  if((request.userId===users[i]._id)&&(request.status==="approved")) {
                   return(
<tr key={request._id}>
              <td data-th="Request Date">{request.scheduledate}</td>
              <td data-th="Request Hour">{request.hourschedule}</td>
              <td data-th="Individual Name">{users[i].name}</td>
              <td data-th="Send Feedback">
                        <textarea onChange={val => setFeedBack(val.target.value)} className="form-control textAreaCss" cols="14" rows="5" value={feedBack}/>
                        <button onClick={() => handleFeedback(request._id, users[i]._id)} id="deleteDvo02" type="submit" className="btn btn-success" >Send Feedback</button>
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

export default Approved;

