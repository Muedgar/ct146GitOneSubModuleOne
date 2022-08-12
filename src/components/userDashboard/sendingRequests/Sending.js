import React, { useState } from "react";

import "./Sending.css";
import "../../commonCss/table.css"

function Sending() {
    let user = JSON.parse(sessionStorage.getItem("currentlyLoggedin"));
    
    const [insurancefrom, setinsurancefrom] = useState("");
    const [insuranceto, setinsuranceto] = useState("");
    const [scheduledate, setscheduledate] = useState("");
    const [hourschedule, sethourschedule] = useState("");
    
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            
            // get data

            let id = user._id;
            let data = {
            insurancefrom,
            insuranceto,
            scheduledate,
            hourschedule}


            await fetch("user/makeRequest/"+id, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
              }).then(d=>{
                  alert("Request sent successfully!! :)");
              }).catch(e=>console.log(e.message))
            


        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div className="sendingContainer">
            <div className="sendingTitle">
                <h1>Reporting Screen: Sending Requests</h1>
            </div>
            <div className="row">
            <form onSubmit={handleSubmit} className="pageTwoDashboardForm">
                    <h3>Insurance Transfer Service Request</h3>
                    <input defaultValue={user.name} id="names" disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Names:" />


                    <input defaultValue={user.email} id="email" disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Email:" />
                    <input defaultValue={user.nationalId} id="nationalId" disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="National ID:" />
                    <input defaultValue={user.phone} id="phone" disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Phone Number:" />


                    <input defaultValue={user.address} id="address" disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Address:" />

                    <div>
                        <div>
                            <label>Old Insurance:</label>
                            <select onChange={val => setinsurancefrom(val.target.value)} className="pageTwoDashboardFormSelect form-control">
                                <option>Choose Your Insurance</option>
                                <option defaultValue="RSSB">RSSB</option>
                                <option defaultValue="UAP">UAP</option>
                            </select>
                        </div>
                        <div>
                            <label>New Insurance:</label>
                            <select onChange={val => setinsuranceto(val.target.value)} className="pageTwoDashboardFormSelect form-control">
                                <option>Choose Your Insurance</option>
                                <option defaultValue="RSSB">RSSB</option>
                                <option defaultValue="UAP">UAP</option>
                            </select>
                        </div>
                    </div>
                    <label>Choose Request Date:</label>
                    <input onChange={val => setscheduledate(val.target.value)} name="date" className="pageTwoDashboardFormSelect form-control" type="date"/>
                    <select onChange={val => sethourschedule(val.target.value)} className="pageTwoDashboardFormSelect form-control" defaultValue="Choose Time">
                                <option defaultValue="8am-10am">8am-10am</option>
                                <option defaultValue="10am-12pm">10am-12pm</option>
                                <option defaultValue="14pm-15:30pm">14pm-15:30pm</option>
                                <option defaultValue="15:30pm-17:00pm">15:30pm-17:00pm</option>
                    </select>
                    
                    <button className="submitRequest">REQUEST</button>
                </form>
      </div>
        </div>

    );
}

export default Sending;

