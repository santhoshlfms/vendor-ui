import React from "react";

function ViewTagsModal() {
  return (
    <div
      className="modal fade"
      id="viewTagsModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="viewTagsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="viewTagsModalLabel">
              Tags assigned to invoice: 8373452
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

          <div className="modal-body-wrap">
            <div className="tag-body-section">
              <div className="modal-body">
                <form action="">
                  <div className="tag-definition">
                    <div className="tag-section show">
                      <span className="tag">Location mismatch</span>
                      <p>
                        Anim ad et anim exercitation elit voluptate quis officia
                        anim ea.
                      </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="activeTagComment">Explanation</label>
                    <p className="pre-populated-text">
                      Duis eu deserunt deserunt adipisicing.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="tag-body-section">
              <div className="modal-body">
                <form action="">
                  <div className="tag-definition">
                    <div className="tag-section show">
                      <span className="tag">Wrong Tax amount</span>
                      <p>
                        Officia eu magna id anim magna fugiat amet ullamco
                        nulla.
                      </p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="activeTagComment">Explanation</label>
                    <p className="pre-populated-text">
                      Pariatur duis Lorem non tempor cillum in pariatur nisi
                      irure laborum Lorem sunt tempor est.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTagsModal;
