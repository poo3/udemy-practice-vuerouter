<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">usersのページへ行く</button>
    <p>2の倍数{{ doubleCount }}</p>
    <p>3の倍数{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>