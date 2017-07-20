<template>
  <div class="searchbar">

  <input v-model="searchterm" placeholder="Search...">
  <p>{{help_text}}</p>
  </div>
</template>

<script>
import _ from 'underscore';

export default {
  name: 'searchbar',
  data() {
    return {
      help_text: 'Insert a search term!',
      searchterm: '',
    };
  },
  watch: {
    searchterm: function searchterm(term) {
      this.help_text = 'Waiting for you to finish typing...';
      this.search(term);
    },
  },
  methods: {
    search: _.debounce(
      function search(term) {
        console.log(term);
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500,
    ),
  },
};
</script>

<style>

</style>