<template>
  <b-form @submit.prevent="login">
    <h1>Login</h1>
    <b-alert variant="danger" :show="!!error">{{ error }}</b-alert>

    <b-form-group label="Email">
      <b-form-input v-model="user.email"></b-form-input>
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input type="password" v-model="user.password"></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" :disabled="loading"><b-spinner v-if="loading" small /> Log In</b-button>
  </b-form>
</template>

<script>
import UserDto from '../dtos/UserDto'

export default {
  name: 'Login',
  data: () => ({
    user: new UserDto()
  }),
  computed: {
    loading() {
      return this.$store.state.loading
    },
    error() {
      return this.$store.state.error
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', this.user)
      if (this.$store.state.user) {
          this.$router.push('/task-list')
      }
    }
  }
}
</script>
 