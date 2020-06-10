<template>
  <div>
    <h2>Calculator</h2>
    <b-button @click="increment" class="d-block mb-2">
      Count is: {{ count }}, double is: {{ double }}
    </b-button>
    <b-button @click="fibonacci">
      First is: {{ first }}, second is: {{ second }}, sum is: {{ sum }}
    </b-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    first: 0,
    second: 1
  }),
  computed: {
    double() {
      return this.count * 2
    },
    sum() {
      return this.first + this.second
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    fibonacci() {
      const temp = this.first + this.second
      this.first = this.second
      this.second = temp
    }
  }
}
</script>