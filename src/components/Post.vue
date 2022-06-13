<template>
  <div class="container text-center">
    <router-link :to="{ name: 'routerID', params: { id: num } }">
      <transition name="fade">
        <div class="middle mt-5" v-if="show">
          <a href="" class="btn btn1" v-on:click="show = !show">
            <strong> Ver nuestros Articulos </strong>
          </a>
        </div>
      </transition>
    </router-link>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      //variable que utilizaremos para generar la ruta dinamica
      num:  [html, css, sass, vue, 34],
            //variable que utilizaremos para mostrar y ocultar boton
      show: true,
    };
  },
};
</script>

<style scoped>
/* Estilo de boton */
.middle {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: relative;
  display: block;
  color: rgb(31, 27, 27);
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #545255;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before {
  background: #80ffd9;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.btn1::before {
  width: 0%;
  height: 100%;
}

.btn1:hover::before {
  width: 100%;
}
/* Estilo de transicion de boton para mostrar y ocultar*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
