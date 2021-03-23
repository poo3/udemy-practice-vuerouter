<template>
  <div>
    <h2>Users</h2>
    <router-link to="/users/1" class="link">ユーザ１</router-link>
    <router-link to="/users/2" class="link">ユーザ2</router-link>
    <hr />
    <h3>ユーザ{{ id }}</h3>
    <router-link
      :to="{
        name: 'users-id-profile',
        params: { id: Number(id) + 1 },
        hash: '#hash-content',
      }"
      >次のユーザ</router-link
    >
    <router-view></router-view>
    <div>
      <p id="hash-content">ハッシュコンテンツ</p>
    </div>
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    const isLeave = window.confirm("本当にページを離れますか？");
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped>
.link {
  margin-right: 2rem;
}
</style>