<template>
    <button @click="increment()">You clicked me {{ $store.state.count }} times.</button>
</template>

<script>
export default {
    name: "ButtonCounter",
    data: function () {
    return {
      count: 0
    }
  },
  methods: {
    increment: function () {
      this.$store.state.count++;
      this.count++;
    }
  }
}
</script>