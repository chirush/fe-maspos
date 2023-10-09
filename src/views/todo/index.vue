<template>
  <div class="relative overflow-x-auto mt-5 dunno-actually">
    <div class="text-box box-shadow"><b>Website Todo</b></div>
    <table class="text-sm text-left text-gray-500 todo-table box-shadow">
      <tbody>
        <tr class="bg-white"><td class="px-6 py-4" style="padding-top: 8px;"></td><td></td></tr>
        <tr class="bg-white" v-for="todo in todoStore.todos">
          <div class="value">
            <td v-if="todo.checked == 0" scope="row" class="px-6 py-4 font-medium text-gray-400 whitespace-nowrap text-center">
              <a @click="updateData(todo.id)" href="#">○ {{todo.task}}</a>
            </td>
            <td v-if="todo.checked == 1" scope="row" class="px-6 py-4 font-medium text-gray-400 whitespace-nowrap text-center">
              <a @click="updateData(todo.id)" href="#">◉ <a class="task-done">{{todo.task}}</a></a>
            </td>
          </div>
          <td class="px-6 py-4">
            <Button v-if="todo.checked == 1" @click="deleteData(todo.id)">
              <i class="ri-delete-bin-line"></i>
            </Button>
            <Button v-if="todo.checked == 0" @click="deleteData(todo.id)">
            </Button>
          </td>
        </tr>
        <tr class="bg-white"><td class="px-6 py-4" style="padding-bottom: 20px;"></td><td></td></tr>
      </tbody>
    </table>
    <div class="new-task">
      <ButtonPrimary class="box-shadow new-task-button" @click="$router.push('/todo/create')">
        <b><i class="ri-add-line"></i> New Task</b>
      </ButtonPrimary>
    </div>
  </div>
</template>
<style>
  .task-done {
    text-decoration-line: line-through;
    text-decoration-color: #E2E7EB;
  }

  .dunno-actually {
    background-color: #E4E9FF;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .text-box {
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    max-width: 600px;
    background-color: #AF7EEA;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
    padding-top: 13px;
    padding-bottom: 13px;
    color: white;
  }

  .value {
    margin-left: 30px;
    margin-bottom: -10px;
  }

  .todo-table {
    margin-left: auto;
    margin-right: auto;
    min-width: 350px;
    max-width: 600px;
  }

  .new-task {
    text-align: center;
    margin-top: -22px;
  }

  .new-task-button {
    width: 150px;
    border-radius: 18px;
    background-color: #AF7EEA;
    font-size: 15px;
  }

  .box-shadow {
     box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
<script>
  import {
    useTodoStore
  } from "@/stores/todo.store.js"

  export default {
    data() {
      return {
        todoStore: useTodoStore()
      }
    },
    mounted() {
      this.todoStore.fetch()
    },
    methods: {
      async deleteData(id){
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.todoStore.delete(id);

            this.todoStore.fetch()
          }
        });
      },
      async updateData(id){
        await this.todoStore.update(id);

        this.todoStore.fetch()
      },
    }
  }

</script>
