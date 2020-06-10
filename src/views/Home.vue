<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="float-right">
    <h1>Welcome to vue-training!</h1>
    <CalculatorComponent />
  </div>
</template>

<script>
import CalculatorComponent from '../components/CalculatorComponent'

export default {
  components: {
    CalculatorComponent
  }
}
</script>
