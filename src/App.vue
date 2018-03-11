<template>
  <div class="todo-app" id="app">
    <div class="todo-content">
      <todo-header></todo-header>
      <span class="counter unfinished-task">{{incompletedTasks.length}} {{task_counter1}}</span>
      <span class="counter finished-task">{{completedTasks.length}} {{task_counter2}}</span>
      <span class="date">{{moment(date).format('dddd, DD')}}th</span>
      <todo-input v-on:todo:add="addItem"></todo-input>
      <div class="todo-filters">
        <span class="text">Filter:</span>
        <button class="btn-filter" v-on:click="filter">{{noFilter ? 'Uncompleted tasks' : 'All tasks' }}</button>
        <todo-removeAll v-on:todo:removeAll="removeAll()"></todo-removeAll>  
      </div>
      
      <todo-item v-for = "(task, i) in todosFiltered" v-bind:task = "task" v-on:todo:remove="removeItem" :key="i"></todo-item>
      

    </div>  
  </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>
