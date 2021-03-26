<template>
    <div class="cursosbaratos">
        <section id="cursosbaratos" class="pb-5">
            <div class="container">
                <div class="row" >
                    <div class="col-xs-12 col-sm-6 col-md-4" v-for="curso in cursosbaratos" :key="curso.id">
                        <div class="card">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src="https://i.imgur.com/xfOEqCJ.png" alt="card image"></p>
                                <h4 class="card-title">{{curso.nombre}}</h4>
                                <p class="card-text">{{curso.descripcion}}</p>
                                <b-button href="#" variant="primary">Inscribirse</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
    return{
      cursosbaratos:null
    }
  },
  mounted(){
    this.getCursosBaratos();
  },
  methods:{
    getCursosBaratos(){
      axios.get('https://proyecto-agiles-grupo5.herokuapp.com/api/v1/curso')
      .then(response => {
        this.cursosbaratos = response.data.data.items
      })
      .catch(e => console.log(e))
    }
  },
}
</script>
