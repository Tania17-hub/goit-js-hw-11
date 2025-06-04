import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchText = e.currentTarget.elements['search-text'].value.trim();

  if (!searchText) return;

  clearGallery(); // Очищаємо галерею
  showLoader(); // Вмикаємо лоадер

  try {
    const images = await getImagesByQuery(searchText);
    createGallery(images); // Тут всередині викликається lightbox.refresh()
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
  } finally {
    hideLoader();
  }
});
