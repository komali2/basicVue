<template>
  <div class="searchbar">

  <input v-model="searchterm" placeholder="Search...">
  <p>{{help_text}}</p>
  </div>
</template>

<script>
import _ from 'underscore';
import axios from 'axios';

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
        axios.get(`http://www.dnd5eapi.co/api/${term}`,
          { headers: {
            'Access-Control-Allow-Origin': '*',
          },
          })
        .then(function (response) {
          // vm.answer = _.capitalize(response)
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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