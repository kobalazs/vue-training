<template>
  <div>
    <h1>Tasks</h1>
    <b-spinner v-if="loading" variant="primary" />
    <b-alert variant="danger" :show="!!error">{{ error }}</b-alert>
    <b-list-group v-if="!loading">
      <b-list-group-item v-for="task in tasks" :key="task.id">{{ task.name }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TaskList',
  computed: mapState({
    tasks: state => state.task.tasks,
    error: state => state.task.error,
    loading: state => state.task.loading
  }),
  created() {
    this.loadTasks();
  },
  methods: {
    loadTasks() {
      this.$store.dispatch('task/list')
    }
  }
};
</script>