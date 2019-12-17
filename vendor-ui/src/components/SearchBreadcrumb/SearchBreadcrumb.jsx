import React from "react";

function SearchBreadcrumb() {
  return (
    <div className="page-top-actions">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <a href="cratoconnect.html" className="btn btn-link">
              <i className="fas fa-arrow-alt-circle-left mr-1"></i>Home
            </a>
            Advanced Search
          </li>
        </ol>
      </nav>

      {/* <!-- NOTE:
    This section comes only if the logged-in user has already saved any search
    In that case, the filter section will be pre-filled as specified in the default saved search
  --> */}
      <form className="d-flex align-items-center">
        {/* <!-- NOTE: when ever this select is changed, the whole filter section should be updated based on this selection --> */}
        <select className="form-control mx-2" id="savedSearches">
          <option>myDailySearch</option>
          <option>myWeeklySearch</option>
        </select>
        <button
          id="savedSearchButton"
          className="btn btn-sm btn-secondary text-nowrap"
          type="button"
        >
          Run Saved Search
        </button>
      </form>
    </div>
  );
}

export default SearchBreadcrumb;
