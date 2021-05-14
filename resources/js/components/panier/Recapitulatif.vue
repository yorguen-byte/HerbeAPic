<template>
  <div id="order-detail">
    <b-table
      :items="panier.articles"
      :fields="fields"
      v-if="panier.articles.length"
    >
      <template #cell(product_web_url)="row">
        <b-img
          thumbnail
          fluid
          class="recapitulatif-cell-img"
          :src="row.item.product_web_url"
          style="max-width: 80px"
        />
      </template>

      <!-- template pour la colone prix -->
      <template #cell(product_price)="rowData" style="vertical-align: middle">
        <div class="recap-price">{{ rowData.item.product_price }}€</div>
      </template>

      <template #cell(action)="rowData" style="vertical-align: middle">
        <b-icon
          icon="trash-fill"
          @click="deleteProduct(rowData.item.id)"
          class="cursor-pointer"
        ></b-icon>
      </template>
    </b-table>
    <p v-else>Votre panier est vide</p>
    <b-table :items="panier.articles"> </b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      fields: ["product_web_url", "product_price", "product_name", "action"],
    };
  },

  computed: {
    ...mapState({
      panier: "panier",
    }),
  },

  components: {
    BTable,
  },
  methods: {
    deleteProduct(id) {
      this.$store.commit("supprimerDuPanier", id);
    },
  },
};
</script>

<style scoped>
.recapitulatif-cell-img {
  max-width: 80px;
}
#order-detail {
  background: white;
}
</style>