document.querySelector('.selectable').addEventListener("click", function(e) {
    e.target.classList.remove('entrance');
    e.target.classList.toggle('zoom');
})