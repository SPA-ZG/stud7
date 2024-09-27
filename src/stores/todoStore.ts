import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { nanoid } from 'nanoid'

interface Todo {
  id: string
  text: string
  completed: boolean
}

// ** 10. Store (Pinia) ** Pinia store se koristi za upravljanje stanjem aplikacije.
export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  // ** 11.a Asinkroni dohvat i spremanje podataka **
  const fetchTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating async operation
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      todos.value = JSON.parse(savedTodos)
    }
  }

  const saveTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // Simulating async operation
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  // ** 3. Methods ** Metode za manipulaciju stanjem zadatka: addTodo, ToggleTodo, DeleteTodo.
  const addTodo = async (text: string) => {
    todos.value.push({ id: nanoid(), text, completed: false })
    await saveTodos()
  }

  const toggleTodo = async (id: string) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
    await saveTodos()
  }

  const deleteTodo = async (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    await saveTodos()
  }

  watch(
    todos,
    async () => {
      await saveTodos()
    },
    { deep: true }
  )

  return { todos, fetchTodos, addTodo, toggleTodo, deleteTodo }
})
