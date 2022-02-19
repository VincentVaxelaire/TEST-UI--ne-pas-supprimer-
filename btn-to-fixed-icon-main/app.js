/*JS for btn-to-stiky-icon*/
const btnToStikyIcon = document.querySelector('.btn-to-stiky-icon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnToStikyIcon.classList.add('stiky-icon');
    } else {
        btnToStikyIcon.classList.remove('stiky-icon');
    }
})