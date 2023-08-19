import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  function openChat(event) {
    document.querySelector(".App-header").classList.remove("closed");
    document.querySelector(".App-header").classList.add("open");
  }
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div>
                <img
                  src="images/product-1.jpg"
                  alt=""
                  class="img-responsive wc-image"
                />
              </div>

              <br />

              <div class="row">
                <div class="col-sm-4 col-xs-6">
                  <div>
                    <img
                      src="images/product-1.jpg"
                      alt=""
                      class="img-responsive"
                    />
                  </div>

                  <br />
                </div>

                <div class="col-sm-4 col-xs-6">
                  <div>
                    <img
                      src="images/product-2.jpg"
                      alt=""
                      class="img-responsive"
                    />
                  </div>

                  <br />
                </div>

                <div class="col-sm-4 col-xs-6">
                  <div>
                    <img
                      src="images/product-3.jpg"
                      alt=""
                      class="img-responsive"
                    />
                  </div>

                  <br />
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12">
              <form action="#" method="post" class="form">
                <h2>Jeep Compass</h2>

                <p class="lead">
                  ABS, Leather seats, Power Assisted Steering, Electric heated
                  seats, New HU and AU, Xenon headlights
                </p>

                <p class="lead">
                  <small>
                    <del> $11999.00</del>
                  </small>
                  <strong class="text-primary">$11779.00</strong>
                </p>
                <div className="negotiate-button" onClick={openChat}>
                  Negotiate
                </div>

                <div class="row">
                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Type</span>

                      <br />

                      <strong>Used vehicle</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Make</span>

                      <br />

                      <strong>Lorem ipsum dolor sit</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span> Model</span>

                      <br />

                      <strong>Lorem ipsum dolor sit</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>First registration</span>

                      <br />

                      <strong>05/2010</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Mileage</span>

                      <br />

                      <strong>5000 km</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Fuel</span>

                      <br />

                      <strong>Diesel</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Engine size</span>

                      <br />

                      <strong>1800 cc</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Power</span>

                      <br />

                      <strong>85 hp</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Gearbox</span>

                      <br />

                      <strong>Manual</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Number of seats</span>

                      <br />

                      <strong>4</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Doors</span>

                      <br />

                      <strong>2/3</strong>
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <p>
                      <span>Color</span>

                      <br />

                      <strong>Black</strong>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4>Vehicle Description</h4>
                </div>

                <div class="panel-body">
                  <p>
                    - Colour coded bumpers
                    <br />- Tinted glass
                    <br />- Immobiliser
                    <br />- Central locking - remote
                    <br />- Passenger airbag
                    <br />- Electric windows
                    <br />- Rear head rests
                    <br />- Radio
                    <br />- CD player
                    <br />- Ideal first car
                    <br />- Warranty
                    <br />- High level brake light
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4>Contact Details</h4>
                </div>

                <div class="panel-body">
                  <p>
                    <span>Name</span>

                    <br />

                    <strong>John Smith</strong>
                  </p>

                  <p>
                    <span>Phone</span>

                    <br />

                    <strong>
                      <a href="tel:123-456-789">123-456-789</a>
                    </strong>
                  </p>

                  <p>
                    <span>Mobile phone</span>

                    <br />

                    <strong>
                      <a href="tel:456789123">456789123</a>
                    </strong>
                  </p>

                  <p>
                    <span>Email</span>

                    <br />

                    <strong>
                      <a href="mailto:john@carsales.com">john@carsales.com</a>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
