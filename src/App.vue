<template>
  <div>
    <nav class="link-nav">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/users" class="link">Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link-nav {
  width: 700px;
  margin: auto;
  padding-top: 5rem;
}
.link {
  margin-right: 2rem;
}
</style>