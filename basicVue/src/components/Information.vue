<template>
  <div class="information">
    <h1>{{ msg1}}</h1>
    <h2>{{ msg2 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'information',
  data() {
    return {
      msg1: 'This is message 1',
      msg2: 'This is message 2',
    };
  },
};
</script>

<style scoped>

</style>