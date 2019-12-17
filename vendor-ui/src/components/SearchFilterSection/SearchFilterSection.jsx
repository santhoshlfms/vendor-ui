import React, { Component } from "react";

export class SearchFilterSection extends Component {
  render() {
    return (
      <div id="filter-section" className="search-toggle collapse fade show">
        <fieldset>
          <legend>Frequenty used filters</legend>
          <div className="form-group ">
            <div className="form-row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="searchUID">
                  <span>Unique ID:</span>{" "}
                </label>
                <div className="input-group range-selector-wrap">
                  <div className="input-group-prepend">
                    <input
                      type="text"
                      className="form-control"
                      id="searchUIDStart"
                      placeholder="From"
                    />
                  </div>
                  <div className="input-group-inbetweener">
                    <span className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control"
                      id="searchUIDEnd"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="range-select-label-wrap">
                  <select className="custom-select currency-selector">
                    <option>USD</option>
                    <option>CAD</option>
                  </select>
                  <label htmlFor="amountRange">
                    <span>Amount range:</span>{" "}
                  </label>
                </div>
                <div className="input-group range-selector-wrap">
                  <div className="input-group-prepend">
                    <input
                      type="text"
                      className="form-control"
                      id="amountRangeStart"
                      placeholder="From"
                    />
                  </div>
                  <div className="input-group-inbetweener">
                    <span className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control"
                      id="amountRangeEnd"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="currentStage">Current stage</label>
                <select
                  className="selectpicker form-control"
                  id="currentStage"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <optgroup label="In-progress">
                    <option>Create</option>
                    <option>Process</option>
                    <option>Resolve</option>
                    <option>Assess</option>
                    <option>Awaiting for API</option>
                    <option>API Failed</option>
                    <option>Awaiting approval</option>
                    <option>Awaiting resolution</option>
                  </optgroup>
                  <optgroup label="Process complete">
                    <option>Posted</option>
                    <option>Cancelled</option>
                    <option>Voided</option>
                    <option>Credit Applied</option>
                    <option>Verified</option>
                    <option>Deleted</option>
                  </optgroup>
                  <optgroup label="Payment process">
                    <option>Awaiting for payment</option>
                    <option>Submitted for payment</option>
                    <option>Selected for Payment</option>
                    <option>Rejected for payment</option>
                    <option>Payment API Failed</option>
                    <option>Paid</option>
                    <option>Partially Paid</option>
                    <option>Payment Cleared</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Vendor filters</legend>
          <div className="form-group ">
            <div className="form-row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="companySelector">Company code</label>
                <select
                  className="selectpicker form-control"
                  id="companySelector"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="company1">Company 1</option>
                  <option value="company2">Company 2</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="locationSelector">Location code</label>
                <select
                  className="selectpicker form-control"
                  id="locationSelector"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="loc1">Location 1</option>
                  <option value="loc2">Location 2</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="tinSsn">TIN / SSN:</label>
                <input type="text" id="tinSsn" className="form-control" />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="vendorType">Vendor type</label>
                <select
                  className="selectpicker form-control"
                  id="vendorType"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="">Food Vendor</option>
                  <option value="">Liquor Vendor</option>
                  <option value="">Fintech Vendor</option>
                  <option value="">Non F&B Vendor</option>
                  <option value="">Professional Services</option>
                  <option value="">Utility Vendor</option>
                  <option value="">Govt Entities</option>
                  <option value="">Employee</option>
                  <option value="">Contractors</option>
                </select>
              </div>

              <div className="col-md-12 col-lg-6">
                <label htmlFor="select-vendor">Vendor name:</label>
                <select
                  id="select-vendor"
                  placeholder="Vendor name"
                  multiple
                  data-selected-text-format="count>2"
                ></select>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Document filters</legend>
          <div className="form-group ">
            <div className="form-row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="docTypeGroup">Document type grouping</label>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-sm btn-outline-secondary">
                    <input
                      type="radio"
                      name="docTypeGroup"
                      id="option1"
                      autoComplete="off"
                    />{" "}
                    Both
                  </label>
                  <label className="btn btn-sm btn-outline-secondary active">
                    <input
                      type="radio"
                      name="docTypeGroup"
                      id="option2"
                      autoComplete="off"
                    />{" "}
                    Payable
                  </label>
                  <label className="btn btn-sm btn-outline-secondary">
                    <input
                      type="radio"
                      name="docTypeGroup"
                      id="option3"
                      autoComplete="off"
                    />{" "}
                    Non-payable
                  </label>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="invoiceType">Document type</label>
                <select
                  className="selectpicker form-control"
                  id="invoiceType"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option>Invoice</option>
                  <option>Statement</option>
                  <option>Credit memo</option>
                  <option>Wire Req.</option>
                  <option>Urgent Notice</option>
                  <option>New Supplier Packet</option>
                  <option>Utility Document</option>
                  <option>Manual Payment</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="docDate">Document date</label>
                <input
                  type="text"
                  id="docDate"
                  className="daterange form-control"
                  //   value="01/01/2018 - 01/15/2018"
                />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="submittedDate">Submitted date</label>
                <input
                  type="text"
                  id="submittedDate"
                  className="daterange form-control"
                  //   value="01/01/2018 - 01/15/2018"
                />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="documentNumber">
                  <span>Document Number:</span>{" "}
                </label>
                <div className="input-group range-selector-wrap">
                  <div className="input-group-prepend">
                    <input
                      type="text"
                      className="form-control"
                      id="documentNumberStart"
                      placeholder="From"
                    />
                  </div>
                  <div className="input-group-inbetweener">
                    <span className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control"
                      id="documentNumberEnd"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="poNumber">
                  <span>PO Number:</span>{" "}
                </label>
                <div className="input-group range-selector-wrap">
                  <div className="input-group-prepend">
                    <input
                      type="text"
                      className="form-control"
                      id="poNumberStart"
                      placeholder="From"
                    />
                  </div>
                  <div className="input-group-inbetweener">
                    <span className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control"
                      id="poNumberEnd"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="receiptNumber">
                  <span>Receipt Number:</span>{" "}
                </label>
                <div className="input-group range-selector-wrap">
                  <div className="input-group-prepend">
                    <input
                      type="text"
                      className="form-control"
                      id="receiptNumberStart"
                      placeholder="From"
                    />
                  </div>
                  <div className="input-group-inbetweener">
                    <span className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control"
                      id="receiptNumberEnd"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="documentTags">Document Tags</label>
                <select
                  className="selectpicker form-control"
                  id="documentTags"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option>PO missing</option>
                  <option>Wrong tax amount</option>
                  <option>Location mismatch</option>
                  <option>Account number mismatch</option>
                  <option>Product delayed</option>
                  <option>Service delayed</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Process filters</legend>
          <div className="form-group ">
            <div className="form-row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="submittedThru">Submitted through</label>
                <select
                  className="selectpicker form-control"
                  id="submittedThru"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="submittedMob">Mobile</option>
                  <option value="submittedWeb">Web</option>
                  <option value="submittedEmail">Email</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="submittedBy">Submitted by</label>
                <select
                  className="selectpicker form-control"
                  id="submittedBy"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="submitter00">Mario Speedwagon</option>
                  <option value="submitter01">Paige Turner</option>
                  <option value="submitter02">Nick R. Bocker</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="processType">Process type</label>
                <select
                  className="selectpicker form-control"
                  id="processType"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="processType00">EDI</option>
                  <option value="processType01">Parsing</option>
                  <option value="processType02">OCR</option>
                  <option value="processType03">Manual</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <label htmlFor="assignedTo">Assigned to</label>
                <select
                  className="selectpicker form-control"
                  id="assignedTo"
                  multiple
                  data-selected-text-format="count>2"
                >
                  <option value="All">All</option>
                  <option value="00">Mario Speedwagon</option>
                  <option value="01">Paige Turner</option>
                  <option value="02">Nick R. Bocker</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default SearchFilterSection;
