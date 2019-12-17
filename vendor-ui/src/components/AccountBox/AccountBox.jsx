import React, { Component } from "react";
import ProfilePic from "../../assets/images/profile-pic.png";
import ClientLogo from "../../assets/images/client-logo.png";
import { Link } from "react-router-dom";

export class AccountBox extends Component {
  render() {
    return (
      <div
        className="collapse account-box shadow-sm"
        id="account-box"
        data-parent="#accountGroup"
      >
        <div className="card card-body switchAccount collapse show">
          {/* UserAccount information */}
          <div className="d-flex flex-row justify-content-between border-bottom pb-2 mb-2">
            <div className="gravatar-wrap mr-2">
              <img src={ProfilePic} className="gravatar" alt="username" />
            </div>
            <div className="account-info">
              <p className="mb-0">Wilson C. Heuser</p>
              <p>
                <Link to="">XYZ inc</Link>
              </p>
            </div>
            <div className="gravatar-wrap ml-2">
              <img src={ClientLogo} className="gravatar" alt="username" />
            </div>
          </div>

          {/* /UserAccount information */}

          <ul className="list-group list-group-flush account-links-group">
            <li className="list-group-item account-links">
              <a
                href="/#"
                role="button"
                data-toggle="collapse"
                data-target=".switchAccount"
              >
                Switch Company / Location
              </a>
            </li>
            <li className="list-group-item account-links">
              <Link to="/profile">View profile</Link>
            </li>
            <li className="list-group-item account-links">
              <Link to="/">Sign out</Link>
            </li>
          </ul>
        </div>

        <div className="card card-body switchAccount collapse">
          <div className="d-flex flex-row  ">
            <form className="w-100">
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="AccountBoxCompanySelect">Company</label>
                    <select
                      className="form-control"
                      id="AccountBoxCompanySelect"
                    >
                      <option value="entity1">Company name</option>
                      <option value="entity2">Another company</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="AccountLocationSelect">Location</label>
                    <select className="form-control" id="AccountLocationSelect">
                      <option value="entity1">Entity name</option>
                      <option value="entity2">Another entity</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="btn-wrap border-top pt-3 d-flex justify-content-between">
                <a
                  href="/#"
                  className="btn btn-outline-secondary"
                  role="button"
                  data-toggle="collapse"
                  data-target=".switchAccount"
                >
                  Go back
                </a>
                <button
                  type="button"
                  className="btn btn-primary mb-0"
                  data-toggle="collapse"
                  data-target=".switchAccount"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBox;
