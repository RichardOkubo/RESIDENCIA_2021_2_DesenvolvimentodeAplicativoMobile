import axios from "axios";
const API_KEY = '345411636508e2b74308228fcfc87973';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await axios.get(`${API_BASE}${endpoint}`);
   return req.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{

 getHomeList : async () =>{
    return[
        {
           slug : 'series',
           title : 'Séries',
           itens : await basicFetch(`/discover/tv?whith_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug : 'trending',
             title : 'Recomendados para Você',
             itens : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug : 'Top',
             title : 'Em Alta',
             itens :await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) ,
          },
          {
            slug : 'Action',
             title : 'Ação',
             itens : await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug : 'Comedy',
             title : 'Comédia',
             itens : await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug : 'Romance',
             title : 'Romance',
             itens : await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug : 'history',
             title : 'História',
             itens : await basicFetch(`/discover/movie?with_genres=36&language=pt-BR&api_key=${API_KEY}`),
          },
        ]
    }
    ,  
    getMovieInfo: async (movieId,type) =>{
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;

                case 'tv': 
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    } 

}