<template>
    <div class="todoWrapper">
        <span v-on:click="toggleCompleted" v-bind:class="{checkicon: task.completed}"></span>
        <span v-on:click="toggleCompleted" v-bind:class="[{completed: task.completed},'task']">
            {{task.title}}

        </span> 
        <button class="removeTodo" v-on:click="removeItem">X</button>

    </div>
</template>

<script src="./TodoItem.js"></script>
<style lang="scss" src="./TodoItem.scss"></style>