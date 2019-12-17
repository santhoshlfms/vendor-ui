import React, { Component } from "react";

export class NewInvoiceModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="newInvoiceModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="newInvoiceModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newInvoiceModalLabel">
                Upload Invoice
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                action="/"
                id="uploadNewDocuments"
                className="dropzone"
                encType="multipart/form-data"
              >
                <div className="dz-message needsclick">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>
                    <strong>Drop files here</strong> or{" "}
                    <strong>click to upload</strong>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewInvoiceModal;
