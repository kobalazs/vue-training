<template>
  <b-form @submit.prevent="register" @reset.prevent="reset">
    <h1>Registration</h1>
    <pre>{{ user }}</pre>

    <b-form-group label="Name">
      <b-form-input v-model="user.name" />
    </b-form-group>

    <b-form-group label="Email">
      <b-form-input v-model="user.email" />
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input v-model="user.password" type="password" />
    </b-form-group>

    <b-button type="submit" variant="primary">Register</b-button>
    <b-button type="reset" variant="danger" class="ml-1">Reset</b-button>
  </b-form>
</template>

<script>
import UserDto from '../dtos/UserDto'

export default {
  name: 'Registration',
  data: () => ({
    user: new UserDto()
  }),
  methods: {
    register() {
      console.log('Register:', this.user)
    },
    reset() {
      this.user = new UserDto()
    }
  }
}
</script>
