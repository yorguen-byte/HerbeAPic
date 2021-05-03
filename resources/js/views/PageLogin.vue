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
                              <small>
                                  Entrez vos identifiants
                              </small>
                          </div>
                          <b-form @submit="onSubmit">
                              <b-form-group label="Prenom" is-text> 
                                    <b-form-input placeholder="prenom"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Nom"> 
                                    <b-form-input placeholder="nom"></b-form-input>
                                </b-form-group>

                                <b-form-group label="email"> 
                                    <b-form-input placeholder="Email"></b-form-input>
                                </b-form-group>  
                                <b-form-group label="MotDePasse"> 
                                    <b-form-input type="password" placeholder="confirmezMotDePasse"></b-form-input>
                                </b-form-group>  
                                <b-form-group label="confirmezMotDePasse"> 
                                    <b-form-input placeholder="confirmezMotDePasse"></b-form-input>
                                </b-form-group>
                                 <div class="text-center">
                             <b-button variant="primary" type="submit" class="my-4">Login</b-button>
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
 methods:{
     async onSubmit(evt){
         evt.preventDefault();
         try {
             await axios.get("/sanctum/csrf-cookie")
             await axios.post("/login",{
                 name: "Mr. Matteo Johns III",
                 email: "ruecker.grace@example.org",
                 password: "password"
             })
         } catch(err){
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
        
     }
 }
}

</script>

<style>
.bg-gradient{
    background: linear-gradient(90deg, #2dce89, #2dcecc);
}

.py-7{
    padding-bottom: 6rem;
    padding-top: 6rem;
}
.loginPage{
    background: #525f7f;
}
.mt--5{
     margin-top: -3rem;
}
.bg-login-form{
    background-color: #f7fafc;
}


</style>