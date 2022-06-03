<template>
  <nav>
    <router-link to="/">Planner</router-link>
    <router-link to="/services">Service</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(241, 241, 241);
}

nav {
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ff0000;
    }
  }
}
</style>
