<template>
  <div class="section-shopping p-y-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12">
          <div id="content">
            <h1>Recapitulatif</h1>
          </div>
          <onglet>
            <!-- le v-if veut dire affichage v-on c'est pour les evenements -->
            <onglet-item v-on:click="step = 1">01.Recapitulatif</onglet-item>
            <onglet-item v-on:click="step = 2">02.Adresse</onglet-item>
            <onglet-item v-on:click="step = 3">03.Paiment</onglet-item>
          </onglet>
          <recapitulatif v-if="step === 1"></recapitulatif>
          <adresse v-else-if="step === 2"></adresse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Recapitulatif from "./Recapitulatif";
import { BNav, BNavItem } from "bootstrap-vue";
import Adresse from "./adresse.vue";
export default {
  data() {
    return {
      step: 1,
    };
  },
  components: {
    Recapitulatif,
    Onglet: BNav,
    OngletItem: BNavItem,
    Adresse: Adresse,
  },
};
</script>

<style scoped>
.section-shopping {
  background: #ccc;
}
</style>