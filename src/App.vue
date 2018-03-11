<template>
  <div class="todo-app" id="app">
    <div class="todo-content">
      <TodoHeader></TodoHeader>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <todo-removeAll v-on:todo:removeAll="removeAll()"></todo-removeAll>  
       <button class="" v-on:click="filter">{{noFilter ? 'Ver no completados' : 'Ver todos' }}</button>

      <!-- <todo-filters v-on:todo:filter="filter()"></todo-filters> -->
      <todo-item v-for = "(task, i) in todosFiltered" v-bind:task = "task" v-on:todo:remove="removeItem" :key="i"></todo-item>
      

    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
