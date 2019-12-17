import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBox from "../AccountBox/AccountBox";
import Notifications from "../Notifications/Notifications";
import Logo from "../../assets/images/logo.png";
import ProfilePic from "../../assets/images/profile-pic.png";
import ClientLogo from "../../assets/images/client-logo.png";

class Navbar extends Component {
  render() {
    return (
      <header className="row">
        <nav className="col navbar navbar-expand-md ">
          <Link className="navbar-brand" to="/dashboard">
            <img src={Logo} alt="Cratosys" />
            <span> cratosys</span>
          </Link>
          {/* AccountGroup */}
          <div
            className="list-group list-group-horizontal-md user-profile"
            id="accountGroup"
          >
            <button
              className="btn dropdown notification-box-toggler has-notification"
              data-toggle="collapse"
              data-target="#notification-box"
            >
              <i className="fas fa-bell"></i>
            </button>

            <button
              className="btn dropdown account-box-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#account-box"
              aria-expanded="false"
              aria-controls="account-box"
            >
              <div className="gravatar-wrap double-gravatar-wrap">
                <img src={ProfilePic} className="gravatar" alt="username" />
                <img src={ClientLogo} className="gravatar" alt="username" />
              </div>
            </button>

            <div className="accordion-group">
              {/* NotificationBox */}
              <Notifications />
              {/* /NotificationBox */}

              {/* AccountBox */}
              <AccountBox />
              {/* /AccountBox */}
            </div>
          </div>
          {/*/ AccountGroup */}
        </nav>
      </header>
    );
  }
}

export default Navbar;
