<template>
    <div class="categoria">
      <b-navbar type="light" variant="light">
        <b-navbar-brand>Categorías: </b-navbar-brand>
        <b-navbar-nav>
          <div v-for="categoria in categorias" :key="categoria.id">
             <b-nav-item href="#">{{categoria.nombre}}</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>
<script>
import axios from 'axios'

export default ({
  data(){
    return{
      categorias:null
    }
  },
  mounted(){
    this.getCategorias();
  },
  methods:{
    getCategorias(){
      axios.get('https://proyecto-agiles-grupo5.herokuapp.com/api/v1/categoria')
      .then(response => {
        this.categorias = response.data.data.items
      })
      .catch(e => console.log(e))
    }
  }
})
</script>
