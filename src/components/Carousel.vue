<template>
  <div >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://i.imgur.com/Qrdwowx.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.imgur.com/LB11sGk.jpeg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://i.imgur.com/ngVRCe4.jpeg"></b-carousel-slide>
    </b-carousel>
    <b-container>
    <div>
        <b-row>
            <b-col>
              <b-row>
                <b-col sm="2">
                  <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                      <b-icon icon="book"></b-icon>
                  </div>
                </b-col>
                <b-col>
                  <div class="text-left">
                      <h5> Contamos con {{sumarizado.cursos}} Cursos</h5>
                      <p> Variedad de cursos para que puedas divertirte y aprender</p>
                  </div>
                </b-col>
              </b-row>
                  
                  
                  
            </b-col>
            <b-col>
              <b-row>
                <b-col sm="2">
                  <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                    <b-icon icon="award"></b-icon>
                </div>
                </b-col>
                <b-col>
                  <div class="text-left">
                    <h5> {{sumarizado.cursosCertificados}} Cursos con certificaciones</h5>
                    <p> Certificaciones por curso</p>
                </div>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col sm="2">
                  <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                    <b-icon icon="bookmark-star"></b-icon>
                </div>
                </b-col>
                <b-col>
                  <div class="text-left">
                    <h5> {{sumarizado.docentes}} Profesores preparados</h5>
                    <p> excelente plana docente</p>
                </div>
                </b-col>
              </b-row>
            </b-col>
        </b-row>
    </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        sumarizado:null

      }
    },
    mounted(){
      this.getSumarizado();
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getSumarizado(){
        this.$axios.get('sumarizado')
        .then(response => {
          this.sumarizado = response.data.data
        })
        .catch(e => console.log(e))
        }
    }
  }
</script>