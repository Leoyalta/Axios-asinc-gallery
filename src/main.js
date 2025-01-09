import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const optionsLight = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery-link', optionsLight);

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  resetOnHover: true,
  timeout: 2500,
  color: 'red',
  position: 'topRight',
  safesearch: true,
});

import fetchImages from './js/pixabay-api.js';
import renderGalleryMurkup from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const galleyList = document.querySelector('.gallery-list');
const loaderVisibilty = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
let seachQuery = '';
let currentPage = 1;
let totalPages = '';

searchForm.addEventListener('submit', onRenderGalleyItems);
loadMoreBtn.addEventListener('click', onLoadMoreClick);
async function onRenderGalleyItems(evt) {
  evt.preventDefault();
  seachQuery = evt.target.elements.searchWord.value.trim();

  if (seachQuery === '') {
    iziToast.show({
      title: 'Hay',
      message: 'Enter some value please.',
    });
    evt.target.reset();
    return;
  }
  galleyList.innerHTML = '';
  loaderVisibilty.classList.remove('is-hiden');

  try {
    const { hits } = await fetchImages(seachQuery, currentPage); // деструкуризаця response.data

    if (hits.length === 0) {
      loadMoreBtn.classList.add('is-hiden');
      iziToast.show({
        title: 'Hay',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loadMoreBtn.classList.add('is-hiden');
      evt.target.reset();
      return;
    }

    galleyList.insertAdjacentHTML('beforeEnd', renderGalleryMurkup(hits));
    loadMoreBtn.classList.remove('is-hiden');
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: `${error.message}`,
    });
  } finally {
    loaderVisibilty.classList.add('is-hiden');
    evt.target.reset();
  }
}

async function onLoadMoreClick() {
  currentPage += 1; // Increment the page number

  try {
    loaderVisibilty.classList.remove('is-hiden');
    const { hits, totalHits } = await fetchImages(seachQuery, currentPage);
    totalPages = Math.ceil(totalHits / 12);

    if (currentPage > totalPages) {
      iziToast.show({
        title: 'Hey',
        message: 'There is no more images!',
      });
      loaderVisibilty.classList.add('is-hiden');
      loadMoreBtn.classList.add('is-hiden');

      return;
    }
    galleyList.insertAdjacentHTML('beforeEnd', renderGalleryMurkup(hits));

    loaderVisibilty.classList.add('is-hiden');
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: `${error.message}`,
    });
  }
}
