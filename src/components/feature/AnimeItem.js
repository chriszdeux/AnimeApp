import React, { useState } from 'react';
import Modal from 'react-modal'
import { VscLinkExternal } from 'react-icons/vsc';
import { useShowContent } from '../../hooks/useShowContent';
import { IoCloseOutline } from 'react-icons/io5';

import './feature-styles.css';
import { InfoCard } from './InfoCard';

export const AnimeItem = (anime) => {

  const [showContent, toggleShowContent] = useShowContent();



  const [open, setOpen] = useState(false)
  // debugger
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
        <img src={image} alt={title}/>
        <div>
          <p className="feature--title">{ shortName }...</p>
          <p className="feature--synopsis">Episodes: <small>{ episodes }</small></p>
        </div>
      </div>
      <VscLinkExternal  
        className="feature--info"
        // onClick={ toggleShowContent }
        onClick={() => setOpen(true)}
      />

      {/* {
        showContent && <InfoCard anime={ anime }/>
      } */}
      <Modal 
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
        isOpen={open}>
          
          <div className="Modal--close">
            <IoCloseOutline
              className="IoCloseOutline"
              onClick={() => setOpen(false)}
            />
          </div>  
          {/* <button onClick={() => setOpen(false)}>close</button> */}
          <InfoCard open={ setOpen } {...anime}/> 
          {/* <InfoCard /> */}

      </Modal>
      {/* <IoCloseOutline /> */}
    </li>
  )
}
