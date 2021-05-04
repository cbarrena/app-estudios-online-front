<template>
  <div class="cursosporusuario" v-show="mostrarComponente">
    <section id="cursosporusuario" class="pb-5">
      <div class="container">
        <h3 class="text-left"><strong>Cursos Recomendados</strong></h3><hr>
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
            <b-button variant="primary" @click="modalOpen(index, curso.id) ">Ver Mas</b-button>
            </b-card>  
          </div>
        </div>
      </div>
    </section>
      <DetalleCurso ref="modal" :show.sync="showModal" :cursosbaratos="cursosbaratos" :active.sync="active" :cursocontenido="cursocontenido"></DetalleCurso>
  </div>
</template>
<script>

import DetalleCurso from '@/components/DetalleCurso.vue'

export default {
  data(){
    return{
      cursosbaratos:null,
      active: 0,
      showModal: false,
      cursocontenido:null,
      idcurso:'',
      mostrarComponente:false
    }
  },
  mounted(){
    this.getCursosBaratos();
  },
  methods:{
    getCursosBaratos(){
      if (localStorage.getItem('idusuario') != null){
        this.$axios.get('curso/usuario',{
          params: {
              usuarioId: localStorage.getItem('idusuario'),
              recomendado:true
          }
        })
        .then(response => {
          this.cursosbaratos = response.data.data
        })
        .catch(e => console.log(e))
      }
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
      
    },
    getMostrarComponente(){
      if (localStorage.getItem('idusuario') !== null){
        this.mostrarComponente=true
      }
    }
  },
  components:{
    DetalleCurso
  }
}
</script>
