import React from "react";
import config from "../Config/Config";
import { Link } from "react-router-dom";

function SearchInvoiceList() {
  const { inProcessInvoicesList } = config;
  const getVendorName = invoice =>
    !invoice.vendorName ? (
      <a href="ap-edit.html" className="inline-link">
        add vendor name
      </a>
    ) : (
      <a href="vendor-details.html">${invoice.vendorName}</a>
    );
  const invoiceAmountMarkup = invoice => {
    return (
      <React.Fragment>
        <span className="symbol"> {invoice.invoiceAmount.symbol} </span>
        <span className="amount"> {invoice.invoiceAmount.amount} </span>
        <span className="code"> {invoice.invoiceAmount.code} </span>
      </React.Fragment>
    );
  };
  const getInvoiceAmount = invoice =>
    !(invoice.invoiceAmount && invoice.invoiceAmount.amount) ? (
      <a href="ap-edit.html" className="inline-link">
        add invoice amount
      </a>
    ) : (
      invoiceAmountMarkup(invoice)
    );
  const getInvoiceType = invoice =>
    !invoice.invoiceType ? (
      <a href="ap-edit.html" className="inline-link">
        add Invoice type
      </a>
    ) : (
      invoice.invoiceType
    );
  const getInvoiceNumber = invoice =>
    !invoice.invoiceNumber ? (
      <p className="invoice-number">
        <a href="ap-edit.html" className="inline-link">
          add Invoice Number
        </a>
      </p>
    ) : (
      <p className="tipover invoice-number">
        <span>Invoice no.</span>
        {invoice.invoiceNumber}
      </p>
    );
  const getClientLoc = invoice =>
    !invoice.clientLocation ? (
      <a href="ap-edit.html" className="inline-link">
        add client location
      </a>
    ) : (
      invoice.clientLocation
    );
  const getInvoiceDate = invoice =>
    !invoice.invoiceDate ? (
      <a href="ap-edit.html" className="inline-link">
        add invoice date
      </a>
    ) : (
      invoice.invoiceDate
    );
  const getPoNumber = invoice =>
    !invoice.poNumber ? (
      <p className="po-number">
        <a href="ap-edit.html" className="inline-link">
          add PO number
        </a>
      </p>
    ) : (
      <p className="tipover po-number">
        <span>PO</span> {invoice.poNumber}
      </p>
    );

  const getApproval = invoice => {
    if (!invoice.approval) {
      return "";
    }
    return (
      <p
        className={`themed-icon-link approval ${invoice.approvalClass} iccordion-item`}
      >
        <Link to="#">
          <span>{invoice.approval}</span>
        </Link>
      </p>
    );
  };

  const getAssignedUser = invoice => {
    if (!invoice.assignedUser) {
      return (
        <p className="themed-icon-link assign-user iccordion-item">
          <Link to="#" data-toggle="modal" data-target="#assignUserModal">
            <span>Assign a person</span>
          </Link>
        </p>
      );
    }
    return (
      <p className="themed-icon-link assigned-user iccordion-item">
        <Link to="#">
          <span>${invoice.assignedUser}</span>
        </Link>
      </p>
    );
  };

  const getDueInfo = invoice => {
    if (!invoice.dueDatePassed) {
      return "";
    }
    return (
      <p className="themed-icon-link due-exceeded iccordion-item">
        <Link to="#">
          <span>Past Due</span>
        </Link>
      </p>
    );
  };

  const getStatus = invoice => {
    if (invoice.invoiceStatus === "follow-up") {
      return (
        <p
          className={`themed-icon-link status-${invoice.invoiceStatus} iccordion-item default-show`}
        >
          <a href="ap-followup.html">
            <span className="show">{invoice.invoiceStatus}</span>
          </a>
        </p>
      );
    }
    return (
      <p
        className={`themed-icon-link status-${invoice.invoiceStatus} iccordion-item default-show`}
      >
        <a href="ap-filtered.html">
          <span className="show">{invoice.invoiceStatus}</span>
        </a>
      </p>
    );
  };

  const getDueDateWarning = invoice =>
    !invoice.dueDatePassed ? "" : "invoice-due";

  return inProcessInvoicesList.map(invoice => (
    <div className="col-md-6 col-lg-4" key={invoice.urn}>
      <div
        className={`card invoice-card ${getDueDateWarning(
          invoice
        )} invoice-status-${invoice.invoiceStatus}`}
        id={`card-${invoice.urn}`}
      >
        <div className="card-wrap">
          <div className="card-body">
            <div className="card-row">
              <p className="vendor-name">{getVendorName(invoice)}</p>
              <p className="currency invoice-amount">
                {getInvoiceAmount(invoice)}
              </p>
            </div>
            <div className="card-row">
              <p className="invoice-type">{getInvoiceType(invoice)}</p>
              {getInvoiceNumber(invoice)}
            </div>
            <div className="card-row">
              <p className="client-loc">{getClientLoc(invoice)}</p>
              <p className="invoice-date">{getInvoiceDate(invoice)}</p>
            </div>

            <div className="additional-info border-top mt-2 pt-2">
              <div className="card-row">
                <p className="tipover urn">
                  {invoice.urn} <span>UID</span>
                </p>
                {getPoNumber(invoice)}
              </div>

              <div className="card-row approval-assignment iccordion">
                <p
                  className={`themed-icon-link ${invoice.invoiceEntry} iccordion-item`}
                >
                  <Link to="#">
                    <span>{invoice.invoiceEntry}</span>
                  </Link>
                </p>
                {getApproval(invoice)}
                {getAssignedUser(invoice)}
                {getDueInfo(invoice)}
                {getStatus(invoice)}
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  data-valuenow={invoice.progress}
                  aria-valuenow={invoice.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="progress-value"></span>
                </div>
              </div>
            </div>

            <div className="hover-links-wrap">
              <ul className="list-unstyled d-flex flex-row justify-content-end iconed-link ">
                <li className="">
                  <input
                    type="checkbox"
                    className="invoice-selector"
                    id={`check-${invoice.urn}`}
                    data-parent={`#card-${invoice.urn}`}
                  />
                </li>
                <li className="link-item view-pdf-link">
                  <Link to="#">
                    <span>View</span>
                  </Link>
                </li>
                <li className="link-item edit-link">
                  <a href="ap-edit.html">
                    <span>Edit</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default SearchInvoiceList;
