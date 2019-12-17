import React from "react";
import LogoFull from "../../assets/images/logo-full.png";

function Error() {
  return (
    <main role="main" className="container" id="Error-page">
      <div className="row">
        <div className="col-sm-12">
          <div className="fullPageError">
            <img src={LogoFull} className="logo" alt="Cratosys Logo" />
            <h1>
              OOPS! <span>404 - The page can't be found</span>
            </h1>
            <a href="/dashboard" className="btn btn-primary">
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Error;
