import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approval</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
