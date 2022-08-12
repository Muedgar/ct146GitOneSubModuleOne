import React, { useState, useEffect } from "react";

import "./Pending.css";
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

function Pending() {
  
    let [users, setUsers] = useState([]);
    let [requests,setRequests] = useState([]);
   

useEffect(() => { 


getData().then(setUsers);

},[]);

useEffect(() => {
  
  getData2().then(setRequests);
},[]);

    async function handleApprove(id) {
      ///user/makeRequest/
      
      await fetch("/user/makeRequest/approve/"+id, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({data: "no data"})
      }).then(d=>{
        getData().then(setUsers);
        getData2().then(setRequests);
      }).catch(e=>console.log(e.message));
    }

    async function handleReject(id) {
      ///user/makeRequest/
      
      await fetch("/user/makeRequest/reject/"+id, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({data: "no data"})
      }).then(d=>{
        getData().then(setUsers);
        getData2().then(setRequests);
      }).catch(e=>console.log(e.message));
    }

    return(
        <div className="pendingContainer">
            <div className="pendingTitle">
                <h1>Reporting Screen: Pending Requests</h1>
            </div>
            <div className="row">
        <table id="performanceTable" className="rwd-table">
          <thead>
          <tr>
            <th>Request Date</th>
            <th>Request Hour</th>
            <th>Individual Name</th>
            <th>Approve Request</th>
            <th>Reject Request</th>
          </tr>
          </thead>
          <tbody>
          {
           
              requests.map(request => {
                for(let i=0;i<users.length;i++) {
                    if((request.userId === users[i]._id)&&(request.status==="pending")) {
                      return (
                        <tr key={request._id}>
              <td data-th="Request Date">{request.scheduledate}</td>
              <td data-th="Request Hour">{request.hourschedule}</td>
              <td data-th="Individual Name">{users[i].name}</td>
              <td data-th="Approve Request">
                <button onClick={()=> handleApprove(request._id)} type="submit" className="btn btn-success" >Approve</button>
              </td>
              <td data-th="Reject Request">
                <button onClick={()=> handleReject(request._id)}  type="submit" className="btn btn-warning" >Reject</button>
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

export default Pending;

