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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/300/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="https://picsum.photos/1024/300/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
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