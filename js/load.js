
const progressBar = document.getElementById('progress-bar');
const percentText = document.getElementById('percent');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const overlaySlide = document.getElementById('overlay-slide');
let percent = 0;
let interval = setInterval(() => {
    percent += 1;
    progressBar.style.width = percent + '%';
    percentText.textContent = percent + '%';

    if (percent >= 100) {
        clearInterval(interval);
        overlaySlide.style.transform = 'translateX(0)';

        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';

            overlaySlide.style.transform = 'translateX(-100%)';
        }, 1000);
    }
}, 20);
