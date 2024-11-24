
const audio = document.getElementById("myAudio");

function playSound(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    audio.currentTime = 0; // Сбрасываем время воспроизведения
    audio.play(); // Воспроизводим звук

    // Автоматическая отправка формы через 5 секунд или сразу после завершения звука
    audio.onended = function() {
        document.querySelector(".search-form").submit(); // Отправляем форму после завершения звука
    };
    
    // Если хотите отправить форму через 5 секунд, замените на следующую строку
    setTimeout(() => {
        document.querySelector(".search-form").submit();
     }, 9000); // Задержка 9000 миллисекунд (5 секунд)
}

// Находим форму и кнопку "Поиск" внутри нее
const searchForm = document.querySelector(".search-form");
const searchButton = searchForm.querySelector("input[type='submit']");

// Проверяем, что элементы найдены
if (searchForm && searchButton) {
    searchButton.addEventListener("click", playSound); // Добавляем обработчик события
} else {
    console.error("Не удалось найти форму или кнопку поиска");
}