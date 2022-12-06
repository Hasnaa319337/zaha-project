import { ref } from "vue"



export default function getCatData(){

    const catData = ref([])
    const error = ref(null)

    const loadCatData = async () =>{
        try {
            let data = await fetch(' http://localhost:3000/catData')
    
            //if data not ok 
            if(!data.ok){
                throw Error('no data avialable')
            }
               
            //if data is ok
            catData.value = await data.json()
            
        } 
        catch (error) {
            error.value = error.message
            
        }
   
    }
    return{catData,error,loadCatData}
}
