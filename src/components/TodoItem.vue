<template>
  <div>
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-complete', todo.id)" />
    <!-- ** 1. Interpolation/One-Way Binding ** Koristenje one-way bindinga kako bismo prikazali tekst zadatka. -->
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="$emit('delete-todo', todo.id)">Delete</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Todo {
  id: string
  text: string
  completed: boolean
}

// ** 8.a Komponenta bez stanja, koristiti properties ** Komponenta prima todo objekt kao prop.
const props = defineProps<{
  todo: Todo
}>()
</script>

<!-- 5. Scoped Styles -->
<style scoped>
div {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

span {
  margin-left: 10px;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: auto;
  padding: 5px 10px;
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: red;
}
</style>
