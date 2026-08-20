import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
const AuthorItems = ({ authorId }) => {
  const [authoritems, setauthoritems] = useState({});
useEffect(() => {
  axios.get(
  `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
)
    .then((response) => {
  setauthoritems(response.data);
  console.log(response.data);
});
}, [authorId]);
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authoritems.nftCollection?.map((authorItem) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" 
            key={authorItem.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img
  className="lazy"
  src={authoritems.authorImage}
  alt=""/>
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
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
                  <Link to={`/item-details/${authorItem.nftId}`}>
                    <img
  src={authorItem.nftImage}
  className="lazy nft__item_preview"
  alt=""/>
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${authorItem.nftId}`}>
                    <h4>{authorItem.title}</h4>
                  </Link>
                  <div className="nft__item_price">{authorItem.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{authorItem.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
