const MAIN_URL = 'https://jikan1.p.rapidapi.com/';
const API_KEY = 'ebf8bbd763msh2c1131faf74d8c1p183bb1jsncfee2231dc88';
const HOST = 'jikan1.p.rapidapi.com';
const myCredentials = {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": HOST
  }
} 
const randomImage = Math.floor(Math.random() * 49 )
const randomPage = Math.floor(Math.random() * 5 ) + 1

const searchAnime = `search/anime?q=`
const topAnimes = `top/anime/${randomPage}/upcoming`

// debugger
export const getSearchAnimes = async ( anime ) => {

  if(anime !== '') {
    const response = await fetch(`${ MAIN_URL }${searchAnime}${encodeURIComponent(anime)}`, myCredentials);

    const { results } = await response.json();

    
    const animeSearch = await results.map(anime => {
      return {
        title: anime.title,
        description: anime.synopsis,
        img: anime?.image_url,
        type: anime.type,
        episodes: anime.episodes,
        url: anime.url
      }
    })

    const top10 = animeSearch.slice(0,9);
    // debugger
    return animeSearch
  } 
  return anime

}

export const getTopAnimes = async () => {
  const topAnimeResponse = await fetch(`${MAIN_URL}${topAnimes}`, myCredentials);
  const { top } = await topAnimeResponse.json()
  
  // const {image_url:image, title, url} = top;
  // debugger
  const animeTop = top.map(anime => {
    return {
      title: anime.title,
      image: anime.image_url,
      url: anime.url
    }
  })

  // debugger
  return animeTop
  // return top[randomImage].image_url && top[randomImage].title && top[randomImage].url 
}