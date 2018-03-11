<template>
    <div class="todoWrapper">
        <span v-on:click="toggleCompleted" v-bind:class="[{completed: task.completed}, 'icons']">
            {{task.title}}
        </span> 
        <button class="removeTodo" v-on:click="removeItem">delete</button>

    </div>
</template>

<script src="./TodoItem.js"></script>
<style lang="scss" src="./TodoItem.scss"></style>