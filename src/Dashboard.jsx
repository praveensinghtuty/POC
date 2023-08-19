import React from "react";
const Dashboard = () => {
  return (
    <div className="dashboard-home">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#1" data-toggle="tab">
              Buyers
            </a>
          </li>
          <li>
            <a href="#2" data-toggle="tab">
              Sellers
            </a>
          </li>
        </ul>
        <div class="tab-content ">
          <div class="tab-pane active" id="1">
            <div className="cars-list">
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-5-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Porsche 911</h2>
                    <h3>2016</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$13000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-1-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Hyndai Elantra </h2>
                    <h3>2015</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$14000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-6-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Hyndai Verna</h2>
                    <h3>2014</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$15000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-2-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Hyndai Creta</h2>
                    <h3>2014</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$16000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-3-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Hyndai Venu</h2>
                    <h3>2013</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$17000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-card">
                <div className="car-section">
                  <div className="image-col">
                    <img src="/images/product-4-720x480.jpg" alt="Img" />
                  </div>
                  <div className="car-details-col">
                    <h2>Hyndai Exter</h2>
                    <h3>2013</h3>
                    <ul>
                      <li>33,637 km</li>
                      <li>| Car</li>
                      <li>| 2dr Cpe Carrera 4</li>
                    </ul>
                  </div>
                </div>
                <div className="bid-section">
                  <div className="left-col">
                    <h3>Price</h3>
                    <h2>
                      <strong>$18000</strong>
                    </h2>
                  </div>
                  <div className="button-col">
                    <button data-toggle="modal" data-target="#exampleModal">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="2">
            <div className="seller-form">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Make
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="car-id"
                    name="car_id"
                    value={""}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Model
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="buyer-id"
                    name="buyer_id"
                    value={""}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Year
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="bid-amount"
                    name="bid_amount"
                    value={""}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Min Bid Amount (Floor Price)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="max-bid-amount"
                    name="max_bid_amount"
                    value={""}
                  />
                </div>
                <button className="button-style">List for Bidding</button>
              </form>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel">
                  Bid for Porsche 911
                </h2>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Card Id
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="car-id"
                      name="car_id"
                      value={""}
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Buyer Id
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="buyer-id"
                      name="buyer_id"
                      value={""}
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Bid Amount
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="bid-amount"
                      name="bid_amount"
                      value={""}
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Max Bid Amount
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="max-bid-amount"
                      name="max_bid_amount"
                      value={""}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
