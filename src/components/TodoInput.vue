<template>
  <div class="todo-input">
      <input v-bind:placeholder="placeholder" type="text" v-model="text" v-on:keyup.enter="addItem"/>
      <button class="btn btn-primary" name="button" v-on:click="addItem">Add</button>
  </div>
</template>

<script src="./TodoInput.js"></script>
<style lang="scss" src="./TodoInput.scss"></style>
