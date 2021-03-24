<template>
  <div>
    <h1>Home</h1>
    <button @click="increment">次の倍数</button>
    <button @click="decrement">前の倍数</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment", 1);
    },
    decrement() {
      this.$store.commit("decrement", 1);
    },
  },
};
</script>