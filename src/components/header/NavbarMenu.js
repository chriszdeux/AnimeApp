import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoReorderFourSharp as MenuIcon, IoSearchOutline, IoCloseOutline as CloseIcon} from 'react-icons/io5';

import { useFetchAnime, useFetchGenreAnime, useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';


import './menu.css'
import { SearchInput } from './SearchInput';
import { AbcChart } from './AbcChart';
import { AnimeGenreItem } from './AnimeGenreItem';


export const NavbarMenu = () => {


  const [showContent, toggleShowContent] = useShowContent();
  const [anime, setAnime] = useState('');
  const { data, loading } = useFetchAnime(anime);
  const { genreData } = useFetchGenreAnime();

  // debugger
  useEffect(() => {
    
  }, [anime])

  useEffect(() => {

  }, [ genreData ])
  console.log(data)
  
  return (
    <header  >
      <nav className="menu__nav container">
        <h3>AnimeApp</h3>
        <div className="right__side__container">

            
            <MenuIcon 
              className="menu--icons"
              onClick={ () => toggleShowContent(showContent)}
            /> 

            <Modal
              ariaHideApp={ false }
              className="menu__modal"
              overlayClassName="menu__overlay"
              isOpen={ showContent }
            > 
              <CloseIcon className="menu--icons" onClick={ () => toggleShowContent(showContent)}/>

              <SearchInput setAnime={ setAnime }/>

              <AbcChart/>
              <AnimeGenreItem genreData={ genreData }/>
            </Modal>
        </div>
      </nav>
      {/* {
        showContent && < SearchInput setAnime={ setAnime }/>
      } */}
    </header>
  )
}
