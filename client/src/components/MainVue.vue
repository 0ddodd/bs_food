<template>
    <div>
        <div class="container text-center">
            <div class="row">
                <div class="col-4" v-for="info, i in foodImgInfo" :key="i">
                    <div >
                        <p>{{getFoodName[info.MENU_ID]}}</p>
                        <p>{{info.RSTR_NM}}</p>
                        <p>{{info.AREA_NM}}</p>
                        <img
                            :src="info.FOOD_IMG_URL"
                            style="width: 300px; height: 300px;"    
                        />
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
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/menus/info`);
        console.log(result.data.body);
        foodInfo.value = result.data.body;
    });

    onMounted(async() => {
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/menus/img`);
        console.log(result.data.body);
        foodImgInfo.value = result.data.body;
    })

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