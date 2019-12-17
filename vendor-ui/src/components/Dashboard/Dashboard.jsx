import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import FilterSection from "../FilterSection/FilterSection";
import * as _ from "lodash";
import InProcessList from "../InProcessList/InProcessList";
import AwaitingPaymentList from "../AwaitingPaymentList/AwaitingPaymentList";
import PaidInvoicesList from "../PaidInvoicesList/PaidInvoicesList";
import CancelledInvoiceList from "../CancelledInvoiceList/CancelledInvoiceList";
import DisputesList from "../DisputesList/DisputesList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabs: "In-Process",
      activeFilters: [] // add Filters to this array
    };
  }

  invoiceQueueCount = {
    "In-Process": "27",
    "Awaiting Payment": "43",
    "Paid Invoices": "34",
    "Cancelled Invoices": "12",
    "All Disputes": "07"
  };
  // activeTabs = "In-Process";

  handleActiveFilters = val => {
    const { activeFilters } = this.state;
    _.remove(activeFilters, function(i) {
      return i === val;
    });
    this.setState({ activeFilters });
  };

  handleTabChange = val => {
    this.setState({ activeTabs: val });
  };

  render() {
    return (
      <div className="row">
        <div className="col bodyContainer">
          <Breadcrumb />
          <FilterSection />
          <ul
            className="nav nav-tabs invoice-tabs"
            id="ccVenorTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                href="/#"
                className="btn btn-outline-secondary new-invoice"
                data-toggle="modal"
                data-target="#newInvoiceModal"
              >
                <i className="fas fa-plus-circle"></i>{" "}
                <span>Upload Invoice</span>
              </a>
            </li>
            {Object.keys(this.invoiceQueueCount).map(tab => (
              <li className="nav-item" key={tab}>
                <a
                  className={`nav-link
                     ${this.state.activeTabs === tab ? "active" : ""}`}
                  id="inprocess-tab"
                  data-toggle="tab"
                  href="#inprocess"
                  role="tab"
                  aria-controls="inprocess"
                  aria-selected="true"
                  onClick={() => {
                    this.handleTabChange(tab);
                  }}
                >
                  <strong>{this.invoiceQueueCount[tab]}</strong>
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content pt-3" id="ccVenorTabContent">
            {/* List of Active Filters */}
            <div
              className="tab-pane fade show active"
              id="inprocess"
              role="tabpanel"
              aria-labelledby="inprocess-tab"
            >
              {this.state.activeTabs !== "All Disputes" ? (
                <div className="row">
                  <div className="col-sm-12 col-md-6 mb-3">
                    <ul className="list-unstyled filter-indicator">
                      {this.state.activeFilters.length !== 0
                        ? this.state.activeFilters.map(filter => (
                            <li key={filter}>
                              <span className="badge badge-primary">
                                {filter}
                                <a
                                  href="#0"
                                  onClick={() => {
                                    this.handleActiveFilters(filter);
                                  }}
                                >
                                  &times;
                                </a>
                              </span>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-6 mb-3">
                    <div className="header-search-wrap">
                      <form>
                        <label htmlFor="inprocessSearch">Search</label>
                        <input
                          type="text"
                          className="form-control form-rounded"
                          name="inprocessSearch"
                          id="inprocessSearch"
                        />
                        <button type="button" className="btn search-btn">
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                      <Link
                        to="/search"
                        className="btn btn-link advanced-search-btn"
                      >
                        Advanced Search
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* Below Invoice list Start */}
              {this.state.activeTabs === "In-Process" ? <InProcessList /> : ""}
              {this.state.activeTabs === "Awaiting Payment" ? (
                <AwaitingPaymentList />
              ) : (
                ""
              )}
            </div>
            {this.state.activeTabs === "Paid Invoices" ? (
              <PaidInvoicesList />
            ) : (
              ""
            )}
            {this.state.activeTabs === "Cancelled Invoices" ? (
              <CancelledInvoiceList />
            ) : (
              ""
            )}
            {this.state.activeTabs === "All Disputes" ? <DisputesList /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
