import React from 'react';
import { Component} from "react";

const SearchFilterTop= () =>{
  return (
  <div className="mx-auto"><form >
  <div  className="row ">
      <div className="col-md-2">   <div className="form-row">
          <div className="form-group ">
            {/* <label for="location">Location</label> */}
            <input type="email" className="form-control" id="inputEmail4" placeholder="Location"></input>
          </div>
    
        </div></div>

      <div className="col-md-2">   
      {/* <label for="inputServiceType" style={{color:'white'}}>Service Type</label> */}
          <select id="inputServiceType" className="form-control">
            <option selected>Service Type...</option>
            <option>Armed</option>
            <option>Unarmed</option>
            <option>Temporary</option>
            <option>Permanent</option>
            <option>Undercover</option>
          </select></div>

      <div className="col-md-2">   
      {/* <label for="inputDateRange">Visit Date</label> */}
          <div id="reportrange" style={{background:' #fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc', width: '100%'}}>
              <i className="fa fa-calendar"></i>&nbsp;
              <span></span> <i class="fa fa-caret-down"></i>
          
          </div></div>

          <div className="col-md-2">
          <div >  
             {/* <label for="inputServiceType">Status</label> */}
              <select id="inputServiceType" className="form-control">
                <option selected>Status...</option>
                <option>Scheduled</option>
                <option>Pending</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select></div>
          </div>
          <div className="col-md-2">
          <button  type="button" class="btn btn-primary">Submit</button>
          </div>
    </div>







</form>
</div>
  )

}

export default SearchFilterTop;
