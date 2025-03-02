<template>
    <div>
        <input v-model="updatedTodo" type="text">
        <button @click="()=>updateTodo(props.todo)">확인</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { Todo } from '../types/todo';

    const props = defineProps<{todo: Todo}>();
    const emit = defineEmits<{
        (e: 'update-todo', todo:Todo): void;
        (e: 'close-update'): void;
    }>()

    const updatedTodo = ref<string>("");

    const updateTodo = (todo: Todo) => {
        emit('update-todo', {...props.todo, text: updatedTodo.value});
        updatedTodo.value = "";
        emit('close-update');
    }

    

</script>

<style lang="scss" scoped>

</style>