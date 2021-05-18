<template>
  <div id="page-accueil">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="40000"
      controls
      background="#ababab"
      img-width="1903"
      img-height="330"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../storage/img/meilleur_prix.png">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../storage/img/huge.png"></b-carousel-slide>
      <b-carousel-slide img-src="../storage/img/huge.png"> </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    <b-container class="my-5 d-flex justify-content-center flex-wrap">
      <div
        v-for="productItem in productList"
        class="product-container m-2"
        v-bind:key="productItem.id"
      >
        <product
          :name="productItem.product_name"
          :price="productItem.product_price"
          :storage_url="productItem.product_storage_url"
          :product="productItem"
        ></product>
      </div>
    </b-container>
  </div>
</template>

<script>
import contientCode from "./accueil/product_card.vue";

export default {
  components: {
    Product: contientCode,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      productList: [],
    };
  },

  mounted() {
    axios
      .get("/api/products") // interroge route qck Route::get('products')
      .then((res) => (this.productList = res.data))
      .catch(console.log);
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
#page-accueil {
  background-color: #e3e3d8;
}

.product-container {
  display: inline-flex;
  width: fit-content;
}
</style>