import React, { useState } from 'react';
import Modal from 'react-modal'
import { VscLinkExternal } from 'react-icons/vsc';
import { useShowContent } from '../../hooks/useShowContent';
import { IoCloseOutline } from 'react-icons/io5';

import './feature-styles.css';
import { InfoCard } from './InfoCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const AnimeItem = (anime) => {

  const [showContent, toggleShowContent] = useShowContent();
// LazyLoadImage

  // const [open, setOpen] = useState(false)

  const {
      id,
      title,
      image,
      episodes
    } = anime;


  const shortName = title.slice(0,15)
  return (
    <li className="anime__item">
      <div className="feature__content">
        <LazyLoadImage src={image} alt={title} loading="lazy" />
        <div>
          <p className="feature--title">{ shortName }...</p>
          <p className="feature--synopsis">Episodes: <small>{ episodes }</small></p>
        </div>
      </div>
      <VscLinkExternal  
        className="feature--info"
        onClick={() => toggleShowContent(showContent)}
      />

      <Modal 
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
        isOpen={showContent}>
          
          <div className="Modal--close">
            <IoCloseOutline
              className="IoCloseOutline"
              onClick={() => toggleShowContent(showContent)}
            />
          </div>  
          <InfoCard open={ toggleShowContent } {...anime}/> 

      </Modal>
    </li>
  )
}
