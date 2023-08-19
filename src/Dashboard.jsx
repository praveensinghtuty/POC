import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const url = "http://localhost:8080/api/cars?soldOut=false";
  const getImage = () => {
    return "/images/product-" + Math.ceil(Math.random() * 6) + ".jpg";
  };
  const getKm = () => {
    return Math.ceil(Math.random() * 50000 + 10000) + "Kms";
  };
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState({});
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
              {data?.map((obj, index) => {
                return (
                  <div className="single-card">
                    <div className="car-section">
                      <div className="image-col">
                        <img src={getImage()} alt="Img" />
                      </div>
                      <div className="car-details-col">
                        <h2>{obj.make + " " + obj.model}</h2>
                        <h3>{obj.year}</h3>
                        <ul>
                          <li>{getKm()}</li>
                        </ul>
                        {obj.soldOut && (
                          <>
                            <ul>
                              <li>Accepted Bid Amount:</li>
                              <li>{obj.acceptedBidAmount}</li>
                            </ul>
                            <ul>
                              <li>Buyer:</li>
                              <li>{obj.buyer}</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="bid-section">
                      <div className="left-col">
                        <h3>Price</h3>
                        <h2>
                          <strong>{"$" + obj.minBidAmount}</strong>
                        </h2>
                      </div>
                      <div className="button-col">
                        <button
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => setVehicle(obj)}
                        >
                          Bid
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                  Bid for {vehicle.make + " " + vehicle.model}
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
                      value={vehicle.id}
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
