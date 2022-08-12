import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PageOneOneDashboard from "./components/pageOneDashboard/pageOneOne/PageOneOneDashboard"
import PageOneThreeDashboard from "./components/pageOneDashboard/pageOneThree/PageOneThreeDashboard";
import PageOneTwoDashboard from "./components/pageOneDashboard/pageOneTwo/PageOneTwoDashboard";
import PageTwoDashboard from "./components/pageTwoDashboard/PageTwoDashboard";
import Home from "./components/home/Home";
import Navigation from "./components/agentDashboard/Navigation";
import NavigationTwo from "./components/userDashboard/NavigationTwo";

// agents routes
import Pending from "./components/agentDashboard/pendingRequests/Pending";
import Rejected from "./components/agentDashboard/rejectedRequests/Rejected";
import Approved from "./components/agentDashboard/approvedRequests/Approved";
import Availability from "./components/agentDashboard/availabilitySchedules/Availability";

// user routes
import Sending from "./components/userDashboard/sendingRequests/Sending";
import Updates from "./components/userDashboard/updatesRequests/Updates";
import AvailabilityTwo from "./components/userDashboard/availabilitySchedules/Availability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/requestChangeOfInsurance" element={<PageOneOneDashboard/>} />
        <Route path="/ejoHeza" element={<PageOneTwoDashboard/>} />
        <Route path="/education" element={<PageOneThreeDashboard/>} />
        <Route path="/requestForm" element={<PageTwoDashboard />} />
        <Route path="/agent" element={<Navigation />}>
          <Route 
              path="pending"
              element={<Pending />}
          />

          <Route 
              path="rejected"
              element={<Rejected />}
          />
                    <Route 
              path="approved"
              element={<Approved />}
          />
                    <Route 
              path="availability"
              element={<Availability />}
          />

        </Route>


        <Route path="/user" element={<NavigationTwo />}>
          <Route 
              path="sending"
              element={<Sending />}
          />

          <Route 
              path="updates"
              element={<Updates />}
          />
           <Route 
              path="availability"
              element={<AvailabilityTwo />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
