<template>
  <div id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>

    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"</style>
