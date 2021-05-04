<template>
  <div class="home">  
    <NavCategoria />
    <Carousel />
    <CursosPorUsuario />
    <CursosBaratos />
    <CursosMasComprados />
    <CursosRecomendados />
  </div>
</template>

<script>
// @ is an alias to /src

import NavCategoria from '@/components/NavCategoria.vue'
import CursosBaratos from '@/components/CursosBaratos.vue'
import CursosMasComprados from '@/components/CursosMasComprados.vue'
import CursosRecomendados from '@/components/CursosRecomendados.vue'
import CursosPorUsuario from '@/components/CursosPorUsuario.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    NavCategoria,
    CursosPorUsuario,
    CursosBaratos,
    CursosMasComprados,
    CursosRecomendados,
    Carousel
  },
  methods:{
    goToLogin(){
      this.$parent.showModal();
    }
  }
}
</script>
