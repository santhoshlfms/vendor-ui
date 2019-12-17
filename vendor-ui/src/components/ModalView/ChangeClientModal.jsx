import React from "react";

function ChangeClientModal() {
  return (
    <div
      className="modal fade"
      id="changeClientModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="changeClientModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="changeClientModalLabel">
              Switch Client
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
            <form className="w-100">
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="companySelect">Company</label>
                    <select className="form-control" id="companySelect">
                      <option value="entity1">Company name</option>
                      <option value="entity2">Another company</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="locationSelect">Location</label>
                    <select className="form-control" id="locationSelect">
                      <option value="entity1">Entity name</option>
                      <option value="entity2">Another entity</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="btn-wrap border-top pt-3 d-flex justify-content-between">
                <button type="button" className="btn" data-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary mb-0"
                  aria-expanded="true"
                  data-dismiss="modal"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeClientModal;
