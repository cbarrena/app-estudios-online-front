<template>
<div class="inscripcion">
    <div class="container ">
        <h3>Gracias por inscribirse!</h3>
        <p>El curso que llevará es: {{$route.params.nombrecurso}}</p>
        <p> Ingrese los datos solicitados y en breve unos de nuestros asesores se comunicara con usted</p>
        <b-row class="justify-content-md-center">
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
            id="input-group-1"
            label="Correo electronico:"
            label-for="input-1"
            description="Nosotros no compartiremos su correo con nadie"
        >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ingrese su correo"
            required
            ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Registrar</b-button>
        </b-form>
        </b-row>
    </div>
</div>
    
</template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert('Información Recibida');
        this.$router.push({name:'Home'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
      }
    }
  }
</script>

