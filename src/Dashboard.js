import React from 'react';
import { Component } from "react";
import DashboardHeader from './components/DashboardHeader';

import DefaultDashboard from './components/DefaultDashboard';
import ClosedCallsTable from './components/ClosedCallsTable';






const Dashboard = () => (
  <div className="">
    <div className="row">
    <DashboardHeader/>

<DefaultDashboard/>

</div>


</div>
  );

export default Dashboard;