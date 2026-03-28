document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like');
    const dizBtn = document.querySelector('.diz');
    const likeDisplay = document.querySelector('.like-count');
    const dizDisplay = document.querySelector('.diz-count');

    let likes = 0;
    let dislikes = 0;

    likeBtn.onclick = () => {
        // Если уже был лайк, убираем его, если нет — ставим и обнуляем дизлайк
        if (likes === 1) {
            likes = 0;
        } else {
            likes = 1;
            dislikes = 0; // Убираем дизлайк при выборе лайка
        }
        updateDisplay();
    };

    dizBtn.onclick = () => {
        // Если уже был дизлайк, убираем его, если нет — ставим и обнуляем лайк
        if (dislikes === 1) {
            dislikes = 0;
        } else {
            dislikes = 1;
            likes = 0; // Убираем лайк при выборе дизлайка
        }
        updateDisplay();
    };

    function updateDisplay() {
        likeDisplay.textContent = likes;
        dizDisplay.textContent = dislikes;
    }
});
