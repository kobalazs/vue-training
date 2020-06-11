<template>
  <div>
    <h2>Calculator</h2>
    <b-button @click="increment" class="d-block mb-2">
      Count is: {{ incrementState.count }}, double is: {{ incrementState.double }}
    </b-button>
    <b-button @click="fibonacci">
      First is: {{ fibonacciState.first }}, second is: {{ fibonacciState.second }}, sum is: {{ fibonacciState.sum }}
    </b-button>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'

export default {
  setup() {
    return {
      ...useIncrementCalculator(),
      ...useFibonacciCalculator()
    }
  }
}

function useIncrementCalculator() {
  const incrementState = reactive({
    count: 0,
    double: computed(() => incrementState.count * 2)
  })

  function increment() {
    incrementState.count += 1
  }

  return {
    incrementState,
    increment
  }
}

function useFibonacciCalculator() {
  const fibonacciState = reactive({
    first: 0,
    second: 1,
    sum: computed(() => fibonacciState.first + fibonacciState.second)
  })

  function fibonacci() {
    const temp = fibonacciState.first + fibonacciState.second
    fibonacciState.first = fibonacciState.second
    fibonacciState.second = temp
  }

  return {
    fibonacciState,
    fibonacci
  }
}
</script>