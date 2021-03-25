<template>
  <div>
    <h1>Home</h1>
    <button @click="increment(1)">次の倍数</button>
    <button @click="decrement(1)">前の倍数</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
};
</script>