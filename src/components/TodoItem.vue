<template>
    <div class="todoWrapper">
        <button class="removeTodo" v-on:click="removeItem">delete</button>
        <span v-on:click="toggleCompleted" v-bind:class="{completed: task.completed}">
            {{task.title}}
        </span> 
    </div>
</template>

<script src="./TodoItem.js"></script>
<style lang="scss" src="./TodoItem.scss"></style>