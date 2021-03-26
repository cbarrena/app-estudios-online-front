<template>
  <div class="home">  
    <NavCategoria />
    <CursosBaratos />
    
  </div>
</template>

<script>
// @ is an alias to /src

import NavCategoria from '@/components/NavCategoria.vue'
import CursosBaratos from '@/components/CursosBaratos.vue'
export default {
  name: 'Home',
  components: {
    NavCategoria,
    CursosBaratos
  }
}
</script>
