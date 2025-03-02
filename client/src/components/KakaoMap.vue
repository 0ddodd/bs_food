<template>
    <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
        <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"/>
    </KakaoMap>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {useKakao, KakaoMap, KakaoMapMarker} from 'vue3-kakao-maps';
    
    interface Coordinate {
        lat: number,
        lng: number
    }

    useKakao(process.env.VUE_APP_MAP_API_KEY);

    const coordinate = ref<Coordinate>({
        lat: 37.566826,
        lng: 126.9786567
    });


</script>

<style lang="scss" scoped>

</style>