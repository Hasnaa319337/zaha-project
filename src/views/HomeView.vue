<template>
  <main>
    <h1>This is an home page</h1>
  <input type="text" v-model="search">
  <p>you searched for {{search}}</p>
<div class="array" v-for="name in filterNames " :key="name">{{name}}</div>
  </main>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
    //data
    const search = ref('')
    const names = ref(['hasnaa' , 'osama' , 'salma' , 'khaled' , 'mostafa'])
    //method
    const filterNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })
    watch(search,()=>{
      console.log('hello')
    })
    watchEffect(()=>{
      console.log('hi'),search.value
    })
    //return
    return{names , search,filterNames}
  },
};
</script>


<style>
.array{
  margin-left: 58px;
    margin-top: 10px;
}


</style>
