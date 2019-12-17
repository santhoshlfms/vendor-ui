import React from "react";
import { Link } from "react-router-dom";
import LogoFull from "../../assets/images/logo-full.png";
import ClientLogo from "../../assets/images/client-logo.png";
class Authentication extends React.Component {
  constructor(props) {
    super(props);

    // We declare the state as shown below

    this.state = {
      x: "This is x from state",
      y: "This is y from state"
    };
  }

  // this is the html render
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-lg-4 d-md-none d-lg-block">
          <div className="marketing-box"></div>
        </div>
        <div className="col-md-12 col-lg-8 signin-bg">
          <div className="signin-wrap">
            <img src={LogoFull} className="logo" alt="logo" />

            <form id="signin1Form" className="signin-form collapse show">
              <h3>Login</h3>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="loginEmail">Email address</label>
                    <input
                      type="text"
                      id="loginEmail"
                      className="form-control is-invalid"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please enter the registered email address.
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-wrap bordered pt-3 d-flex justify-content-between">
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="button"
                  id="signin1"
                >
                  Proceed to Login
                </button>
              </div>
            </form>

            <form id="signin2Form" className="collapse">
              <h3>Login</h3>

              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label>Email address</label>
                    {/* <!-- Wilson C. Heuser --> */}
                    <p className="pre-populated-text">wilson.heuser@xyz.com</p>
                  </div>

                  {/* <!-- NOTE: this 'col' block of code is added only for a business user. --> */}
                  <div className="col">
                    <div className="gravatar-wrap ml-auto">
                      <img
                        src={ClientLogo}
                        className="gravatar"
                        alt="companyName"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- NOTE:
            This 'form-group' will appear only if the Accountant user has more than one company.
            This will not appear for business user
          --> */}
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="companyId">Company Id</label>
                    <select className="form-control" id="companyId">
                      <option value="">Company 1</option>
                      <option value="">Other Company 2</option>
                      <option value="">Another Company 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group mb-0">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="passwordInput">Password</label>

                    <div className="input-group" id="show_hide_password">
                      <input
                        className="form-control"
                        type="password"
                        id="passwordInput"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="showHideTrigger">
                          <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group form-check">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberPassword"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPassword"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="col text-right">
                    <a
                      href="forgot-password.html"
                      className="btn btn-link pt-0"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>

              <div className="btn-wrap bordered pt-3 d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="signin2Back"
                >
                  Go Back
                </button>
                <button className="btn btn-primary" type="button" id="signin2">
                  Login
                </button>
              </div>
            </form>

            <form id="signin3Form" className="collapse">
              <h3>Pin Verification</h3>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <p className="pre-populated-text">
                      Enter the verification code we just sent to your phone /
                      email address
                    </p>
                  </div>
                </div>
              </div>

              <div className="form-row" id="verificationInputWrap">
                <div className="col-md-12 col-lg-8">
                  <input
                    type="text"
                    className="verfication-input"
                    maxLength="1"
                    size="1"
                    min="0"
                    max="9"
                    pattern="[0-9]{1}"
                  />
                  <input
                    type="text"
                    className="verfication-input"
                    maxLength="1"
                    size="1"
                    min="0"
                    max="9"
                    pattern="[0-9]{1}"
                  />
                  <input
                    type="text"
                    className="verfication-input"
                    maxLength="1"
                    size="1"
                    min="0"
                    max="9"
                    pattern="[0-9]{1}"
                  />
                  <input
                    type="text"
                    className="verfication-input"
                    maxLength="1"
                    size="1"
                    min="0"
                    max="9"
                    pattern="[0-9]{1}"
                  />
                </div>
                <div className="col-md-12 col-lg-4">
                  <Link
                    to="#"
                    className="btn btn-link d-inline-block mt-2 text-nowrap float-right"
                  >
                    Resend code
                  </Link>
                  {/* <!-- TODO: showCounter(); delay(counterTime).hideCounter().showResend(); resend.on('click', showCounter) --> */}
                </div>
              </div>

              <div className="form-group form-check trust-device">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="trustDevice"
                    />
                    <label className="form-check-label" htmlFor="trustDevice">
                      I login frequently from this device. Don't ask for
                      verification code again
                    </label>
                  </div>
                </div>
              </div>

              <div className="btn-wrap bordered pt-3 d-flex justify-content-between">
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Verify your account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;
