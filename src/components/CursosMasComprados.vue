<template>
  <div class="cursomascomprados">
    <section id="cursomascomprados" class="pb-5">
      <div class="container">
        <h3 class="text-left"><strong>Cursos más Comprados</strong></h3><hr>
        <div class="row" >
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="(curso, index) in cursosbaratos" :key="curso.id">
            <b-card
              v-bind:title="curso.nombre"
              v-bind:img-src="curso.urlImagen"
              img-top
              class="mb-2"
              style="max-width: 20rem;"
            >
            <b-card-text>{{curso.descripcion}}</b-card-text>
            <b-card-text class="text-right">Costo: ${{curso.precio}}</b-card-text>
            <div class="text-left">
              <label for="rating-sm-no-border">Calificación: {{curso.calificacion}}</label>
              <b-form-rating id="rating-sm-no-border" v-model="curso.calificacion" no-border inline size="sm" readonly></b-form-rating>
            </div>
            <br/>
            <b-button variant="primary" @click="modalOpen(index)">Ver Mas</b-button>
            </b-card>  
          </div>
        </div>
      </div>
    </section>
      <DetalleCurso :show.sync="showModal" :cursosbaratos="cursosbaratos" :active.sync="active"></DetalleCurso>
  </div>
</template>
<script>

import axios from 'axios'
import DetalleCurso from '@/components/DetalleCurso.vue'

export default {
  data(){
    return{
      cursosbaratos:null,
      active: 0,
      showModal: false,
    }
  },
  mounted(){
    this.getCursosBaratos();
  },
  methods:{
    getCursosBaratos(){
      axios.get('https://proyecto-agiles-grupo5.herokuapp.com/api/v1/curso',{
        params: {
            CategoriaId:3
        }
      })
      .then(response => {
        this.cursosbaratos = response.data.data.items
      })
      .catch(e => console.log(e))
    },
    modalOpen: function(i) {
      console.log(i);
        this.showModal = true; 
        return this.active = i;
      }
  },
  components:{
    DetalleCurso
  }
}
</script>
