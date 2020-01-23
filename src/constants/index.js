export const API_KEY = '9dbaa60a5bc200c71275470164b49b92';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const getW300ImageUrl = imagePath => `${BASE_IMAGE_URL}w300${imagePath}`;
export const getW500ImageUrl = imagePath => `${BASE_IMAGE_URL}w500${imagePath}`;
export const getW780ImageUrl = imagePath => `${BASE_IMAGE_URL}w780${imagePath}`;
export const getW1280ImageUrl = imagePath =>
    `${BASE_IMAGE_URL}w1280${imagePath}`;
