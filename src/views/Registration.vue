<template>
  <b-form @submit.prevent="register" @reset.prevent="reset">
    <h1>Registration</h1>
    <pre>{{ user }}</pre>

    <b-form-group label="Name">
      <b-form-input v-model="user.name" />
      <b-alert variant="warning" :show="!$v.user.name.required">Name is required</b-alert>
      <b-alert variant="warning" :show="!$v.user.name.minLength">Name should be at least 3 characters long</b-alert>
    </b-form-group>

    <b-form-group label="Email">
      <b-form-input v-model="user.email" />
      <b-alert variant="warning" :show="!$v.user.email.required">Email is required</b-alert>
      <b-alert variant="warning" :show="!$v.user.email.email">Email should be valid</b-alert>
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input v-model="user.password" type="password" />
      <b-alert variant="warning" :show="!$v.user.password.required">Password is required</b-alert>
      <b-alert variant="warning" :show="!$v.user.password.minLength">Password should be at least 6 characters long</b-alert>
    </b-form-group>

    <b-form-group label="Repeat password">
      <b-form-input v-model="repeatPassword" type="password" />
      <b-alert variant="warning" :show="!$v.repeatPassword.sameAsPassword">Should be same as password</b-alert>
    </b-form-group>

    <b-button type="submit" variant="primary" :disabled="loading"><b-spinner v-if="loading" small /> Register</b-button>
    <b-button type="reset" variant="danger" class="ml-1">Reset</b-button>
  </b-form>
</template>

<script>
import axios from 'axios';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import UserDto from '../dtos/UserDto'

export default {
  name: 'Registration',
  data: () => ({
    user: new UserDto(),
    repeatPassword: '',
    loading: false
  }),
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    repeatPassword: {
      sameAsPassword: sameAs(function () { return this.user.password })
    }
  },
  methods: {
    async register() {
      if (this.$v.$invalid) {
        return
      }
      try {
        this.loading = true
        await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/user/register`, this.user)
        this.$router.push('login')
      } catch (err) {
        window.alert(err.response?.data?.error || err)
      }
      this.loading = false
    },
    reset() {
      this.user = new UserDto()
    }
  }
}
</script>
