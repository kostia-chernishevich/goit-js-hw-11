import axios from "axios";

 
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

export function getImagesByQuery(query) {
    if (query.trim().length === 0) {
  throw new Error("Empty query");
}
    return axios.get(BASE_URL, { params: {key:API_KEY,
  q:query,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,}, timeout: 10000 })
        .then(resp => resp.data.hits)
        .catch(err => {
  const status = err?.response?.status;
  

  let message;
  if (status === 403) {
    message = "Invalid API key";
  } else if (status === 429) {
    message = "Rate limit exceeded, try again later";
  } else {
    message = "Network or server error";
  }

  throw new Error(message);
}); 
            

    
}   