import React from "react";
import LogoSmall from "../../assets/images/logo-sm.png";

function PaymentReminderModal() {
  return (
    <div
      className="modal fade"
      id="paymentReminderModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="paymentReminderModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h5 className="modal-title" id="paymentReminderModalLabel">
                Raise a ticket for Invoice: 8373452
              </h5>
            </div>
            <div className="modal-body collapse">
              <div className="alert alert-success" role="alert">
                Ticket Raised successfully.
              </div>
            </div>
            <div className="modal-body collapse show">
              <div className="form-group">
                <div className="form-row mb-3">
                  <div className="col">
                    <label htmlFor="ticketReason">Questions</label>
                    <select className="form-control" id="ticketReason">
                      <option>Payment request</option>
                      <option>Other reason</option>
                      <option>Another reason</option>
                    </select>
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col">
                    <label htmlFor="note">Other related invoices</label>
                    <div className="d-flex flex-row justify-content-start">
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input checked-by-rule"
                          type="checkbox"
                          id="related-invoice-1"
                        />
                        <label htmlFor="related-invoice-1">9872345</label>
                      </div>
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input checked-by-rule"
                          type="checkbox"
                          id="related-invoice-2"
                        />
                        <label htmlFor="related-invoice-2">8972345</label>
                      </div>
                      <div className="form-check mr-3">
                        <input
                          className="form-check-input checked-by-rule"
                          type="checkbox"
                          id="related-invoice-3"
                        />
                        <label htmlFor="related-invoice-3">9872352</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col">
                    <label htmlFor="note">Note</label>
                    <textarea
                      className="form-control"
                      id="note"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-actions collapse show">
                <button
                  type="button"
                  className="btn"
                  id="inProcessCancelBtn"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="inProcessTicketBtn"
                >
                  Submit Ticket
                </button>
              </div>
              <div className="modal-actions collapse ">
                <button
                  type="button"
                  className="btn btn-primary closeBtn"
                  data-dismiss="modal"
                >
                  Okay
                </button>
              </div>
            </div>
            <div
              className="spinner spinner-border text-light ml-auto"
              role="status"
            >
              <span className="sr-only">Loading...</span>
              <img src={LogoSmall} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentReminderModal;
