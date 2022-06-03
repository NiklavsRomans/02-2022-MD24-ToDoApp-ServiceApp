<template>
  <div class="todo-container">
    <div class="todo-wrapper">
      <div v-if="allDone === 100">
        <h3 class="todo-done-text">All Tasks Completed</h3>
      </div>
      <input
        class="todo-input-text"
        type="text"
        placeholder="Add your todo..."
        v-model="inputText"
      />
      <button
        :disabled="!inputText"
        @click="handleSubmitTodo"
        class="todo-add-button"
      >
        Add
      </button>
      <div class="todo-progress-bar">
        <progress
          class="progress-bar"
          v-if="toDos.length > 0"
          max="100"
          :value="handleProgressBar()"
        ></progress>
      </div>
      <li :key="todo.id" v-for="todo in filteredTodos" class="todo-task">
        <div class="todo-checkbox">
          <input
            :checked="todo.completed"
            @change="handleCompleteTodo(todo.id)"
            type="checkbox"
          />
          <input
            class="todo-edit-input"
            type="text"
            v-model="inputEditText"
            v-if="todoEdit === todo.id"
          />
          <span v-else :class="`${todo.completed ? 'completed' : ''}`">{{
            todo.text
          }}</span>
        </div>
        <div class="todo-delete">
          <button
            class="save-button"
            @click="handleTodoEdit(todo.id)"
            v-if="todoEdit === todo.id"
          >
            Save
          </button>
          <button class="edit-button" v-else @click="todoEdit = todo.id">
            Edit
          </button>
          <button @click="handleDeleteTodo(todo.id)" class="delete-button">
            X
          </button>
        </div>
      </li>
      <div class="todo-filter-buttons">
        <button
          class="filter-button"
          @click="handleFilterType(button.title)"
          :key="button"
          v-for="button in filterButtons"
        >
          {{ button.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type ToDosProps = {
  id: number;
  text: string;
  completed: boolean;
};

export default defineComponent({
  name: "PlannerApp",
  data: () => {
    return {
      inputText: "",
      inputEditText: "",
      taskState: "",
      allDone: 0,
      todoEdit: 0,
      toDos: [] as ToDosProps[],
      filterButtons: [
        {
          title: "All",
        },
        {
          title: "Completed",
        },
        {
          title: "In progress",
        },
      ],
    };
  },

  methods: {
    handleSubmitTodo() {
      const newTodo = {
        id: Math.random() * 1000,
        text: this.inputText,
        completed: false,
      };
      this.toDos.push(newTodo);
      this.inputText = "";
    },

    handleCompleteTodo(id: number) {
      this.toDos = this.toDos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },

    handleDeleteTodo(id: number) {
      this.toDos = this.toDos.filter((todo) => todo.id !== id);
    },

    handleFilterType(state: string) {
      this.taskState = state;
    },

    handleTodoEdit(id: number) {
      this.toDos = this.toDos.map((todo) => {
        if (todo.id === id) {
          todo.text = this.inputEditText;
        }
        return todo;
      });
      this.todoEdit = 0;
      this.inputEditText = "";
    },

    handleProgressBar() {
      const doneTasks = this.toDos.filter((todo) => todo.completed);
      const calcLength = (doneTasks.length / this.toDos.length) * 100;
      this.allDone = calcLength;
      return calcLength;
    },
  },

  computed: {
    filteredTodos() {
      return this.toDos.filter((todo) => {
        switch (this.taskState) {
          case "Completed":
            return todo.completed;
          case "In progress":
            return !todo.completed;
          default:
            return this.toDos;
        }
      });
    },
  },
});
</script>

<style scoped lang="scss">
@import "Planner.scss";
</style>
