let list = [];

const input = document.querySelector('.userInput');
const enter = document.querySelector('.enter');
const todoList = document.querySelector('.todoList');
const remove = document.querySelector('i');

enter.addEventListener('click', () => {

  // add new item to todo list array
    list.push(input.value);
    console.log(list);

  // display items
  todoList.insertAdjacentHTML('afterbegin', `<li>${input.value} <span class="remove"><i class="fas fa-times-circle"></i></span></li>`);

  // reset the user input field to prepare for new item
  input.value = '';

  return list;
});


remove.addEventListener('click', (event) => {
  
});
