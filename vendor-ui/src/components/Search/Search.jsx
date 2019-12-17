import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchBreadcrumb from "../SearchBreadcrumb/SearchBreadcrumb";
import SearchFilterSection from "../SearchFilterSection/SearchFilterSection";
import SearchResults from "../SearchResults/SearchResults";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: "This is x from state",
      y: "This is y from state"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-sm-12 bodyContainer">
            <SearchBreadcrumb />
            <form action="">
              <div className="row">
                <div className="col">
                  <div className="search-section">
                    <div className="filter-wrap search-filters ">
                      {/* <!-- filter --> */}
                      <SearchFilterSection />
                      {/* <!-- /filter --> */}
                      <div className="filter-toggler">
                        <button
                          className="btn btn-outline-secondary mr-3"
                          id="resetButton"
                          type="button"
                        >
                          Reset
                        </button>

                        <button
                          className="btn btn-primary"
                          id="advanceSearchButton"
                          type="button"
                          data-toggle="collapse"
                          data-target=".search-toggle"
                          aria-expanded="true"
                          aria-controls="filter-section"
                        >
                          {" "}
                          Apply filters & Search
                          <i className="fas fa-search"></i>
                        </button>

                        <button
                          className="btn btn-outline-secondary collapse"
                          id="advanceSearchModifyButton"
                          type="button"
                          data-toggle="collapse"
                          data-target=".search-toggle"
                          aria-expanded="true"
                          aria-controls="filter-section"
                        >
                          Modify Search <i className="fas fa-pencil-alt"></i>
                        </button>
                      </div>
                    </div>
                    {/* <!-- Search result --> */}
                    <SearchResults />
                    {/* <!-- /Search result --> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
