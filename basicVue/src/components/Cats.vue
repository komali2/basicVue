<template>
  <div class="information">
    <h1>{{ cat}}</h1>
    <h2>{{ dog }}</h2>
  </div>
</template>

<script>
export default {
  name: 'information',
  data() {
    return {
      cat: 'I am cat',
      dog: 'I am dog',
    };
  },
};
</script>

<style scoped>

</style>