<template>
    <div>
        <input v-model="updatedTodo" type="text">
        <button @click="()=>updateTodo(props.todo)">확인</button>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const props = defineProps(['todo']);
    const emit = defineEmits(['update-todo', 'close-update'])

    const updatedTodo = ref("");

    const updateTodo = (todo) => {
        emit('update-todo', {...props.todo, text: updatedTodo.value});
        updatedTodo.value = "";
        emit('close-update');
    }

    

</script>

<style lang="scss" scoped>

</style>