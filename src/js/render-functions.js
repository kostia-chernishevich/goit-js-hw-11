import SimpleLightbox from "simplelightbox";

let lightbox;

const gallery = document.querySelector('.gallery')

export function initLightbox(selector = '.gallery a') {

    lightbox = new SimpleLightbox(selector, { captionsData: "alt", captionDelay: 250 });

}
export function refreshLightbox() {
    if (lightbox) {
        lightbox.refresh();
     }
}
 
export function createGallery(images) {
    const markup = images.map(image => 
        `<li class="card">
  <a href="${image.largeImageURL}" rel="noopener noreferrer">
    <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
  </a>
  <ul class="stats">
    <li><span>Likes</span><span>${image.likes}</span></li>
    <li><span>Views</span><span>${image.views}</span></li>
    <li><span>Comments</span><span>${image.comments}</span></li>
    <li><span>Downloads</span><span>${image.downloads}</span></li>
  </ul>
</li>
`
    
    ).join(''); 

    gallery.innerHTML = markup;

    refreshLightbox();
}
export function clearGallery() {
    gallery.innerHTML = "";
    }

const loader = document.querySelector('#loader');

export function showLoader() {
    if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
    if (loader) loader.classList.add('hidden');
}
