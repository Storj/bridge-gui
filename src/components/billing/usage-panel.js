import React from 'react';
import {Link} from 'react-router';
import Currency from 'components/billing/currency';
import './usage-panel.scss';

const UsagePanel = ({storage, bandwidth}) => {
  return (
    <div>
      <h2 className="title">Usage This Month</h2>
      <div className="content">
        <div className="row">
          <div className="col-xs-6">
            <h2 className="">
              <h4>Storage</h4>
              <span className="mb0 blue">{storage}</span>
              <div className="text-muted unit-text" style={{display: 'inline-block'}}>
                <div> / 25GBh</div>
                <div>free</div>
              </div>
            </h2>
          </div>
          <div className="col-xs-6">
            <h2 className="mb0">
              <h4>Bandwidth</h4>
              <span className="mb0 blue">{bandwidth}</span>
              <div className="text-muted unit-text" style={{display: 'inline-block'}}>
                <div> / 25GB</div>
                <div>free</div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsagePanel;
