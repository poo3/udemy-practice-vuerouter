<template>
  <div>
    <h1>Home</h1>
    <button @click="increment(1)">次の倍数</button>
    <button @click="decrement(1)">前の倍数</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment", 1);
    },
    decrement() {
      this.$store.dispatch("decrement", 1);
    },
  },
};
</script>