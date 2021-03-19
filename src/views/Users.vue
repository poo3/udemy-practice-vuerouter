<template>
  <div>
    <h2>Users</h2>
    <router-link to="/users/1" class="link">ユーザ１</router-link>
    <router-link to="/users/2" class="link">ユーザ2</router-link>
    <hr />
    <h3>ユーザ{{ id }}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
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