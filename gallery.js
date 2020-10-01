(() => {
  const gallery = document.querySelector('.gallery');
  const imageView = document.querySelector('.image-view');
  const images = document.createDocumentFragment();

  imageView.addEventListener('click', closeImageView);

  for (let i = 1; i <= 24; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', `https://picsum.photos/seed/${i}/300`);
    img.setAttribute('alt', `Image ${i}`);
    img.dataset.seed = i;
    img.classList.add('image');
    img.addEventListener('click', openImageView);
    div.classList.add('image-container');
    div.appendChild(img);
    images.appendChild(div);
  }
  
  gallery.insertBefore(images, gallery.children[1]);

  function openImageView(e) {
    const { alt, dataset: { seed } } = e.target;
    const img = document.createElement('img');
    img.setAttribute('src', `https://picsum.photos/seed/${seed}/800`);
    img.setAttribute('alt', alt);
    img.classList.add('image-view-image');
    img.addEventListener('load', e => e.target.style.opacity = 1);
    imageView.appendChild(img);
    imageView.classList.add('image-view-active');
  }
  
  function closeImageView() {
    imageView.classList.remove('image-view-active');
    imageView.textContent = '';
  }
})(); 