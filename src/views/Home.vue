<template>
  <div class="home">  
    <NavCategoria />
    <Carousel />
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
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    NavCategoria,
    CursosBaratos,
    CursosMasComprados,
    CursosRecomendados,
    Carousel
  }
}
</script>
