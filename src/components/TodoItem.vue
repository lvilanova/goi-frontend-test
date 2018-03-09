<template>
    <div>
        <button v-on:click="removeItem">delete</button>
        {{task.text}}
    </div>
</template>

<script src="./TodoItem.js"></script>
<style src="./TodoItem.css"></style>