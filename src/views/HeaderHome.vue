<template>
  <div>
    <h1>Home</h1>
    <button @click="increment(1)">次の倍数</button>
    <button @click="decrement(1)">前の倍数</button>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"]),
  },
  computed: {
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        return this.$store.dispatch("messageUpdate", value);
      },
    },
  },
};
</script>