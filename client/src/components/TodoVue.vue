<template>
    <div>
        <form @submit.prevent>
            <input v-model="newTodo" type="text">
            <button @click="addTodo">Add</button>
        </form>

        <ul>
            <li v-for="(todo, i) in todos" :key="i">
                <span :class="{done: todo.isDone}" @click="()=>toggleDone(todo)">{{todo.text}}</span>
                <button @click="()=>openUpdate(todo)">Update</button>
                <TodoModal
                    v-if="todo.isEditing"
                    :todo="todo"
                    @update-todo="updateTodo"
                    @close-update="()=>closeUpdate(todo)"
                />

                <button @click="()=>deleteTodo(todo)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import TodoModal from './TodoModal.vue'


    const newTodo = ref("");
    const todos = ref([]);

    const addTodo = () => {
        todos.value.push({
            id: Date.now(),
            text: newTodo.value,
            isDone: false,
            isEditing: false,
        });
        newTodo.value="";
    };

    const toggleDone = (todo) => {
        todo.isDone = !todo.isDone;
    };

    const deleteTodo = (todo) => {
        todos.value = todos.value.filter(td => td.id !== todo.id);
    };
    
    const openUpdate = (todo) => {
        todo.isEditing = true;
    };

    const updateTodo = (updatedTodo) => {
        const targetTodo = todos.value.find(td => td.id === updatedTodo.id);
        targetTodo.text = updatedTodo.text;
    }

    const closeUpdate = (todo) => {
        todo.isEditing = false
    }

</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>