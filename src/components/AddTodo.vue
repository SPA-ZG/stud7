<template>
  <div>
    <!-- ** 2. Two-Way Binding ** Koristenje two-way bindinga za unos novog zadatka. -->
    <input v-model="newTodo" placeholder="Add a new task" @keyup.enter="emitAddTask" />
    <button @click="emitAddTask">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const newTodo = ref('')
const emit = defineEmits(['add-todo'])

const emitAddTask = () => {
  if (newTodo.value.trim()) {
    // ** 9. Barem jedna komponenta mora emitirati barem jedan event ** Emitiranje eventa za dodavanje novog zadatka.
    emit('add-todo', newTodo.value)
    newTodo.value = ''
  }
}
</script>

<style scoped>
div {
  text-align: center;
  margin: 10px 0;
  background-color: #333;
}

input {
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: green;
}
</style>
