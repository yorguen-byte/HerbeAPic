<template>
  <div class="loginPage">
    <div class="header bg-gradient py-7">
      <b-container>
        <div class="header-body">
          <b-row>
            <b-col>
              <h1 class="text-white">Bienvenue</h1>
              <p>Connectez-vous en utilisant le formulaire ci-dessous</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <b-container class="mt--5">
      <b-row>
        <b-col>
          <b-card class="bg-login-form">
            <b-card-body class="px-5">
              <div class="text-center">
                <small> Entrez vos identifiants </small>
              </div>
              <b-form @submit="onSubmit">
               

                <b-form-group label="Nom">
                  <b-form-input v-model="name" placeholder="nom"></b-form-input>
                </b-form-group>

                <b-form-group label="email">
                  <b-form-input
                    v-model="email"
                    placeholder="Email"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="MotDePasse">
                  <b-form-input
                    v-model="password"
                    type="password"
                    placeholder="confirmezMotDePasse"
                  ></b-form-input>
                </b-form-group>
                <div class="text-center">
                  <b-button variant="primary" type="submit" class="my-4"
                    >Login</b-button
                  >
                </div>
                <div>
                Si vous n'avez pas de compte? 
                    <router-link to="/auth/register" class="font-weight-bold">S'enregister</router-link>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data: { name: "", email: "", password: "" },
  beforeCreate() {
      
  },
  methods: {
    async onSubmit(evt) {

      evt.preventDefault();
      try {
        await axios.get("/sanctum/csrf-cookie");
        const response = await axios.post("/login", {
          name: this.name,
          email: this.email,
          password: this.password,
          //  name: "Mr. Matteo Johns III",
          //  email: "ruecker.grace@example.org",
          //  password: "password"
        });
        const user = response.data
        this.$store.commit("setLoggedIn", true)
        this.$store.commit('setUser',user)
        //await localStorage.setItem("user", JSON.stringify(user));
        this.$router.push({ path: "/home" });
      } catch (err) {
        console.log("*************err********");
        console.log(err);
        console.log("*************err********");
      }

      // axios.get('/sanctum/csrf-token')
      // .then(res => {
      //     console.log("*************res********");
      //     console.log(res);
      //     console.log("*************res********");
      // })
      // .catch(err => {
      //     console.log("*************err********");
      //     console.log(err);
      //     console.log("*************err********");
      // })
    },
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(90deg, #2dce89, #2dcecc);
}

.py-7 {
  padding-bottom: 6rem;
  padding-top: 6rem;
}
.loginPage {
  background: #525f7f;
}
.mt--5 {
  margin-top: -3rem;
}
.bg-login-form {
  background-color: #f7fafc;
}
</style>