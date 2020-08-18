<template>
  <div class="block">
    <router-link :to="path" class="button">{{text}}</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  props: {
      text: String,
      path: String
  },
  methods: {}
});
</script>

<style scoped lang="scss">
a.button {
  font-weight: 700;
  color: white;
  text-decoration: none;
  display: block;
  height: 100%;
  padding: auto;
} 
a.button:hover { background: rgb(53, 167, 110); border-radius: 3px;}
a.button:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
.block {
    margin: 4px;
    width:200px;
    height: 200px;
    border-radius: 3px;
    background: rgb(64,199,129);
    box-shadow: 0 -3px rgb(53,167,110) inset;
    transition: 0.2s;
}
</style>
