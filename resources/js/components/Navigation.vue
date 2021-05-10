

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
          <b-nav-item to="/auth/login">Login</b-nav-item>
          <b-nav-item to="/auth/register">Register</b-nav-item>

          <b-nav-item to="/PageAdmin">Admin</b-nav-item>
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
            <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
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
  data: {
    userName: "",
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
  mounted: function () {
    //const JSONuser = localStorage.getItem("user")
    //const user = JSON.parse(JSONuser);
    //this.userName = user ? user.data.name : "";
    //console.log('Component mounted.')
    this.userName = Object.keys(this.user).length > 0 ? this.user.name : "";
  },
};
</script>