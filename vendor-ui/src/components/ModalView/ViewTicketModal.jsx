import React, { Component } from "react";
import LogoSmall from "../../assets/images/logo-sm.png";
import ProfilePic from "../../assets/images/profile-pic.png";
import ProfilePic1 from "../../assets/images/profile-pic2.png";

export class ViewTicketModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="viewTicketModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="viewTicketModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewTicketModalLabel">
                <span className="badge badge-danger badge-pill">Open</span>{" "}
                Ticket no AB1324123
              </h5>
            </div>
            <div className="modal-body collapse">
              <div className="alert alert-success" role="alert">
                Your message is sent successfully.
              </div>
            </div>
            <div className="modal-body collapse show">
              <p>
                <strong>Question:</strong> Payment request
              </p>
              <p>
                <strong>Related Invoices:</strong> 8373452, 9872345, 8972345,
                9872352
              </p>
              <div className="comment-box">
                <div className="conversation">
                  <div className="comment-row">
                    <div className="d-flex flex-row">
                      <div className="gravatar-wrap mr-2">
                        <img
                          src={ProfilePic}
                          className="gravatar"
                          alt="Petey Cruiser"
                        />
                      </div>
                      <div className="comment-info d-flex flex-column justify-content-center">
                        <p className="username">Petey Cruiser</p>
                        <p className="timeago">4 days ago</p>
                      </div>
                    </div>
                    <p className="message">
                      Pariatur eiusmod anim excepteur ipsum dolor duis sunt aute
                      nostrud dolor.
                    </p>
                  </div>

                  <div
                    className="reply-box fade collapse show"
                    id="reply-box-1"
                  >
                    <div className="comment-row">
                      <div className="d-flex flex-row">
                        <div className="gravatar-wrap mr-2">
                          <img
                            src={ProfilePic1}
                            className="gravatar"
                            alt="John Smith"
                          />
                        </div>
                        <div className="comment-info d-flex flex-column justify-content-center">
                          <p className="username">John Smith</p>
                          <p className="timeago">3 hrs ago</p>
                        </div>
                      </div>
                      <p className="message">
                        Veniam ea eu ipsum Lorem veniam Lorem proident
                        adipisicing adipisicing aliquip ea.
                      </p>
                    </div>
                  </div>

                  <div className="comment-row">
                    <div className="form-group mb-0">
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-actions collapse show">
                <button type="button" className="btn" data-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="replyTicketBtn"
                >
                  Send
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
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTicketModal;
