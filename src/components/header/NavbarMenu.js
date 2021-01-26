import React, { useEffect, useState } from 'react';
import { IoReorderFourSharp, IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
// import { IoSearchOutline } from 'react-icons/ri';

import { useFetchAnime, useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';


import './menu.css'
import { SearchInput } from './SearchInput';


export const NavbarMenu = () => {


  const [showContent, toggleShowContent] = useShowContent();
  const [anime, setAnime] = useState('');
  const { data, loading } = useFetchAnime(anime)
  useEffect(() => {
    
  }, [anime])
  console.log(data)
  
  return (
    <header  >
      <nav className="menu__nav container">
        <h3>AnimeApp</h3>
        <div className="right__side__container">
          {
            (!showContent)
              ? <IoSearchOutline
                  className="menu--icons"
                  onClick={ toggleShowContent }
              />
              : <IoCloseOutline 
                  className="menu--icons"
                  onClick={ toggleShowContent }
                />

              
          }

            <IoReorderFourSharp className="menu--icons"/> 
        </div>
      </nav>
      {
        showContent && < SearchInput setAnime={ setAnime }/>
      }
    </header>
  )
}
