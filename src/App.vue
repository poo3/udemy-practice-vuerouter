<template>
  <div>
    <router-view name="header"></router-view>
    <nav class="link-nav">
      <router-link to="/" class="link" active-class="active--link" exact
        >Home</router-link
      >
      <router-link to="/users/1/profile" class="link" active-class="active--link" exact
        >Users</router-link
      >
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.5s;
}

.link-nav {
  width: 700px;
  margin: auto;
  padding-top: 5rem;
}
.link {
  margin-right: 2rem;
}

.active--link {
  font-size: 20px;
}
</style>