<template>
  <div>
    <h2>Users</h2>
    <router-link to="/users/1" class="link">ユーザ１</router-link>
    <router-link to="/users/2" class="link">ユーザ2</router-link>
    <hr />
    <h3>ユーザ{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      console.log("ユーザが変わりました！");
    },
  },
};
</script>

<style scoped>
  .link {
    margin-right: 2rem;
  }
</style>