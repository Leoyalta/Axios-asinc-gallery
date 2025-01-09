export default function renderGalleryMurkup(images) {
  return images
    .map(image => {
      return `
      <li class="item-card">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="small-img" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="text-box-list">
          <li class="text-box">
            <p class="text-content">Likes:</p>
            <p class="text-values">${image.likes}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Views:</p>
            <p class="text-values">${image.views}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Comments:</p>
            <p class="text-values">${image.comments}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Downloads:</p>
            <p class="text-values">${image.downloads}</p>
          </li>
        </ul>
      </li>
      `;
    })
    .join('');
}
