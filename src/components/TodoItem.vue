<template>
    <div>
        <button v-on:click="removeItem">delete</button>
        <span v-on:click="toggleCompleted" v-bind:class="{complete: task.completed}">
            {{task.title}}
        </span> 

      <button v-on:click="toggleCompleted" v-bind:class="{completed: task.completed}">asdasd</button>

    </div>
</template>

<script src="./TodoItem.js"></script>
<style src="./TodoItem.css"></style>