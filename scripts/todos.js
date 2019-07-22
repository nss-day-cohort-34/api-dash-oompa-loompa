// Fetch and display todos

// These must be displayed in a 4-column grid with the title and a checkbox. If the task is complete, the checkbox must be checked. Only the first 30 tasks should be displayed.

const todoSelector = document.querySelector(".todoContainer")

const todoFetcher = () => {
    // Fetch the data
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(data => data.json())
        // Do something with the parsed data
        .then((arrayOfTodos) => {
            for (const todo of arrayOfTodos) {
                if (todo.id <= 30) {
                    const convertTodo = todoConverter(todo)
                    todosDom(convertTodo)
                }

                // const insertHtml = renderJournalEntries(todoFetcher.title, todoFetcher.completed)
            }
        })
}

todoFetcher()


const todoConverter = (todoObj) => {
    // Return HTML representation of the animal object
    return `
        <section class="sectionTodo">
        <h2>${todoObj.title}</h2>
        <h3>${todoObj.completed}</h3>
        <input type="checkbox" ${checkbox(todoObj)} name="TrueOrFalse" value="">Completed</input>
        </section>
    `
}



const todosDom = (todoHtml) => {
    // Attach the string to the right place in the DOM
    todoSelector.innerHTML += todoHtml
}

// checkbox
const checkbox = (todoObj) => {
    if (todoObj.completed === true) {
        return 'checked'
    } else {
        return 'unchecked'
    }
}