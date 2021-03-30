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
    <div style="margin-top:10px">
        <b-row>
            <b-col>
                <b-row>
                <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                    <b-icon icon="book"></b-icon>
                </div>
                <div class="text-left">
                    <h5> Contamos con 34 Cursos</h5>
                    <p> Variedad de cursos para que puedas divertirte y aprender</p>
                </div>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                    <b-icon icon="award"></b-icon>
                </div>
                <div class="text-left">
                    <h5> Cursos con certificaciones</h5>
                    <p> Certificaciones por curso</p>
                </div>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                <div class="h5 mb-2 text-right" style="width: 3em;height: 3em;justify-content: center;align-items: center;display:flex">
                    <b-icon icon="bookmark-star"></b-icon>
                </div>
                <div class="text-left">
                    <h5> Profesores preparados</h5>
                    <p> excelente plana docente</p>
                </div>
                </b-row>
                
            </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>