<template id="DetalleCurso">
  <div  class="modal-mask" v-show="closemodal" transition="modal" aria-hidden="true" role="dialog" aria-labelledby="modalTitle" aria-describedBy="modalDescription" style="border: 2px solid black;">
    <div class="modal-container">
        <div class="car-item" v-for="(curso, index) in cursosbaratos" v-bind:key="curso.id"  >
            <div v-if="modalActiveContent(index)">
                <div class="modal-header">
                    <div class="modal-title"><strong>{{curso.nombre}}</strong></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="setModalClose">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <b-container>
                    <b-row class="text-left">
                        <b-col cols="8">
                            <div class="text-left">
                                <label for="rating-sm-no-border">Calificación: {{curso.calificacion}}</label>
                                <b-form-rating id="rating-sm-no-border" v-model="curso.calificacion" no-border inline  size="sm" readonly></b-form-rating>
                            </div>
                            <label><strong>Acerca de Curso</strong></label>
                            <p>{{curso.descripcion}}</p>
                            <p>instructor del curso: {{curso.docente}}</p>
                        </b-col>
                        <b-col>
                            <p><b-icon icon="award" ></b-icon> Pertenece a : {{curso.categoria}}</p>
                            <p><b-icon icon="broadcast" ></b-icon>Tipo de Curso: {{curso.tipoAsistencia}}</p>
                            <div v-if="curso.brindaCertificado">
                                <p><b-icon icon="star" ></b-icon> Este curso brinda certificacion a un costo de: $ {{curso.costoCertificado}}</p>
                            </div>
                            <p><b-icon icon="credit-card" ></b-icon>  Costo del curso es de $ <strong>{{curso.precio}}</strong></p>
                            <div>
                                <b-button variant="primary" @click="gotoPago(curso.id)">Inscribirme</b-button>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                          <div class="text-center"><h5>Que Aprenderás</h5></div>
                          <b-row v-for="(contenido, index) in cursocontenido" v-bind:key="contenido.id" style="border-top: 1px solid; border-top-color: grey;">
                            <b-col cols="2">{{index + 1}}</b-col>
                            <b-col class="text-left">
                             <strong>{{contenido.nombre}}</strong>
                             <b-row v-for="detcon in contenido.cursoContenidoDetalles" v-bind:key="detcon.id">
                               <b-col><b-icon icon="arrow-right" variant="info" shift-h="-5"></b-icon>{{detcon.nombre}}</b-col>
                             </b-row>



                            </b-col>

                          </b-row>
                        
                        </b-col>
                    </b-row>
                </b-container>
        </div>
        </div>
      </div>
  </div>
</template>
<script>
export default ({
    props: {
        active: {
            type:Number,
            default: 0
        },
        isActive: {
            type:Number,
            default: 0
        },
        cursosbaratos: {
            type:Array
        },
        cursocontenido:{
            type:Array,
            default:function(){
                return{}
            }
        },
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
  },
  data(){
    return {
      closemodal: false
    }    
  },
  methods: {
    // check wich content index is active
    modalActiveContent: function(i) {
       return this.active === i
    },
    // close modal
    setModalClose: function() {
     this.closemodal = false;
      //if need set active content to zero object       
     // this.active = 0;
    },
    gotoPago:function(idCurso){
        let id = idCurso
        //this.$router.push({name:'Inscripcion',params:{nombrecurso:id}})
        if (localStorage.getItem('idusuario') !== null){
          this.$router.push({name:'Pago',params:{idcurso:id}})
        }else{
          alert("Antes de inscribirse, por favor logearse, si no tiene una cuenta puede registrarse");
        }
        
    }
  }
})
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: auto;
  max-height: 600px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
