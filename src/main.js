import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";


import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  initLightbox,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-function.js";

const form = document.querySelector(".form");
const input = document.querySelector('[name="search-text"]');

initLightbox();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (query === "") {
    iziToast.warning({ message: "Enter a search query" });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((hits) => {
      if (hits.length === 0) {
        iziToast.info({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }
      createGallery(hits); 
    })
    .catch((err) => {
      iziToast.error({ message: err.message || "Network or server error" });
    })
    .finally(() => hideLoader());
});
