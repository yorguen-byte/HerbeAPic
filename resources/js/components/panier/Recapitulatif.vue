<template>
    <div id="order-detail">
<b-table :items="liste"></b-table>
    </div>
</template>

<script>
import {BTable} from 'bootstrap-vue';

export default {
    data() {
        return{
            liste: [
          { Produit: 40, Description: 'Dickerson', total: 'Macdonald' },
          { Produit: 21, Description: 'Larsen', total: 'Shaw' },
          { Produit: 89, Description: 'Geneva', total: 'Wilson' },
          { Produit: 38, Description: 'Jami', total: 'Carney' }
        ]
        }
    },
    components:{
        BTable
    }
}
</script>
