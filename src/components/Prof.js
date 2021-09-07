import React from 'react';
import { Component, useState } from "react";
import OpenCallsTable from './OpenCallsTable';
import ClosedCallsTable from './ClosedCallsTable';
import VisitStatus from './VisitStatus';
import SearchFilterTop from './SearchFilterTop';

const ShowAndHide = () => {
  const status = ["Open Calls (101)", "Closed Calls (79)", "Visit Status (200)", "Search Filter"];
  const [myStatus, setMyStatus] = useState("")
  return (
    <div>
  
   
    <div className="col mb-3 col-12 text-center">
      <div className="btn-group "
      role="group"
      aria-label="Basic Example">
        {status.map(profession =>(
          <button
          type="button"
          key={profession}
          className={"btn btn-light border-dark "}
          onClick={() => setMyStatus( profession )}>
            {profession.toLocaleUpperCase()}
          </button>

        ))}
      </div>
    </div>

<div className="col text-center  " >
<p>{myStatus}</p>
<p>{myStatus === "Open Calls (101)" && <OpenCallsTable/>}</p>
<p>{myStatus === "Closed Calls (79)" && <ClosedCallsTable/>}</p>
<p>{myStatus == "Visit Status (200)" && <VisitStatus/>}</p>
<p>{myStatus == "Search Filter" && <SearchFilterTop/>}</p>
</div>
<p></p>
</div>

  );


}
export default ShowAndHide;