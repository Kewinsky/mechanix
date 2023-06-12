import ReactImageGallery from "react-image-gallery";
import "./ImageGalleryStyles.scss";

const ImageGalleryComponent = ({ images }) => {
  return <ReactImageGallery items={images} />;
};

export default ImageGalleryComponent;
