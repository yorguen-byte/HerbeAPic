<template>
  <produit
    :price="price"
    :srcVariable="srcVariable"
    :description="description"
    :short_description="short_description"
    :name="name"
  ></produit>
</template>

<script>
import Produit from "./Produit.vue";

export default {
  data() {
    return {
      price: "19.99",
      srcVariable:
        "https://www.christiandemontaguere.com/3837-large_default/phytobokaz-virapic-60ml.jpg",
      description: "",
      short_description: "",
      name: "",
    };
  },
  components: {
    Produit,
  },
  async created() {
    const productId = this.$route.params.id;
    if (productId) {
    }
    try {
      const res = await axios.get(`/api/products/${productId}`);
      const product = res.data;
      console.log(product);
      this.price = product.product_price;
      this.short_description = product.short_description;
      this.name = product.product_name;
      this.description = product.product_description;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
