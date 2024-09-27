<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <!-- ** 7.a Bookmarkable Aplikacija ** Omogućuje bookmarkanje i navigaciju koristeći vue-router -->
        <RouterLink to="/"><h2 class="centered">TODO</h2></RouterLink>
        <hr />
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <RouterLink to="/about"><h5 class="centered">About</h5></RouterLink>
  </footer>
</template>

<style scoped>
.centered {
  text-align: center;
  color: #4caf50;
}

header {
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 42px;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 12px 0;
}

footer {
  background-color: #1a1a1a;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

header h2,
footer h5 {
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
}
</style>
