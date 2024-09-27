<template>
  <div class="about-container">
    <p>This is a simple ToDo application displaying basic Vue functionality.</p>
    <p>
      There are two pages. The "TODO Home" available by clicking TODO right above and the "About
      Page" - the page you are currently on!
    </p>

    <img src="../assets/sponge-bob-to-do.gif" alt="Sponge Bob To-Do" />
  </div>
</template>

<style scoped>
.about-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.about-container img {
  max-width: 100%;
  height: auto;
}
</style>
