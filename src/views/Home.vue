<template>
  <div class="home">
    <img alt="Vue logo" src="./random/img/logo.png">
    <Form msg="Welcome to the Random App"/>
    <Projects/>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    Form,
    Projects
  }
}
</script>
