import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoSmall from "../../assets/images/logo-sm.png";
import SearchInvoiceList from "../SearchInvoiceList/SearchInvoiceList";

export class SearchResults extends Component {
  render() {
    return (
      <div
        id="search-result-section"
        className="search-result-section search-toggle collapse fade"
      >
        <div className="tags-wrap">
          <ul className="list-unstyled filter-indicator mb-3">
            <li className="dismissable-tag" id="dismissable0">
              <span className="badge">
                Unique Id: <strong>103198780 - 103198800</strong>
                <Link to="#" data-target="#dismissable0">
                  &times;
                </Link>
              </span>
            </li>
            <li className="dismissable-tag" id="dismissable1">
              <span className="badge">
                Company code: <strong>A101</strong>
                <Link to="#" data-target="#dismissable1">
                  &times;
                </Link>
              </span>
            </li>
            <li className="dismissable-tag" id="dismissable2">
              <span className="badge">
                Location code: <strong>Loc234</strong>
                <Link to="#" data-target="#dismissable2">
                  &times;
                </Link>
              </span>
            </li>
            <li className="dismissable-tag" id="dismissable3">
              <span className="badge">
                Submitted through: <strong>Web</strong>
                <Link to="#" data-target="#dismissable3">
                  &times;
                </Link>
              </span>
            </li>
            <li className="dismissable-tag" id="dismissable4">
              <span className="badge">
                Vendor type: <strong>Fintech Vendor</strong>
                <Link to="#" data-target="#dismissable4">
                  &times;
                </Link>
              </span>
            </li>
          </ul>

          <div className="btn-wrap">
            {/* <!-- NOTE: 'Save' button appears only when a new search is made
        or when user manipulates saved search --> */}
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-toggle="modal"
              data-target="#saveSearchModal"
            >
              <i className="fas fa-save"></i> Save this search
            </button>
            <button type="button" className="btn btn-outline-primary">
              <i className="fas fa-file-excel"></i> Download
            </button>
          </div>
        </div>

        <div id="invoices-list" className="invoices-list">
          <div className="row list">
            <SearchInvoiceList />
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
    );
  }
}

export default SearchResults;
