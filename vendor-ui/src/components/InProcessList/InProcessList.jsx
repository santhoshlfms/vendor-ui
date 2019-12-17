import React from "react";
import { Link } from "react-router-dom";

import config from "../Config/Config";
function InProcessList() {
  const { inProcessInvoicesList } = config;
  const getIccordions = invoice => {
    const hasActiveTags = invoice.activeTags && invoice.activeTags.length > 0;
    const hasFollowupReasons = invoice.followupReason;

    const tags = !hasActiveTags ? (
      ""
    ) : (
      <p className="themed-icon-link has-tags iccordion-item active">
        <Link to="#">
          <span>Active tags</span>
        </Link>
      </p>
    );
    const followup = !hasFollowupReasons ? (
      ""
    ) : (
      <p className="themed-icon-link status-follow-up iccordion-item">
        <Link to="#">
          <span>{invoice.followupReason}</span>
        </Link>
      </p>
    );

    return {
      tags,
      followup
    };
  };
  const getTagBtn = invoice => {
    const hasActiveTags = invoice.activeTags && invoice.activeTags.length > 0;
    return !hasActiveTags ? (
      ""
    ) : (
      <Link
        to="#"
        className="btn btn-sm btn-outline-secondary"
        data-toggle="modal"
        data-target="#viewTagsModal"
      >
        <span>View Tags</span>
      </Link>
    );
  };

  const getTicketBtn = invoice => {
    const hasActiveTickets = invoice.ticketId;
    const showTicket = (
      <Link
        to="#"
        data-ticketid={invoice.ticketId}
        className="btn btn-sm btn-outline-secondary"
        data-toggle="modal"
        data-target="#viewTicketModal"
        data-backdrop="static"
        data-keyboard="false"
      >
        <span>View Ticket</span>
      </Link>
    );
    const raiseTicket = (
      <Link
        to="#"
        className="btn btn-sm btn-outline-secondary"
        data-toggle="modal"
        data-target="#paymentReminderModal"
        data-backdrop="static"
        data-keyboard="false"
      >
        <span>Raise Ticket</span>
      </Link>
    );

    return hasActiveTickets ? showTicket : raiseTicket;
  };
  const getActiveTags = invoice => {
    if (!invoice.activeTags) return "";
    return (
      <div className="tags-wrap collapse">
        <ul className="list-unstyled tags">
          {invoice.activeTags.map(tag => (
            <li key={tag}>
              <Link
                to="#"
                className="tag"
                data-toggle="modal"
                data-target="#tagModal"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="inprocess-invoices-list" className="invoices-list">
      <div className="row list">
        {inProcessInvoicesList.map(invoice => (
          <div className="col-md-6 col-lg-4" key={invoice.urn}>
            <div className="card invoice-card" id={invoice.urn}>
              <div className="card-wrap">
                <div className="card-body">
                  <div className="card-row">
                    <p className="invoice-number">
                      <Link
                        to="#"
                        data-toggle="modal"
                        data-target="#viewInvoiceModal"
                      >
                        {invoice.invoiceNumber}
                      </Link>
                    </p>
                    <p className="currency invoice-amount">
                      <span className="symbol">
                        {" "}
                        {invoice.invoiceAmount.symbol}{" "}
                      </span>
                      <span className="amount">
                        {" "}
                        {invoice.invoiceAmount.amount}{" "}
                      </span>
                      <span className="code">
                        {" "}
                        {invoice.invoiceAmount.code}{" "}
                      </span>
                    </p>
                  </div>
                  <div className="card-row">
                    <p className="client-loc">{invoice.clientLocation}</p>
                    <p className="invoice-date">{invoice.invoiceDate}</p>
                  </div>
                  <div className="card-row">
                    <p className="invoice-type">{invoice.invoiceType}</p>
                    <p className="tipover tipover-r po-number">
                      <span>PO</span>
                      {invoice.poNumber}
                    </p>
                  </div>

                  <div className="additional-info border-top mt-2 pt-0">
                    <div className="card-row border-bottom iccordion open">
                      <p className="themed-icon-link current-status iccordion-item">
                        <Link to="#">
                          <span>{invoice.invoiceStatus}</span>
                        </Link>
                      </p>
                      {getIccordions(invoice).tags}
                      {getIccordions(invoice).followup}
                    </div>
                    {getActiveTags(invoice)}
                    <div className="btn-wrap">
                      {getTagBtn(invoice)}
                      {getTicketBtn(invoice)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InProcessList;
