<template>
<div>
     <!-- <ul>
        <li>{{task.title}}</li>
    </ul> -->
        <button v-on:click="removeAll">delete all</button>
        <button class="completados" @click="filtrar">{{noFilter ? 'Ver no completados' : 'Ver todos' }}</button>
</div>
   
</template>

<script src="./TodoFilters.js"></script>
<style src="./TodoFilters.css"></style>
