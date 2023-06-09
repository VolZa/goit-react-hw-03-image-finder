import PropTypes from 'prop-types';
import { GaleryImage, GaleryBigImage, GaleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
   isModal: false,
  }

  toggleModal = () => {
    this.setState(({isModal}) => ({ isModal: !isModal }));
  }

   render () {
      const {largeImageURL, webformatURL, tags } = this.props.image;
      const { isModal } = this.state;
 
      return (
         <> 
            <GaleryItem onClick={this.toggleModal}>
               <GaleryImage src={webformatURL} alt={tags} width="320" />
            </GaleryItem>
            {isModal && (
               <Modal onClose={this.toggleModal}>
                  <GaleryBigImage src={largeImageURL} alt={tags} />
               </Modal>
            )}
  
         </>  
      )
   }
}


ImageGalleryItem.propTypes = {
   image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
   // togleModal: PropTypes.func.isRequired 
}

// {images.map(el => (
//    <GaleryItem key={el.id} onClick={e => {togleModal(el.largeImageURL, el.tags)}} >
//       <GaleryImage loading="lazy" 
//          src={el.webformatURL} alt={el.tags} 
//       />
//    </GaleryItem>
// ))}



//Ігор Кальчин
// const ImageGalleryItem = ({ images,  onClick }) => {
//    const { webformatURL, largeImageURL, tags } = images;
//    return ( 
//       <GaleryItem>
//          <GaleryImage src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL)} />
//       </GaleryItem>
//    )
// };

// ImageGalleryItem.propTypes = {
//    hit: PropTypes.shape({
//        webformatURL: PropTypes.string,
//        largeImageURL: PropTypes.string,
//    }),
//    onClick: PropTypes.func.isRequired,
// };