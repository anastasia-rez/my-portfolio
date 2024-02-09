document.addEventListener("DOMContentLoaded", function () {
    const showAnswerBtns = document.querySelectorAll(".showAnswerBtn");

    showAnswerBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const parentDiv = btn.parentElement.parentElement;
            const answerDiv = parentDiv.querySelector(".answer");
            const answerVisible = window.getComputedStyle(answerDiv).maxHeight !== "0px";

            if (!answerVisible) {
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                btn.textContent = "↑";
            } else {
                answerDiv.style.maxHeight = "0";
                btn.textContent = "↓";
                // Прокручиваем страницу к началу
                window.scrollTo({
                    top: parentDiv.offsetTop, // Начальная точка блока
                    behavior: 'smooth' // Плавная прокрутка
                });
            }
        });
    });
});