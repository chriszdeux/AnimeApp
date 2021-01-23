import React from 'react';
import { FeatureAnimes } from './components/feature/FeatureAnimes';
import { NavbarMenu } from './components/header/NavbarMenu';
import { Hero } from './components/hero/Hero';
import { Top10Anime } from './components/top10/Top10Anime';

import './main-styles.css'
// const randomAnime = Math.floor(Math.random() * 49) + 1;


export const AnimeApp = () => {
  // debugger
  return (
    <>
      <NavbarMenu />
      <Hero />
      <Top10Anime />
      <FeatureAnimes />
    </>

  )
}
