const clickedElements = {};

document.addEventListener('click', function(event) {
  const n = 10;
  const elementId = (n % 10) + 1;
  const netxtElementId = elementId + 1;
  if (event.target.id === `element${elementId}`) {
    if (!clickedElements[`element${elementId}`]) {
      document.getElementById(`element${elementId}`).classList.add('highlight');
      clickedElements[`element${elementId}`] = true;
    } else {
      event.target.classList.toggle('highlight');
    }
  } else {
    let querySelectorElement = document.querySelector(`#element${netxtElementId}`);
    if (querySelectorElement) {
      if (!clickedElements[`element${netxtElementId}`]) {
        querySelectorElement.classList.add('highlightNext');
        clickedElements[`element${netxtElementId}`] = true;
      } else {
        querySelectorElement.classList.toggle('highlightNext');
      }
    }
  }
});

// Функція для додавання зображення
function addImage() {
  const imageContainer = document.querySelector('#myImage');
  if (!imageContainer) return;

  const newImage = document.createElement('img');
  newImage.id = 'myImage';
  newImage.src = imageContainer.src.split('/')[imageContainer.src.split('/').length - 1] === 'photo_2022-10-05_14-17-41.jpg' ? 'london.jpg' : 'photo_2022-10-05_14-17-41.jpg';
  newImage.alt = 'Oops';
  imageContainer.parentNode.replaceChild(newImage, imageContainer);
}

// Функція для збільшення розміру зображення
function increaseImageSize() {
  const image = document.getElementById('myImage');
  if (image) {
    const currentWidth = image.clientWidth;
    const currentHeight = image.clientHeight;
    image.style.width = `${currentWidth * 1.2}px`;
    image.style.height = `${currentHeight * 1.2}px`;
  }
}

// Функція для зменшення розміру зображення
function decreaseImageSize() {
  const image = document.getElementById('myImage');
  if (image) {
    const currentWidth = image.clientWidth;
    const currentHeight = image.clientHeight;
    image.style.width = `${currentWidth * 0.8}px`;
    image.style.height = `${currentHeight * 0.8}px`;
  }
}

// Функція для видалення зображення
function deleteImage() {
  const image = document.getElementById('myImage');
  if (image) {
    image.parentNode.removeChild(image);
  }
}
