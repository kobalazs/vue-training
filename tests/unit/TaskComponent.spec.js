import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { BFormCheckbox, BFormInput, BButton } from 'bootstrap-vue'

import TaskDto from '../../src/dtos/TaskDto'
import TaskComponent from '../../src/components/TaskComponent.vue'

describe('TaskComponent.vue', () => {
  it('renders task when passed', () => {
    const task = new TaskDto({
      id: 1,
      name: 'Test task',
      color: 'red',
      position: 1,
      is_done: false,
      created_at: '1970-01-01 0:00:00',
      updated_at: '1970-01-01 0:00:00'
    })

    const wrapper = shallowMount(
      TaskComponent,
      {
        propsData: { task, disabled: false },
        stubs: {
          'b-form-checkbox': BFormCheckbox,
          'b-form-input': BFormInput,
          'b-button': BButton
        }
      }
    )
    expect(wrapper.find('input[type=text]').element.value).to.equal(task.name)
  })
})
