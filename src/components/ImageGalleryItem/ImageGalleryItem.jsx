import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Image } from './ImageGalleryItem.styled';

function ImageGalleryItem({ image: { webformatURL, tags, largeImageURL } }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Image src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags}></img>
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
