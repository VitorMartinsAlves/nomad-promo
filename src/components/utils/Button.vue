<template>
    <button class="btn btn-primary rounded-pill py-3 px-4" type="submit">
        <slot></slot>
    </button>
</template>

<script setup>
/* defineProps({
    classe: {
        type: String
    }
}); */
</script>


<style scoped>
button {
    font-size: 18px;
    z-index: 100;
    width: 100%;
}
button:hover{
    background-color: #FFB000;
    color: #00223C;
    border: 1px solid #FFB000;
}
</style>
