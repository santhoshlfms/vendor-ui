import React, { Component } from "react";

export class FilterSection extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <div className="filter-wrap ">
              <div id="filter-section" className="collapse fade">
                <div className="row">
                  <div className="col-md-12 col-lg-4">
                    <label htmlFor="docDate" className="mt-2">
                      Date range
                    </label>
                    <input
                      type="text"
                      id="docDate"
                      className="daterange form-control"
                      defaultValue="01/01/2018 - 01/15/2018"
                    />
                  </div>
                  <div className="col-md-12 col-lg-8">
                    {/* <!-- sort-group --> */}
                    <div className="form-group sort-group width-auto list-button-group">
                      <button
                        className="btn btn-outline-secondary sort sort-amount"
                        data-sort="amount"
                      >
                        Invoice Amount
                      </button>
                      <button
                        className="btn btn-outline-secondary sort sort-amount"
                        data-sort="invoice-date"
                      >
                        Invoice Date
                      </button>
                    </div>
                    {/* <!-- /sort-group --> */}
                  </div>
                </div>
              </div>

              <div className="filter-toggler">
                <button
                  className="badge badge-light collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#filter-section"
                  aria-expanded="true"
                  aria-controls="filter-section"
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FilterSection;
