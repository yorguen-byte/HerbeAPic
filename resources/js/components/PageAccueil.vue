<template>
    
  <div id="page-accueil">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="40000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="200"
      style="text-shadow: 1px 1px 2px #333;height: 250px;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../storage/img/meilleur_prix.png">
         
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../storage/img/huge.png"></b-carousel-slide>
      <b-carousel-slide img-src="../storage/img/huge.png">
         
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../storage/img/huge.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

<b-container class="my-5 ">
  <div class="product-container">
      <the-name></the-name>
  </div>
  
      </b-container>
  
  </div>
</template>

<script>

import contientCode from "./accueil/product_card.vue";

  export default {
      components: {
          TheName: contientCode
      },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
#page-accueil{
  background-color: #e3e3d8;
}
</style>