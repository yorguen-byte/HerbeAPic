<template>
    <produit :price="price" :srcVariable="srcVariable"></produit>
</template>

<script>


import Produit from './Produit.vue';

    export default {
        data(){
            return {
                price:"19.99",
                srcVariable: "https://www.christiandemontaguere.com/3837-large_default/phytobokaz-virapic-60ml.jpg"
            }
        },
        components: {
            Produit
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
