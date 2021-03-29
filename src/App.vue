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
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default ({
  name: 'app',
  data(){
    return{
      nombrecurso:''
    }
  },
  methods:  {
    getBuscarCurso(){
      let id = this.nombrecurso
      this.nombrecurso =''
      const path ='/CursoBuscado/${nombrecurso}'
      if (this.$router.path !== path) this.$router.push({name:'CursoBuscado',params:{nombrecurso:id}})
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
