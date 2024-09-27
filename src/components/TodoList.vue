<template>
  <div class="todo-list-container">
    <div class="filter-bar">
      <button class="filter" @click="currentFilter = 'all'">All</button>
      <button class="filter" @click="currentFilter = 'active'">Active</button>
      <button class="filter" @click="currentFilter = 'completed'">Completed</button>
    </div>
    <AddTodo @add-todo="handleAddTodo" />

    <TodoItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="store.deleteTodo"
      @toggle-complete="store.toggleTodo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTodoStore } from '../stores/todoStore'
import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'

// ** 8.b Komponenta sa stanjem ** Upravlja stanjem i filtriranjem.
const store = useTodoStore()
const currentFilter = ref('all')

// ** 4. Computed Properties ** Izracunava filtriranu listu zadataka na temelju trenutnog filtra.
const filteredTodos = computed(() => {
  switch (currentFilter.value) {
    case 'active':
      return store.todos.filter((todo) => !todo.completed)
    case 'completed':
      return store.todos.filter((todo) => todo.completed)
    default:
      return store.todos
  }
})

// ** 6. Lifecycle Hook ** Dohvat zadataka pri inicijalnom učitavanju.
onMounted(async () => {
  await store.fetchTodos()
})

const handleAddTodo = async (newTodoText: string) => {
  await store.addTodo(newTodoText)
}
</script>

<style scoped>
.todo-list-container {
  margin-bottom: 28px;
}
.filter-bar {
  text-align: center;
  padding: 12px 0 2px 0;
  display: flex;
  justify-content: center;
  background-color: #333;
}

.filter {
  margin: 0 10px;
  font-size: 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter:hover {
  background-color: green;
}
</style>
