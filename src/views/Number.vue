<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Form msg="Welcome to the Random App"/>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'Number',
  components: {
    Form
  }
}
</script>
