import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageContainer, Item } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageContainer>
      {images.map(image => (
        <Item key={image.id}>
          <ImageGalleryItem image={image} />
        </Item>
      ))}
    </ImageContainer>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
