import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';

const API_KEY = '31766486-572375a92de9bb4d66deb6c09';

async function fetchImages(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });

  const response = await axios.get(`${BASE_URL}${searchParams}`);

  return response.data;
}

export default fetchImages;
