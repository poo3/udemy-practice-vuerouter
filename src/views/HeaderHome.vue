<template>
  <div>
    <h1>Home</h1>
    <button @click="increment(1)">次の倍数</button>
    <button @click="decrement(1)">前の倍数</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>