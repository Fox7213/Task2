// Получаем нужные элементы из DOM
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const generateButton = document.getElementById('generate');
const canvas = document.getElementById('canvas');
const colorPicker = document.getElementById('colorpicker');
const resetButton = document.getElementById('reset');

// Обработчик клика на кнопку "Создать холст"
generateButton.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем отправку формы
    const width = widthInput.value;
    const height = heightInput.value;
    generateCanvas(width, height); // Генерируем холст
});

// Генерация холста
function generateCanvas(width, height) {
    canvas.innerHTML = ''; // Очищаем холст

    // Создаем таблицу с ячейками
    for (let row = 0; row < height; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < width; col++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        canvas.appendChild(tr);
    }

    // Добавляем обработчик клика по ячейкам
    canvas.addEventListener('click', (event) => {
        const cell = event.target;
        if (cell.style.backgroundColor === colorPicker.value) {
            cell.style.backgroundColor = ''; // Сбрасываем цвет
        } else {
            cell.style.backgroundColor = colorPicker.value; // Применяем выбранный цвет
        }
    });
}

// Обработчик клика на кнопку "Сбросить цвет"
resetButton.addEventListener('click', () => {
    clearCanvas(); // Сбрасываем цвет холста
});

// Сброс цвета холста
function clearCanvas() {
    const cells = canvas.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '';
    }
}