<template>
    <b-container class="pago">
        <b-container >
            <div class="centrar">
            <div>
                <h3>Pagar con Tarjeta Credito/Debito</h3>
                <b-img src="../assets/img/visa.png" width="30%"/>
                <b-img src="../assets/img/mastercard.png" width="30%"/>
                <b-img src="../assets/img/dcp.png" width="30%"/>
                <b-img src="../assets/img/amex.png" width="30%"/>
            <div>
            </div>
            </div>
                <p v-if="errors.length">
                    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                    <ul>
                    <li v-for="error in errors" v-bind:key="error.id" >{{ error }}</li>
                    </ul>
                </p>
                <b-row>
                    <b-col>
                        <b-input-group size="sm" class="mb-3">
                            <b-input-group-prepend is-text>
                                <b-icon icon="credit-card"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="0000 0000 0000 0000" v-on:keydown="ofuscar" v-model="txtTarjetaOfu" size="14"
                            ></b-form-input>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-input-group size="sm" class="mb-3">
                            <b-input-group-prepend is-text>
                                <b-icon icon="calendar2-date"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="MM/DD" v-model="txtFecha" v-on:keydown="soloNumeroFecha" size="4"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group size="sm" class="mb-3">
                            <b-input-group-prepend is-text>
                                <b-icon icon="calendar2-date"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="CVV" v-model="txtCvv" v-on:keydown="soloNumeroCVV" size="3"></b-form-input>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-input-group size="sm" class="mb-3">
                            <b-input-group-prepend is-text>
                                <b-icon icon="person"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="Nombre" v-model="txtNombre"></b-form-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <b-input-group size="sm" class="mb-3">
                            <b-input-group-prepend is-text>
                                <b-icon icon="person"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="Apellido" v-model="txtApellido"></b-form-input>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-input-group size="sm" class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="envelope"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="Correo" v-model="txtCorreo"></b-form-input>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col><b-button variant="danger" size="lg" block @click="goback">Cancelar</b-button></b-col>
                    <b-col><b-button variant="primary" size="lg" block @click="pagarCurso" >Pagar</b-button></b-col>
                </b-row>
            </div>
        </b-container>
    </b-container>
</template>
<style>
.centrar{
    margin: auto;
    width: 30%;
    border: 1px solid grey;
    padding: 10px;
}
</style>
<script>
export default {
    name:'Pago',
    data() {
      return {
        errors: [],
        txtTarjeta:'',
        txtTarjetaOfu:'',
        txtCorreo:'',
        txtFecha:'',
        txtNombre:'',
        txtApellido:'',
        txtCvv:''
      }
    },
    methods: {
      ofuscar(event) {
          if(/^\d*$/.test(event.key)){
              this.txtTarjeta=this.txtTarjetaOfu
              if(this.txtTarjetaOfu.length <= 10){
                  this.txtTarjetaOfu = this.txtTarjetaOfu.replace(/[0-9]/g, '*')
              }
              if(this.txtTarjetaOfu.length > 13){
                  if(event.keyCode!==8 && event.keyCode!==9){
                    event.preventDefault();
                  }
              }
          }else{
              if(event.keyCode!==8 && event.keyCode!==9){
                  event.preventDefault();
              }
          }
      },
      soloNumeroFecha(event) {
          if(!/^\d*$/.test(event.key)){
              if(event.keyCode!==8 && event.keyCode!==9){
                  event.preventDefault();
              }
          }

          if(this.txtFecha.length > 3){
                  if(event.keyCode!==8 && event.keyCode!==9){
                    event.preventDefault();
                  }
              }
      },
      soloNumeroCVV(event) {
          if(!/^\d*$/.test(event.key)){
              if(event.keyCode!==8 && event.keyCode!==9){
                  event.preventDefault();
              }
          }

        if(this.txtCvv.length > 2){
            if(event.keyCode!==8 && event.keyCode!==9){
                event.preventDefault();
            }
        }
      },
      pagarCurso(){
        this.errors = [];
        if (!this.txtTarjetaOfu) {
            this.errors.push('El Numero de tarjeta es obligatorio.');
        }
        if (!this.txtFecha) {
            this.errors.push('La fecha de expiración es obligatorio.');
        }
        if (!this.txtCvv) {
            this.errors.push('el cvv es obligatorio.');
        }
        if (!this.txtNombre) {
            this.errors.push('El nombre es obligatorio.');
        }
        if (!this.txtApellido) {
            this.errors.push('El apellido es obligatorio.');
        }
        if (!this.txtCorreo) {
            this.errors.push('El correo es obligatorio.');
        }

        if(this.errors.length<=0){
          let curso = this.$route.params.idcurso
          
                this.$axios.post('usuario/mail',{
                    usuarioId:parseInt(localStorage.getItem('idusuario')),
                    cursoId:curso,
                    mailFrom:"",
                    passwordFrom:""
                })
                .then(response => {
                    let pagook = response.data.data
                    if (pagook){
                        alert('gracias por inscribirse, los datos de su clase fueron enviados por correo')
                    }
                    
                    this.$router.push({name:'Home'})
                })
                .catch(e => console.log(e))                
        }


      },
      goback(){
          this.$router.push({name:'Home'})
      }
      
    }
}
</script>
