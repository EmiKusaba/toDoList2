// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let arrayOfTodos = []
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => arrayOfTodos = json);
}
//log
const logTodos = () => {
  console.log(arrayOfTodos)
}

//populateTodos

const populateTodos = () => {
  let toDo = document.getElementById('todo-list')

  for (i = 0; i < arrayOfTodos.length; i++) {
    newList = document.createElement('Li')
    newList.innerHTML = arrayOfTodos[i].title
    toDo.appendChild(newList)
  }

}