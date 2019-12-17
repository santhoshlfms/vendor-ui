import React, { Component } from "react";
import config from "../Config/Config";
// import { Link } from "react-router-dom";

const getApprovalReqMsg = notification => (
  <a href="business-approval.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src={notification.message.sender.image}
          className="gravatar"
          alt="username"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} wants your approval for invoice of{" "}
          <strong>{notification.message.amount}</strong> from{" "}
          <strong>{notification.message.vendor}</strong>
        </p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getResolveReqMsg = notification => (
  <a href="business-resolve.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img src={notification.message.sender.image} className="gravatar" alt="username"/> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} needs a clarification for invoice
          of <strong>{notification.message.amount}</strong> from{" "}
          <strong>{notification.message.vendor}</strong>
        </p>
        <p className="comment">{notification.message.comment}</p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getResolveResMsg = notification => (
  <a href="business-resolve.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src={notification.message.sender.image}
          className="gravatar"
          alt="username"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} replied for the conversation about
          invoice of <strong>{notification.message.amount}</strong> from{" "}
          <strong>{notification.message.vendor}</strong>
        </p>
        <p className="comment">{notification.message.comment}</p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getDisputeRaisedMsg = notification => (
  <a href="ap-edit.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src={notification.message.sender.image}
          className="gravatar"
          alt="username"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} added a tag -{" "}
          <strong>{notification.message.disputeTag}</strong> for an invoice of{" "}
          <strong>{notification.message.amount}</strong> from{" "}
          <strong>{notification.message.vendor}</strong>
        </p>
        <p className="comment">{notification.message.comment}</p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getApproveNewVendorMsg = notification => (
  <a href="vendor-details-approve.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src={notification.message.sender.image}
          className="gravatar"
          alt="username"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} added a new vendor{" "}
          <strong>{notification.message.vendor}</strong> and waits for your
          approval.
        </p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getUpdateNewVendorMsg = notification => (
  <a href="add-vendor-approve.html">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src={notification.message.sender.image}
          className="gravatar"
          alt="username"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          {notification.message.sender.name} wants you to update missing
          information for the newly added vendor{" "}
          <strong>{notification.message.vendor}</strong>.
        </p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getSubmittedForPaymentMsg = notification => (
  <a href="/#">
    <div className="d-flex flex-row justify-content-between align-items-center pb-2 mb-2">
      <div className="gravatar-wrap mr-2">
        {/* <img
          src="./static/images/logo.png"
          className="gravatar"
          alt="cratosys"
        /> */}
      </div>
      <div className="account-info">
        <p className="mb-0">
          Invoice of <strong>{notification.message.amount}</strong> from{" "}
          <strong>{notification.message.vendor}</strong> is submitted for
          payment successfully
        </p>
      </div>
      <p className="timestamp ml-2 unread">{notification.time}</p>
    </div>
  </a>
);

const getMessage = notification => {
  switch (notification.message.type) {
    case "approvalRequest":
      return getApprovalReqMsg(notification);

    case "resolveRequest":
      return getResolveReqMsg(notification);

    case "resolveResponse":
      return getResolveResMsg(notification);

    case "disputeRaised":
      return getDisputeRaisedMsg(notification);

    case "approveNewVendor":
      return getApproveNewVendorMsg(notification);

    case "updateApproveNewVendor":
      return getUpdateNewVendorMsg(notification);

    case "submittedForPayment":
      return getSubmittedForPaymentMsg(notification);

    default:
      return false;
  }
};

export class Notifications extends Component {
  render() {
    const { notifications } = config;
    return (
      <div
        className="collapse notification-box shadow-sm"
        id="notification-box"
        data-parent="#accountGroup"
      >
        <div className="card card-body">
          <ul className="list-unstyled">
            {notifications.map(notification => (
              <li className="" key={notification.id}>
                {getMessage(notification)}
                <button className="btn btn-danger remove-notification">
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Notifications;
