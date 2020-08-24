<template>
  <div class="categoryBlock">
    <CategoryBlock text="Число" path="/number"/>
    <CategoryBlock text="В разработке" path="/number"/>
    <CategoryBlock text="В разработке" path="/number"/>
  </div>
</template>

<script>
import CategoryBlock from '@/components/CategoryBlock';

export default {
  name: 'Category',
  components: {
      CategoryBlock
  }
}
</script>

<style scoped lang="scss">
.categoryBlock {
    max-width: 1080px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
</style>
