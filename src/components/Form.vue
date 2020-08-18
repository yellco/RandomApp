<template>
  <div>
    <h1>Введите промежуток</h1>
    <p v-if="random==='unspecified'">
        Нажмите кнопку <br><u> для получения рандомного числа</u>
    </p>
    <p v-else>
        Рандомное число - <b>{{random}}</b>
    </p>
    <p>
        <input v-model="input1" type="text">
        &nbsp;
        <input v-model="input2" type="text">
    </p>
    <p id="ranbomButton">
        <a href="#" class="button" @click="getRandom()">Зарандомить</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Form',
  data () {
    return {
      random: 'unspecified',
      input1: 1,
      input2: 6
    }
  },
  props: {
    msg: String,
  },
  methods: {
    getRandom: function() {
        let min = Math.ceil(this.input1);
        let max = Math.floor(this.input2);
        this.random = (Math.floor(Math.random() * (max - Math.ceil(this.input1) + 1)) + min) as unknown as string;
    }
  }
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a.button {
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
} 
a.button:hover { background: rgb(53, 167, 110); }
a.button:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
#ranbomButton {
    margin-top:2em;
}
</style>
