<template>
  <div class="wrapper product_card">
    <!-- qctuelle,ent le toqster est geré pqr vue-toqsted. TODO utiliser la propriété visible -->
    <b-toast id="success-ajout" v-if="/*notifications.length*/ true"
      >Ajouté au panier</b-toast
    >
    <div class="content-container">
      <div
        class="img-wrapper cursor-pointer"
        :style="{
          'background-image': `url(../storage/img/produits/${storage_url})`,
        }"
        v-on:click="goToProduct(product.id)"
      ></div>
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h3 @click="goToProduct(product.id)" class="product-name">
              {{ name }}
            </h3>
            <p class="product-price">{{ price }} les 3 flacons</p>
          </div>
          <div class="buy">
            <b-icon icon="cart" @click="addToBasket(product)"></b-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="inside-description">
      <div class="info-wrapper">
        <b-icon icon="info-circle"> </b-icon>
      </div>
      <div class="inside-description-text">
        {{ product.product_description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["price", "name", "storage_url", "product"],
  data() {
    return {
      ...mapState({
        notifications: "notifications",
      }),
    };
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    goToProduct(id) {
      // this.$router.push({ path: "produits/" + id });
      this.$router.push({ name: "produits", params: { id: id } });
    },

    addToBasket(product) {
      console.log(this);
      this.addProductToCart(product);
      // this.$store.dispatch('addProductToCart', product);
      //this.$store.commit("ajoutAuPanier", product);
      //this.$bvToast.show("success-ajout");
      //setTimeout(() )
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  height: 500px;
  border-radius: 10px;
  transform: scale(0.95);
  transition: transform 0.5s, box-shadow 0.5s;
  position: relative;
  overflow: hidden;
  border: 2px solid #efefef;
}
.wrapper:hover {
  transform: scale(0.97);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}
.content-container {
  width: 100%;
  height: 100%;
}
.top {
  width: 80%;
  height: 100%;
}

.img-wrapper {
  height: 80%;
  width: 100%;
  background: url(https://th.bing.com/th/id/Rc26a9974b1e0ae2ae7236fd6b5b104fc?rik=z1jvycgbZ4GzHw&pid=ImgRaw);
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
}
.bottom {
  width: 100%;
  height: 20%;
  background: #f3f3f3;
}
.product-name,
.product-price {
  margin: 0;
  padding: 0;
}
.details {
  padding: 20px;
  width: 70%;
}

.left {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.buy {
  background: #f1f1f1;
  transition: background 500;
  width: 30%;
  border-left: solid thin rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer
}
.buy:hover {
  /* background:#46f84c; */
  background: #a6cdde;
}
.product-name {
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.buy .bi-cart {
  font-size: 30px;
}

.inside-description {
  background: #ccc;
  width: 140px;
  height: 140px;
  border-radius: 0px 0px 200px 200px;
  position: absolute;
  top: -70px;
  right: -70px;
  transition: all 0.5s, border-radius 0.5s, top 0.5s;

  overflow: hidden;
}

.inside-description:hover {
  width: 100%;
  right: 0;
  top: 0;
  border-radius: 0;
  height: 80%;
  background: #ccc;
}

.inside-description:hover .info-wrapper {
  opacity: 0;
  right: 15px;
  top: 15px;
}

.inside-description:hover .inside-description-text {
  opacity: 1;
  transform: scale(1);
  transform: translateY(0);
}

.inside-description-text {
  padding: 5%;
  opacity: 1;
  transform: scale(0.5);
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;
  overflow-y: auto;
  height: 100%;
}

.info-wrapper {
  position: absolute;
  right: 80px;
  top: 85px;
}
.info-wrapper .bi-info-circle {
  color: white;
  font-size: 30px;
}
</style>
