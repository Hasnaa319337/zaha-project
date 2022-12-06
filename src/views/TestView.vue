<template>
  <section class="testview">
    <h1>Test View</h1>
    <div v-for="cat in catData" :key="cat.id">
        <span>{{cat.categorieName}}</span> -- <span>{{cat.num_of_pieces}}</span>
    </div>

  </section>
</template>

<script>

import getCatData from '@/composable/getCatData'
import { reactive,ref ,toRef , toRefs} from 'vue';
export default {
    setup(){

        const{ catData,error,loadCatData} = getCatData();

        loadCatData()

        return{catData,error};
        const state1 = reactive({name:'reactive state'})
        console.log(state1.name )

        const state2 = ref('ref state')
        console.log(state2.value);




    
    }
}
</script>

<style>
.testview{
    margin: 20px auto;
    text-align: center;
}
</style>