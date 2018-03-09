<template>
  <div id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <todo-item v-for = "task in tasks" v-bind:task = "task" v-on:todo:remove="removeItem" :key="task.id"></todo-item>
      <todo-filters v-for = "task in tasks" v-bind:task = "task" :key="task.id"></todo-filters>
    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"</style>
