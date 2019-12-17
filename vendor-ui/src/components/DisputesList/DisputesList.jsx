import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../Config/Config";

class DisputesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenActive: true,
      isPendingActive: true,
      isClosedActive: true,
      ticketsList: config.tickets
    };
  }
  handleTicketChanges = (e, type) => {
    if (type === "open") {
      this.setState({ isOpenActive: !this.state.isOpenActive });
    } else if (type === "closed") {
      this.setState({ isClosedActive: !this.state.isClosedActive });
    } else {
      this.setState({ isPendingActive: !this.state.isPendingActive });
    }
    console.log(
      this.state.isClosedActive,
      this.state.isOpenActive,
      this.state.isPendingActive
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 mb-3">
            <form action="">
              <div className="d-flex">
                <div className="custom-control custom-switch ml-3 mr-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked={true}
                    onChange={e => {
                      this.handleTicketChanges(e, "open");
                    }}
                    id="showOpen"
                  />
                  <label className="custom-control-label" htmlFor="showOpen">
                    Open Disputes
                  </label>
                </div>

                <div className="custom-control custom-switch ml-3 mr-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked={true}
                    onChange={e => {
                      this.handleTicketChanges(e, "pending");
                    }}
                    id="showPending"
                  />
                  <label className="custom-control-label" htmlFor="showPending">
                    Pending Disputes
                  </label>
                </div>

                <div className="custom-control custom-switch ml-3 mr-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked={true}
                    onChange={e => {
                      this.handleTicketChanges(e, "closed");
                    }}
                    id="showClosed"
                  />
                  <label className="custom-control-label" htmlFor="showClosed">
                    Closed Disputes
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="list-group mb-4">
              <Link
                to="#"
                className="list-group-item list-group-item-action list-group-item-light disabled"
              >
                In-process
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-danger badge-pill">Open</span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-secondary badge-pill">
                      Pending
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
            </div>

            <div className="list-group mb-4">
              <Link
                to="#"
                className="list-group-item list-group-item-action list-group-item-light disabled"
              >
                Awaiting Payment
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="list-group mb-4">
              <Link
                to="#"
                className="list-group-item list-group-item-action list-group-item-light disabled"
              >
                Paid Invoices
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
            </div>

            <div className="list-group mb-4">
              <Link
                to="#"
                className="list-group-item list-group-item-action list-group-item-light disabled"
              >
                Cancelled Invoices
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action"
                data-toggle="modal"
                data-target="#viewTicketModal"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <span className="badge badge-success badge-pill">
                      Closed
                    </span>{" "}
                    Ticket AB12340987
                  </h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">Payment reminder</small>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DisputesList;
