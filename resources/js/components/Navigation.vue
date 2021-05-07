

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
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/PageAdmin">Admin</b-nav-item>
        </b-navbar-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{userName}}</em>
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
import {BNav} from "bootstrap-vue" // recuperation du composant user coté back pour reinjection dans le composant vue js
                                  // mounted executé par vue
    export default {
      data:{
        userName: ""

      
      },

      
        components:{
            BNav,
        },
        mounted() {
          const JSONuser = localStorage.getItem("user") 
          const user = JSON.parse(JSONuser); 
          this.userName = user ? user.data.name : "";
            console.log('Component mounted.')
        }
    }
</script>