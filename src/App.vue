<template>
  <div id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <todo-item v-for = "(task, i) in todosFiltered" v-bind:task = "task" v-on:todo:remove="removeItem" :key="i"></todo-item>
      <todo-removeAll v-on:todo:removeAll="removeAll()"></todo-removeAll>  
      <todo-filters v-on:todo:filter="filter()"></todo-filters>
      <!-- <button class="" @click="filter">{{noFilter ? 'Ver no completados' : 'Ver todos' }}</button> -->

    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"</style>
