<template>
  <div class="busquedacurso">
    <section id="busquedacurso" class="pb-5">
      <div class="container">
        <p class="text-left">Buscando cursos por: <strong>{{nombrecurso}}</strong></p><hr>
        <div class="row" >
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="(curso, index) in cursos" :key="curso.id">
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
            <b-button variant="primary" @click="modalOpen(index, curso.id)">Ver Mas</b-button>
            </b-card>  
          </div>
        </div>
      </div>
    </section>
      <DetalleCurso ref="modal" :show.sync="showModal" :cursosbaratos="cursos" :active.sync="active" :cursocontenido="cursocontenido"></DetalleCurso>
  </div>
</template>
<script>

import DetalleCurso from '@/components/DetalleCurso.vue'

export default {
    props: {
    nombrecurso: String
  },
  data(){
    return{
      cursos:null,
      active: 0,
      showModal: false,
      cursocontenido:null,
      idcurso:''
    }
  },
  mounted(){
    this.getCursos();
  },
  methods:{
    getCursos(){
      this.$axios.get('curso',{
        params: {
            Nombre:this.nombrecurso
        }
      })
      .then(response => {
        this.cursos = response.data.data.items
      })
      .catch(e => console.log(e))
    },
    modalOpen: function(i, idcurso) {
      this.$refs.modal.closemodal = true
      this.idcurso=idcurso
      this.getCursoContenido();
      this.showModal = true; 
      return this.active = i;
    },
    getCursoContenido(){
      this.$axios.get('cursocontenido/'+this.idcurso,{})
      .then(response => {
        this.cursocontenido = response.data.data
      })
      .catch(e => console.log(e))
      
    }
  },
  components:{
    DetalleCurso
  },
  watch:{
      nombrecurso:function(){
          this.getCursos();
      }
  }
}
</script>
