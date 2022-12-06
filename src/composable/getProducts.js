import { ref } from "vue"
export default function getProducts() {
    const products = ref([])
    const error = ref(null)

    const  laodData = async  () =>{
      try {
        let data = await fetch('http://localhost:3000/products')
        // if data is not ok 
        if(!data.ok){
          throw Error('No data available')
        }
        // if data is ok
        products.value = await data.json()
      }
      catch (err) {
        error.value = err.message
      }

    }

    return {products , error, laodData }
}