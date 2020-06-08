<template>
  <div id="app">
    <NavigationComponent />
    <b-container class="mt-3">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'

export default {
  name: 'App',
  components: {
    NavigationComponent
  }
}
</script>
