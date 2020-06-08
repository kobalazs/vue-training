<template>
  <b-navbar variant="light">
    <b-navbar-brand to="/">Vue Training</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/task-list">Tasks</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-if="!user">
      <b-nav-item to="/registration">Registration</b-nav-item>
      <b-nav-item to="/login">Login</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-if="user">
      <b-nav-item-dropdown right>
        <template slot="button-content">{{ user.name }}</template>
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationComponent',
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
