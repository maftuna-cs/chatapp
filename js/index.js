const domSideBtn = document.getElementById(`btnSide`);
const domSide = document.getElementById(`sidebar`);

domSideBtn.addEventListener('click', event => {
    domSide.classList.toggle('open');
});