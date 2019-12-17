import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div className="page-top-actions">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Client name / Location{" "}
              <a
                href="/#"
                data-toggle="modal"
                data-target="#changeClientModal"
                className="ml-1"
              >
                <i className="fas fa-exchange-alt" aria-hidden="true"></i>{" "}
                Switch
              </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
