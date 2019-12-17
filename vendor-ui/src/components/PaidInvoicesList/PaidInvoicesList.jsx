import React from "react";
import config from "../Config/Config";
import { Link } from "react-router-dom";
import * as _ from "lodash";

function PaidInvoicesList() {
  const { paidInvoicesList } = config;
  const invoiceAmountMarkup = invoice => {
    return (
      <React.Fragment>
        <span className="symbol"> {invoice.invoiceAmount.symbol} </span>
        <span className="amount"> {invoice.invoiceAmount.amount} </span>
        <span className="code"> {invoice.invoiceAmount.code} </span>
      </React.Fragment>
    );
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

  const getBatchDetails = invoice => {
    const isBatchPayment = invoice.paymentMethod === "Batch";

    return !isBatchPayment ? (
      ""
    ) : (
      <p className="themed-icon-link batch-id iccordion-item">
        <Link to="#">
          <span>{invoice.batchId}</span>
        </Link>
      </p>
    );
  };

  const getPaymentMethodClass = invoice =>
    invoice.paymentMethod === "Batch" ? "batch-payment" : "individual-payment";
  const getPaymentModeClass = invoice =>
    _.lowerCase(invoice.paymentMode) === "check" ? "" : "online";

  return (
    <div id="inprocess-invoices-list" className="invoices-list">
      <div className="row list">
        {paidInvoicesList.map(invoice => (
          <div className="col-md-6 col-lg-4" key={invoice.urn}>
            <div className="card invoice-card" id={`card-${invoice.urn}`}>
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
                      {invoiceAmountMarkup(invoice)}
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
                      <p
                        className={`themed-icon-link ${getPaymentModeClass(
                          invoice
                        )} payment-mode iccordion-item`}
                      >
                        <Link to="#">
                          <span>{invoice.paymentMode}</span>
                        </Link>
                      </p>
                      <p
                        className={`themed-icon-link ${getPaymentMethodClass(
                          invoice
                        )} iccordion-item`}
                      >
                        <Link to="#">
                          <span>{invoice.paymentMethod} payment</span>
                        </Link>
                      </p>
                      {getBatchDetails(invoice)}
                    </div>
                    <div className="card-row mt-2">
                      <p className="tipover tipover-l payment-date">
                        <i
                          className="far fa-calendar-check"
                          aria-hidden="true"
                        ></i>
                        {invoice.paymentDate}
                        <span>Payment date</span>
                      </p>
                    </div>
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

export default PaidInvoicesList;
