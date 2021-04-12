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

const searchAnime = `search/anime?q=`;
const topAnimes = `top/anime/${randomPage}/upcoming`;
const top10Animes = `top/anime/1/upcoming`;
const seasonAnime = `season/2019/fall`;
// const genreAnime = `enre/anime/1/1`

export const getSearchAnimes = async ( anime ) => {

  // const animeUpper = anime.toUpperCase();
  // debugger
  try {
    if(anime !== '') {
      const response = await fetch(`${ MAIN_URL }${searchAnime}${anime}`, myCredentials);
      // debugger
      // const response = await fetch(`${ MAIN_URL }${searchAnime}${encodeURIComponent(anime)}`, myCredentials);
      const { results } = await response.json();
      // debugger
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
  
      // const top10 = animeSearch.slice(0,9);
      return animeSearch
    } 
  } catch (error) {
    // console.error(`need to try again ${error}`)
    return anime
  }
  // return anime

}

export const getTopAnimes = async () => {
  const topAnimeResponse = await fetch(`${MAIN_URL}${top10Animes}`, myCredentials);
  const { top } = await topAnimeResponse.json()
  // debugger
  const animeTop = top.map(anime => {
    return {
      id: anime.mal_id,
      title: anime.title,
      image: anime.image_url,
      url: anime.url
    }
  })


  return animeTop
}

export const getSeasonAnimes = async () => {
  const responseSeasonAnime = await fetch(`${MAIN_URL}${seasonAnime}`, myCredentials);
  const { anime } = await responseSeasonAnime.json();
  const animesSeason = anime.slice(0,20)

  const animeData = animesSeason.map(anime => {
    return {
      id: anime.mal_id,
      title: anime.title,
      score: anime.score,
      image: anime.image_url,
      genre: anime.genres,
      synopsis: anime.synopsis,
      type: anime.type,
      url: anime.url,
      episodes: anime.episodes
    }
  })


  return animeData
}

// export const getGenreAnimes = async () => {

//   let genreAnimes = [];
//   // let animeByGenre = [];
//   // let tempArray = [];

//   const repsTest = await fetch(`${MAIN_URL}genre/anime/1/`, myCredentials);
//   const myData = await repsTest.json();
//   // debugger

//   try {
//       for (let i = 1; i < 44; i ++) {
//       const response = await fetch(`${MAIN_URL}genre/anime/${i}/1`,myCredentials);

//       const { mal_url:{name} } = await response.json();
//       genreAnimes.push(name)
//       // debugger
//       // console.log(genreAnimes)
//       // return {
//         //   genreTitle: ,
//         //   animesByGenre: anime
//         // }
//         // debugger
//         // return [...name]
//         // animeByGenre = [...anime];
        
//         // genreAnimes = [genreAnimes, ...name]
//         // debugger
//         // tempArray.push(genreAnimes)
//         // debugger
//       }
//     } catch (error) {
//       console.error('data not found')
//     }
//     // console.log(genreAnimes)
//     // debugger
//     // return [genreAnimes, animeByGenre];
//     // return genreAnimes
//     // const getAnimeGenre = genreAnimes.map(category => {
//       //   // debugger
//       //   return category
//       // });
      
//       // debugger
//       // const getAnimeByGenre = animeByGenre.map(category => {
//         //   return {
//           //     // name:
//           //   }
//           // })
//           // return getAnimeGenre;
//           // debugger
//           // console.table(tempArray)
//           // debugger
//           console.log(genreAnimes)
//           // debugger
//           return genreAnimes
//         }
        
        // getGenreAnimes();