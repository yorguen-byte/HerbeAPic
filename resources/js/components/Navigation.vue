

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">ZEB A PIK</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav><b-nav-item to="/">Accueil</b-nav-item></b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/produits">Produit</b-nav-item>

          <b-nav-item to="/panier">Panier</b-nav-item>
          <b-nav-item to="/auth/login" v-if="Object.keys(user).length > 0"
            >Login</b-nav-item
          >
          <b-nav-item to="/auth/register" v-if="Object.keys(use).length > 0"
            >Register</b-nav-item
          >

          <b-nav-item to="/PageAdmin" v-else>Admin</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/PageAdmin">
            <b-badge pill variant="success">{{ nombreArticles }}</b-badge>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ user.name }}</em>
            </template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item v-on:click="deconnexion()"
              >Se déconnecter</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"; // SERT à CONNECTER LE COMPOSANT AU STORE
import { BNav } from "bootstrap-vue"; // recuperation du composant user coté back pour reinjection dans le composant vue js
// mounted executé par vue
export default {
  data() {
    return { userName: "" };
  },
  computed: {
    ...mapState({
      user: "user",
    }),
    ...mapGetters({
      nombreArticles: "articles",
    }),
  },
  components: {
    BNav,
  },
  methods: {
    // ici on declare les methods (evenment, click)
    deconnexion(e) {
      try {
        axios.post("/logout");
        this.$store.dispatch("deconnexion");
      } catch (error) {
        this.$store.dispatch("deconnexion");
      }
    },
  },
  watch: {},
  mounted: function () {
    //const JSONuser = localStorage.getItem("user")
    //const user = JSON.parse(JSONuser);
    //this.userName = user ? user.data.name : "";
    //console.log('Component mounted.')
    this.userName = Object.keys(this.user).length > 0 ? this.user.name : "";
  },
};
</script>
