import React from "react";
function ViewInvoiceModal() {
  return (
    <div
      className="modal fade"
      id="viewInvoiceModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="viewInvoiceModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="viewInvoiceModalLabel">
              Invoice: 8373452
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
            <div className="pdf-viewer-wrap">
              <iframe
                title="PdfViewer"
                width="100%"
                height="100%"
                src="https://docs.google.com/viewer?url=http://www.bitesite.ca/Signing%20up%20for%20Amazon%20S3.pdf&embedded=true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoiceModal;
