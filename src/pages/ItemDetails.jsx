import React, { useEffect, useState } from "react";
import axios from "axios";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
const ItemDetails = () => {
  const { nftId } = useParams();
  const [itemdetails, setitemdetails] = useState({});
useEffect(() => {
  axios.get(
  `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
)
    .then((response) => {
  setitemdetails(response.data);
  console.log(response.data);
});
}, [nftId]);
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section
  aria-label="section"
  className="mt90 sm-mt-0"
  data-aos="fade-up"
>
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
  src={itemdetails.nftImage}
  className="img-fluid img-rounded mb-sm-30 nft-image"
  alt=""
/>
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                  {itemdetails.title} #{itemdetails.tag}
                  </h2>

                  <div className="item_info_views">
  <i className="fa fa-eye"></i>
  {itemdetails.views}
</div>
                    <div className="item_info_like">
  <i className="fa fa-heart"></i>
  {itemdetails.likes}
</div>
                  </div>
                  <p>{itemdetails.description}</p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemdetails.ownerId}`}>
                          <img className="lazy" src={itemdetails.ownerImage} alt="" />
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemdetails.ownerId}`}>
                            {itemdetails.ownerName}
                           </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
<div className="item_author">
  <div className="author_list_pp">
    <Link to={`/author/${itemdetails.creatorId}`}>
      <img
        className="lazy"
        src={itemdetails.creatorImage}
        alt=""
      />
      <i className="fa fa-check"></i>
    </Link>
  </div>

  <div className="author_list_info">
    <Link to={`/author/${itemdetails.creatorId}`}>
      {itemdetails.creatorName}
    </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{itemdetails.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </section>
      </div>
      </div>
  );
};

export default ItemDetails;