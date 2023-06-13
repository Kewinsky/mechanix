import NavigationComponent from "../../components/Navigation/NavigationComponent";
import { useState } from "react";
import "./ProductStyles.scss";
import DescriptionTab from "./Description/DescriptionTab";
import SpecificationTab from "./Specification/SpecificationTab";
import ReviewsTab from "./Reviews/ReviewsTab";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsStarFill,
  BsStar,
  BsHeart,
  BsHeartFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import photo_1 from "../../assets/images/slider_photo_1.jpeg";
import photo_2 from "../../assets/images/slider_photo_2.jpeg";
import photo_3 from "../../assets/images/slider_photo_3.jpeg";
import QuantityComponent from "../../components/Quantity/QuantityComponent";
import ImageGalleryComponent from "../../components/ImageGallery/ImageGalleryComponent";
import ProductTileComponent from "../../components/ProductTile/ProductTileComponent";

const ProductPage = () => {
  const tabs = ["Description", "Specification", "Reviews"];
  const images = [
    {
      original: photo_1,
      thumbnail: photo_1,
    },
    {
      original: photo_2,
      thumbnail: photo_2,
    },
    {
      original: photo_3,
      thumbnail: photo_3,
    },
    {
      original: photo_1,
      thumbnail: photo_1,
    },
    {
      original: photo_2,
      thumbnail: photo_2,
    },
    {
      original: photo_3,
      thumbnail: photo_3,
    },
  ];
  const stars = 4;
  const blank_stars = 5 - stars;

  const [selectedTab, setSelectedTab] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [favourite, setFavourite] = useState(false);

  const handleAddtoFav = () => {
    setFavourite((current) => !current);
  };

  return (
    <div className="product-page">
      <div className="preview">
        <div className="left-column">
          <ImageGalleryComponent images={images} />
        </div>
        <div className="right-column">
          <h1>Title</h1>
          <p className="price">$ 69,00</p>
          <div className="reviews">
            {Array(stars).fill(
              <p>
                <BsStarFill />
              </p>
            )}
            {Array(blank_stars).fill(
              <p>
                <BsStar />
              </p>
            )}
            <p>13 customer reviews</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </p>
          <div className="d-flex">
            <QuantityComponent quantity={quantity} setQuantity={setQuantity} />
            <button className="add-item-button">ADD TO CART</button>
          </div>
          <div className="socials">
            <button onClick={handleAddtoFav}>
              {favourite === false ? (
                <BsHeart size="20" />
              ) : (
                <BsHeartFill size="20" />
              )}
            </button>
            <span />
            <a href="/">
              <HiOutlineMail size="20" />
            </a>
            <a href="/">
              <BsFacebook size="20" />
            </a>
            <a href="/">
              <BsInstagram size="20" />
            </a>
            <a href="/">
              <BsTwitter size="20" />
            </a>
          </div>
        </div>
      </div>
      <div className="additional-infos">
        <NavigationComponent
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div>
          {selectedTab === 0 ? (
            <DescriptionTab />
          ) : selectedTab === 1 ? (
            <SpecificationTab />
          ) : selectedTab === 2 ? (
            <ReviewsTab />
          ) : null}
        </div>
      </div>
      <div className="similar-items">
        <h1>Similar Items</h1>
        <div className="container">
          <ProductTileComponent />
          <ProductTileComponent />
          <ProductTileComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
