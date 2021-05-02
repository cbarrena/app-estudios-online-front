<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand to="/">
          <img src="https://i.imgur.com/6YvDqJN.jpg" width="100" height="30" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-nav-form class="col-6">
              <b-form-input id="txtbuscar" size="sm" class="mr-sm-2" style="width:330px"  placeholder="¿Que desea aprender?" v-model="nombrecurso"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" @click="getBuscarCurso()">Buscar</b-button>
          </b-nav-form>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <template v-if="nologeado">
                  <b-button size="sm" @click="showModal()">Log in</b-button>
                </template>
                <template v-else >
                  <b-button size="sm" @click="getSignOut()">Sign Out</b-button>
                </template>  
              </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
     <Login ref="modalComponent"/>
  </div>
  
</template>
<script>
import Login from '@/components/FrmLogin.vue'

export default ({
  name: 'app',
  data(){
    return{
      nombrecurso:'',
      nologeado:true,
      mostrarLogin:false
    }
  },
  mounted(){
    if (localStorage.getItem('idusuario')===null){
      this.nologeado=true;
    }else{
      this.nologeado=false;
    }
  },
  components: {
    Login
  },
  methods:  {
    getBuscarCurso(){
      let id = this.nombrecurso
      this.nombrecurso =''
      const path ='/CursoBuscado/${nombrecurso}'
      if (this.$router.path !== path) this.$router.push({name:'CursoBuscado',params:{nombrecurso:id}})
    },
    cambiarbotones(){
      if (localStorage.getItem('idusuario')===null){
        this.nologeado=true;
      }else{
        this.nologeado=false;
      }
    },
    getSignOut(){
      localStorage.removeItem('idusuario')
      this.cambiarbotones();
      const path = '/'
      console.log(this.$router);
      this.$router.go()
    },
    showModal() {
      this.$refs.modalComponent.show();
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: small;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
