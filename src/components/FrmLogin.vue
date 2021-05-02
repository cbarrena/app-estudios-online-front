<template>
    <b-modal id="modal1log" ref="modal1log" title="Login" hide-footer>
      <b-container class="text-center">
        <b-container id="cLogin" v-show="vLogin">
            <b-row>
              <b-col>
                <b-form-group>
                <b-form-input
                  id="txtMail"
                  v-model="frmlogin.email"
                  type="email"
                  placeholder="Ingrese su correo"
                  required
                ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group>
                <b-form-input
                  id="txtPassword"
                  v-model="frmlogin.password"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  required
                ></b-form-input>
              </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button fluid @click="logearse">Ingresar</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span>¿Aún no esta Registrado?</span>
                <a href="#" @click.prevent="vRegistrar=true; vLogin=false">Registrarse</a>
              </b-col>
            </b-row>
        </b-container>
        <b-container id="cRegistrar" v-show="vRegistrar">
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-input
                  id="txtNombre"
                  v-model="registro.nombre"
                  type="text"
                  placeholder="Ingrese su Nombre"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-input
                  id="txtApellido"
                  v-model="registro.apellidos"
                  type="text"
                  placeholder="Ingrese sus Apellidos"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-input
                  id="txtCorreo"
                  v-model="registro.correo"
                  type="email"
                  placeholder="Ingrese su Correo"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-input
                  id="txtContrasenia"
                  v-model="registro.contrasenia"
                  type="text"
                  placeholder="Ingrese su Contraseña"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
              <b-col>
                <b-button fluid @click="registrarse">Registrarse</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span>¿Ya esta Registrado?</span>
                <a href="#" @click.prevent="vRegistrar=false; vLogin=true">Logearse</a>
              </b-col>
            </b-row>
        </b-container>
      </b-container>
        
    </b-modal>

    
</template>
<style>
  .container {
  padding: 2rem 0rem;
}

.form-title {
  margin: -2rem 0rem 2rem;
}

.btn-round {
  border-radius: 3rem;
}

.delimiter {
  padding: 1rem;  
}


.signup-section {
  padding: 0.3rem 0rem;
}
</style>
<script>
    export default {
      data() {
      return {
        frmlogin: {
          email: '',
          password: ''
        },
        registro: {
          nombre: '',
          apellidos:'',
          correo:'',
          contrasenia: ''
        },
        vLogin:true,
        vRegistrar:false
      }
      },
      methods: {
        show() {
          this.$refs.modal1log.show();
        },
        logearse(){
          if (localStorage.getItem('idusuario')) {
                localStorage.removeItem('idusuario')
          }
          this.$axios.post('usuario/login',{
              correo:this.frmlogin.email,
              contrasena:this.frmlogin.password
          })
          .then(response => {
            if(response.data.data != null){    
              localStorage.setItem('idusuario',response.data.data.id)
              this.$parent.cambiarbotones();
              this.$refs.modal1log.hide()
              
            }else{
              alert("Datos de ingreso incorrectos, vuelva a intentar")
              this.frmlogin.email =''
              this.frmlogin.password =''
            }
          })
          .catch(e => console.log(e))
        },
        registrarse(){
          this.$axios.post('usuario/register',{
              nombre:this.registro.nombre,
              apellidos:this.registro.apellidos,
              correo:this.registro.correo,
              contrasena:this.registro.contrasenia
          })
          .then(response => {
            if(response.data.data != null){
              this.$idUsuario = response.data.data.id
              this.$correo = response.data.data.correo
              this.$islogged = 'si'
              this.$refs.modal1log.hide()
            }else{
              alert("Hubo un error en el registro. Por favor, vuelva a intentar")
              this.frmlogin.email =''
              this.frmlogin.password =''
            }
          })
          .catch(e => console.log(e))

        }
      }
    }
</script>