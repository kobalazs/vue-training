<template>
  <div>
    <b-spinner v-if="loading" variant="primary" class="float-right" />
    <h1>Tasks</h1>
    <b-alert variant="danger" :show="!!error">{{ error }}</b-alert>
    <b-list-group>
      <b-list-group-item v-for="task in tasks" :key="task.id">
        <TaskComponent :task="task" :disabled="loading" />
      </b-list-group-item>
    </b-list-group>
    <b-button variant="outline-primary" class="mt-3" @click="addTask()">Add new task</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskDto from '../dtos/TaskDto'
import TaskComponent from '../components/TaskComponent'

export default {
  name: 'TaskList',
  components: {
    TaskComponent
  },
  computed: mapState({
    tasks: state => state.task.tasks,
    error: state => state.task.error,
    loading: state => state.task.loading
  }),
  created() {
    this.loadTasks()
  },
  methods: {
    loadTasks() {
      this.$store.dispatch('task/list')
    },
    addTask() {
       const task = new TaskDto({
         name: 'New Task',
       })
       this.$store.dispatch('task/create', task)
    }
  }
}
</script>