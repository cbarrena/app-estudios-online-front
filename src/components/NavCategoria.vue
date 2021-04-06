<template>
    <div class="categoria">
      <b-navbar type="light" variant="light">
        <b-navbar-brand>Categorías: </b-navbar-brand>
        <b-navbar-nav>
          <div v-for="categoria in categorias" :key="categoria.id">
             <b-nav-item @click="gotosection(categoria.id)">{{categoria.nombre}}</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>
<script>

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
      this.$axios.get('categoria')
      .then(response => {
        this.categorias = response.data.data.items
      })
      .catch(e => console.log(e))
    },
    gotosection:function(idCat){
      switch(idCat){
        case 1:
          document.querySelector("section#cursosbaratos").scrollIntoView({behavior: 'smooth'})
          break;
        case 2:
          document.querySelector("section#cursosrecomendados").scrollIntoView({behavior: 'smooth'})
          break;
        case 3:
          document.querySelector("section#cursomascomprados").scrollIntoView({behavior: 'smooth'})
          break;
      }
      console.log();
    }
  }
})
</script>
