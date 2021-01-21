import { useEffect, useState } from "react";
import {  getSearchAnimes, getTopAnimes } from '../helpers/getFetch';

export const useFetchAnime = ( animes ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getSearchAnimes(animes)
      .then(anime => {
        setState({
          data: anime,
          loading: false
        })
      })
  }, [animes])

  return state
}

export const useFetchTopAnime = () => {
  // debugger
  const [state, setState] = useState({
    topData: [],
    loading: true
  });

  useEffect(() => {
    getTopAnimes()
      .then(img => {
        // debugger
        setState({
          topData: img,
          loading: false
        })
      })
  }, [ ])

  return state
}