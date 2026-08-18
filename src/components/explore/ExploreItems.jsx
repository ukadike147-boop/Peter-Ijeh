import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ExploreItems = () => {
  const [exploreitems, setexploreitems] = useState([]);
useEffect(() => {
  axios
    .get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
    )
    .then((response) => {
  setexploreitems(response.data);
  console.log(response.data);
});
}, []);
function filterItems(filter) {
  axios
    .get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
    )
    .then((response) => {
      setexploreitems(response.data);
    });
}
  return (
    <>
      <div>
        <select
  id="filter-items"
  defaultValue=""
  onChange={(event) => filterItems(event.target.value)}
>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {exploreitems.map((exploreItem) => (
        <div
          key={exploreItem.id}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
          >
        
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img className="lazy" src={exploreItem.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <Countdown
              date={new Date(exploreItem.expiryDate).getTime()}
              renderer={({ hours, minutes, seconds }) => (
                <div className="de_countdown">
                  {hours}h {minutes}m {seconds}s
                </div>
              )}
            />

            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <div className="nft__item_share">
  <h4>Share</h4>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa fa-facebook fa-lg"></i>
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noreferrer"
  >
    <i className="fa fa-twitter fa-lg"></i>
  </a>

  <a href="mailto:">
    <i className="fa fa-envelope fa-lg"></i>
  </a>
</div>
                  </div>
                </div>
              </div>
              <Link to="/item-details">
                <img src={exploreItem.nftImage} className="lazy nft__item_preview" alt="" />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to={`/item-details/${exploreItem.nftId}`}>
                <h4>{exploreItem.title}</h4>
              </Link>
              <div className="nft__item_price">{exploreItem.price} ETH</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{exploreItem.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
