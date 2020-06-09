<template>
  <div class="d-flex align-items-center">
    <b-form-checkbox v-model="task.is_done" @change="modifyTask(task)" :disabled="disabled" />
    <b-form-input v-model="task.name" @change="modifyTask(task)" :disabled="disabled" />
    <b-button
      variant="danger"
      size="sm"
      class="ml-2"
      @click="deleteTask()"
      :disabled="disabled"
    >Delete</b-button>
  </div>
</template>

<script>
import TaskDto from '../dtos/TaskDto'

export default {
  name: 'TaskComponent',
  props: {
    task: TaskDto,
    disabled: Boolean
  },
  methods: {
    modifyTask() {
      this.$store.dispatch('task/modify', this.task)
    },
    deleteTask() {
      this.$store.dispatch('task/delete', this.task)
    }
  }
}
</script>