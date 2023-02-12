import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { showModal } = this.state;

    return (
      <>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
