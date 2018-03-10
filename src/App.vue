<template>
  <div id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <todo-item v-for = "(task, i) in tasks" v-bind:task = "task" v-on:todo:remove="removeItem" :key="i"></todo-item>
      <todo-filters v-on:todo:removeAll="removeAll()"></todo-filters>
    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"</style>
