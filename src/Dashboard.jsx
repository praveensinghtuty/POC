import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const [sellerInput, setSellerInput] = useState({
    make: "",
    model: "",
    year: "",
    floorPrice: "",
  });
  const [bidCount, setBidCount] = useState({
    approved: 0,
    pending: 0,
    rejected: 0,
  });
  const url = "http://localhost:8080/api/cars?soldOut=false";
  const bidStatus = "http://localhost:8080/api/bids/buyer/1";
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState({});
  const [statusBid, setStatusBid] = useState([]);
  const getImage = () => {
    return "/images/product-" + Math.ceil(Math.random() * 6) + ".jpg";
  };
  const getKm = () => {
    return Math.ceil(Math.random() * 50000 + 10000) + "Kms";
  };
  const generateBidCount = (bids) => {
    const tempBidCount = {
      approved: 0,
      pending: 0,
      rejected: 0,
    };
    bids.map((bid) => {
      console.log(bid.status.toLowerCase());
      if (bid.status?.toLowerCase() === "pending")
        tempBidCount.pending = tempBidCount.pending + 1;
      else if (bid.status?.toLowerCase() === "approved")
        tempBidCount.approved = tempBidCount.approved + 1;
      else if (bid.status?.toLowerCase() === "rejected")
        tempBidCount.rejected = tempBidCount.rejected + 1;
    });
    setBidCount(tempBidCount);
  };
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };
  const fetchStatusBid = () => {
    return fetch(bidStatus)
      .then((res) => res.json())
      .then((d) => {
        setStatusBid(d);
        generateBidCount(d);
      });
  };
  const handleSellerBid = (e) => {
    const { name, value } = e.target;
    setSellerInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      sellerInput?.floorPrice !== "" ||
      sellerInput?.make !== "" ||
      sellerInput?.model !== "" ||
      sellerInput?.year !== ""
    ) {
      console.log(sellerInput);
      setSellerInput({
        make: "",
        model: "",
        year: "",
        floorPrice: "",
      });
    } else {
      alert("Please fill all the details");
    }
  };
  useEffect(() => {
    fetchInfo();
    fetchStatusBid();
  }, []);

  return (
    <div className="dashboard-home">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#1" data-toggle="tab">
              Car Lists
            </a>
          </li>
          <li>
            <a href="#2" data-toggle="tab">
              Sellers
            </a>
          </li>
          <li>
            <a href="#3" data-toggle="tab">
              Buyers Data
            </a>
          </li>
        </ul>
        <div class="tab-content ">
          {/******* Car Lists Tab *********/}
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
          {/******* Seller Tab *********/}
          <div class="tab-pane" id="2">
            <div className="seller-form">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Make
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="make"
                    name="make"
                    value={sellerInput.make}
                    onChange={handleSellerBid}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Model
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="model"
                    name="model"
                    value={sellerInput.model}
                    onChange={handleSellerBid}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Year
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="year"
                    name="year"
                    value={sellerInput.year}
                    onChange={handleSellerBid}
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Min Bid Amount (Floor Price)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="floorPrice"
                    name="floorPrice"
                    value={sellerInput.floorPrice}
                    onChange={handleSellerBid}
                  />
                </div>
                <button className="button-style">List for Bidding</button>
              </form>
            </div>
          </div>
          {/******* Bid Status Tab *********/}
          <div class="tab-pane" id="3">
            <h2 className="total-bids">
              Total Bids : <span>4</span>
            </h2>
            <div className="status-bids">
              <div className="row ">
                <div className="col-md-4">
                  <div className="bid-status">
                    <ul>
                      <li status-data="all">All Bids</li>
                      <li status-data="approved">
                        Approved Bids <span>({bidCount.approved})</span>
                      </li>
                      <li status-data="pending">
                        Pending Bids <span>({bidCount.pending})</span>
                      </li>
                      <li status-data="rejected">
                        Rejected Bids <span>({bidCount.rejected})</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="cars-list">
                    {statusBid?.map((data, index) => {
                      return (
                        <div
                          className="single-card"
                          data-status="pending"
                          key={index}
                        >
                          <div className="car-section">
                            <div className="image-col">
                              <img src={getImage()} alt="Img" />
                            </div>
                            <div className="car-details-col">
                              <h2>{data.car.make + " " + data.car.model}</h2>
                              <h3>{data.car.year}</h3>
                              <ul>
                                <li>{getKm()}</li>
                              </ul>
                              <h4 className={data.status.toLowerCase()}>
                                Status : <span>{data.status}</span>
                              </h4>
                            </div>
                          </div>
                          <div className="bid-section">
                            <div className="left-col">
                              <h3>Price</h3>
                              <h2>
                                <strong>$13000</strong>
                              </h2>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="single-card" data-status="approved">
                      <div className="car-section">
                        <div className="image-col">
                          <img src={getImage()} alt="Img" />
                        </div>
                        <div className="car-details-col">
                          <h2>Hyndai Elantra </h2>
                          <h3>2015</h3>
                          <ul>
                            <li>33,637 km</li>
                            <li>| Car</li>
                            <li>| 2dr Cpe Carrera 4</li>
                          </ul>
                          <h4 className="approved">
                            Status : <span>Approved</span>
                          </h4>
                        </div>
                      </div>
                      <div className="bid-section">
                        <div className="left-col">
                          <h3>Price</h3>
                          <h2>
                            <strong>$14000</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="single-card" data-status="rejected">
                      <div className="car-section">
                        <div className="image-col">
                          <img src={getImage()} alt="Img" />
                        </div>
                        <div className="car-details-col">
                          <h2>Hyndai Verna</h2>
                          <h3>2014</h3>
                          <ul>
                            <li>33,637 km</li>
                            <li>| Car</li>
                            <li>| 2dr Cpe Carrera 4</li>
                          </ul>
                          <h4 className="rejected">
                            Status : <span>Rejected</span>
                          </h4>
                        </div>
                      </div>
                      <div className="bid-section">
                        <div className="left-col">
                          <h3>Price</h3>
                          <h2>
                            <strong>$15000</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="single-card" data-status="pending">
                      <div className="car-section">
                        <div className="image-col">
                          <img src={getImage()} alt="Img" />
                        </div>
                        <div className="car-details-col">
                          <h2>Hyndai Creta</h2>
                          <h3>2014</h3>
                          <ul>
                            <li>33,637 km</li>
                            <li>| Car</li>
                            <li>| 2dr Cpe Carrera 4</li>
                          </ul>
                          <h4 className="pending">
                            Status : <span>Pending</span>
                          </h4>
                        </div>
                      </div>
                      <div className="bid-section">
                        <div className="left-col">
                          <h3>Price</h3>
                          <h2>
                            <strong>$16000</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/******* Popup Modal For Bidding *********/}
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
                      name="carId"
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
