const savedImage = document.getElementById('saved-image');
const imageData = localStorage.getItem('image');
savedImage.src = imageData;