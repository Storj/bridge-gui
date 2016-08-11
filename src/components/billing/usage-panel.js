import React from 'react';
import {Link} from 'react-router';


const UsagePanel = ({amount, linkParams}) => {
  return (
    <div>
      <h2 className="title">This Month</h2>
      <div className="content">
        <div className="row">
          <div className="col-xs-6">
            <p className="text-muted">Current Usage</p>
            <h2 className="mb0 blue"><b>{amount}</b></h2>
          </div>
          <div className="col-xs-6 text-right">
            <Link className="btn btn-blue btn-action" to={linkParams} >View Usage</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsagePanel;
