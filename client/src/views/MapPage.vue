<template>
    <div>
        <KakaoMap />
        {{address}}
    </div>
</template>

<script setup lang="ts">    
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import KakaoMap from "../components/KakaoMap.vue";

    const route = useRoute();
    const address = ref<string | string[]>("")

    onMounted(async() => {
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/map/${route.params.id}`);
        address.value = route.params.id;
        console.log(result);
    })
</script>

<style lang="scss" scoped>

</style>