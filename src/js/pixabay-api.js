import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44022963-dc7d5638f3e5caf2e9b20745b';

export default async function fetchImages(q, page) {
  const searchParams = new URLSearchParams({
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  });

  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&${searchParams}`
  );

  return response.data; // Return the array of images directly
}
