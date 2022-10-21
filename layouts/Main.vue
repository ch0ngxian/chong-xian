<template>
  <div>
    <Header></Header>
    <slot></slot>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'Main',
  components: { Header },
}
</script>
