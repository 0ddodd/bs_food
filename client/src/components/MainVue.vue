<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-4" v-for="info, i in foodImgInfo" :key="i">
                <div class="card mb-3">
                    <img
                        :src="info.FOOD_IMG_URL"
                        class="img-fluid"
                        style="width: 100%; height: 300px;"    
                    />
                    <div class="card-body">
                        <p v-if="getFoodName[info.MENU_ID]">{{getFoodName[info.MENU_ID]}}</p>
                        <p>{{info.RSTR_NM}}</p>
                        <p>{{info.AREA_NM}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref, computed } from 'vue';

    const foodInfo = ref([]);
    const foodImgInfo = ref([]);
    
    onMounted(async () => {

        const [infoResult, imgResult] = await Promise.all([
            await axios.get(`${process.env.VUE_APP_API_URL}/menus/info`),
            await axios.get(`${process.env.VUE_APP_API_URL}/menus/img`)
        ])

        foodInfo.value = infoResult.data.body;
        foodImgInfo.value = imgResult.data.body.reduce((acc, curr) => {
            if (!acc.some(item => item.MENU_ID === curr.MENU_ID)) {
                acc.push(curr);
            }
            return acc;
        }, []);
    });

    const getFoodName = computed(() => {
        if (foodInfo.value.length === 0) return {}
        const targetFood = foodInfo.value.reduce((acc, food) => {
            acc[food.MENU_ID] = food.MENU_NM;
            return acc;
        }, {})
        return targetFood;
    });


</script>

<style lang="scss" scoped>

</style>