import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const NewItems = () => {
  const [newitems, setnewitems] = useState([]);
useEffect(() => {
  axios
    .get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    )
    .then((response) => {
  setnewitems(response.data);
  console.log(response.data);
});
}, []);
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {newitems.map((newItem) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" 
            key={newItem.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Monica Lucas"
                  >
                    <img className="lazy" src={newItem.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <Countdown
  date={new Date(newItem.expiryDate).getTime()}
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

                  <Link to={`/item-details/${item.nftId}`}>
                    <img
                      src={newItem.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${item.nftId}`}>
                    <h4>{newItem.title}</h4>
                  </Link>
                  <div className="nft__item_price">{newItem.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{newItem.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
