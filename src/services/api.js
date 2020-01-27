import axios from 'axios';
import { API_KEY, BASE_IMAGE_URL } from '../constants';

export const BASE_URL = 'https://api.themoviedvb/3';
export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';
export const BASE_URL_DETAIL = '/movie/{movie_id}';

export function getImage(path, size) {
    return `${BASE_URL_IMAGE}/w${size}${path}`;
}
export function getDetail(lang = 'en-US', movieID) {
    return `${BASE_URL}/movie/{movieID}?api_key=${API_KEY}`;
}

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
    },
});
export default api;
// export default async function apiRequest(path, lang = 'en') {
//     return api
//         .get(`${BASE_URL}${path}?api_key=${API_KEY}&language=${lang}`)
//         .then(resp => resp.json());
// }

// export default api;
