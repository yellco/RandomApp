<template>
  <div>
    <h3>Other projects</h3>
    <ul>
      <li><a href="https://yellco.ru" target="_blank" rel="noopener">Trampolines (Map App)</a></li>
      <li><a href="https://yellco.ru/chat/" target="_blank" rel="noopener">Chat</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  props: {},
  methods: {}
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
