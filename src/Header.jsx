import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <section class="navbar custom-navbar" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">
              Car Dealer Website
            </a>
          </div>

          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-nav-first">
              <Link to="/">Dashboard</Link>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
