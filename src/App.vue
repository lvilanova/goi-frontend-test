<template>
  <div id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <todo-item v-for = "task in tasks" v-bind:task = "task" v-on:todo:remove="removeItem" :key="task.id"></todo-item>
      <!-- <todo-filters></todo-filters> -->
      <button class="btn btn-default" v-on:click="removeAll()">Delete all</button>
    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"</style>
