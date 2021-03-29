<template>
  <div class="cursobuscado">  
    <NavCategoria />
    <BusquedaCurso :nombrecurso="$route.params.nombrecurso" :idcategoria="idcategoria"/>
  </div>
</template>

<script>
// @ is an alias to /src

import NavCategoria from '@/components/NavCategoria.vue'
import BusquedaCurso from '@/components/BusquedaCurso.vue'
export default {
  name: 'cursobuscado',
  components: {
    NavCategoria,
    BusquedaCurso
  }
}
</script>
