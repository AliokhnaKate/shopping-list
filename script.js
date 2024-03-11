/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

//ПЛАН
//Реализуем отправку сообщений по клику enter.
//Начнем с заготовки: поле для ввода сообщений и нажать enter.
//Хотим реализовать:
//1. когда пользователь введет сообщение в поле input с id input
//2. далее нажмет кнопку enter,
//3. мы хотим, чтобы на html-странице создался новый html-элемент, который будет содержать сообщение польз-ля
//4. который будет добавлен в контейнер с сообщениями с классом items.
const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        //event.key === 'Enter' нужно ставить на самый верх, тк keydown будет реагировать на каждое нажатие любой клавиши
        const itemText = sendInput.value;
        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = itemText;
        itemsContainer.append(newItem);
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });
        sendInput.value = '';
    };
});