import { useEffect, useState } from "react";
import { getAnimes } from '../helpers/getFetch';

export const useFetchAnime = ( animes ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getAnimes(animes)
      .then(anime => {
        setState({
          data: anime,
          loading: false
        })
      })
  }, [animes])
  // debugger
  return state
}
