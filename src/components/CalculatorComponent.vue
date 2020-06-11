<template>
  <div>
    <h2>Calculator</h2>
    <b-button @click="increment" class="d-block mb-2">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </b-button>
    <b-button @click="fibonacci">
      First is: {{ state.first }}, second is: {{ state.second }}, sum is: {{ state.sum }}
    </b-button>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'

export default {
  setup() {
    const state = reactive({
      count: 0,
      first: 0,
      second: 1,
      double: computed(() => state.count * 2),
      sum: computed(() => state.first + state.second)
    })

    function increment() {
      state.count += 1
    }

    function fibonacci() {
      const temp = state.first + state.second
      state.first = state.second
      state.second = temp
    }

    return {
      state,
      increment,
      fibonacci
    }
  }
}
</script>