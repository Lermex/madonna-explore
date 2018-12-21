document.addEventListener('DOMContentLoaded', () => {
    new LuminousGallery(document.querySelectorAll('.luminous-gallery'));

    // burger toggle
    document.querySelectorAll('.burger-button').forEach(el => {
        el.addEventListener('click', () => {
            document.getElementById('main-nav').classList.toggle('is-active');
            el.classList.toggle('is-active');
        });
    });
});