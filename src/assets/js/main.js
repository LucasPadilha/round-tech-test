const videoBannerBtn = document.querySelector('#video-banner__btn');

videoBannerBtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    const videoModal = document.querySelector('#video-modal');

    videoModal.classList.toggle('is-closed');
    body.classList.toggle('is-modal-open');
});

const modalBtn = document.querySelector('#video-modal__btn');

modalBtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    const videoModal = document.querySelector('#video-modal');

    videoModal.classList.toggle('is-closed');
    body.classList.toggle('is-modal-open');
});