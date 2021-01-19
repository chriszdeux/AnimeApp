export const getAnimes = async ( anime ) => {

  const MAIN_URL = 'https://jikan1.p.rapidapi.com/search/anime?q=';
  const API_KEY = 'ebf8bbd763msh2c1131faf74d8c1p183bb1jsncfee2231dc88';
  const HOST = 'jikan1.p.rapidapi.com';
  const myCredentials = {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": HOST
    }
  } 
  // debugger
  if(anime !== '') {
    const response = await fetch(`${ MAIN_URL }${encodeURIComponent(anime)}`, myCredentials);
    // debugger
    const { results } = await response.json()
    // const response = await fetch(`${ MAIN_URL }${ encodeURIComponent(anime) }`, myCredentials)
    const animeSearch = results.map(anime => {
      return {
        title: anime.title,
        description: anime.synopsis,
        img: anime?.image_url,
        type: anime.type,
        episodes: anime.episodes,
        url: anime.url
      }
    })

    // console.log(animeSearch)
    return animeSearch
  } 
  return anime
  

  // debugger
}