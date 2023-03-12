// Модуль C6. API браузера. С6.5. Geolocation. Notification. Screen size

// Задание 2
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

// Ищем кнопку, по нажатии на которую будет выходить размер экрана
const btnScreen = document.querySelector('.j-btn-screen-size');

btnScreen.addEventListener('click', () => {
  alert("Ширина экрана: " + window.screen.width + "\nВысота экрана: " + window.screen.height);
});
