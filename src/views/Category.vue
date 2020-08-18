<template>
  <div class="categoryBlock">
    <CategoryBlock text="Число" path="/number"/>
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
    display: flex;
}
</style>
