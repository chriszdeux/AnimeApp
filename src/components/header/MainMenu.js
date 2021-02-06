import React from 'react';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import './menu.css'
export const MainMenu = () => {

  
  const [ showContent, toggleShowContent ] = useShowContent(false);
  return (
    <Modal
      ariaHideApp={false}
      className="menu__modal"
      overlayClassName="menu__overlay" 
      isOpen={showContent}      
    >
    <p>
      THIS IS A MODAL MENU
    </p>

    </Modal>
  )
}
