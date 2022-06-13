<template>
<!--Seccion Error en rutas-->
  <section class="rutasinexistentes">
    <div class="container">
      <p class="numero">404</p>
      <p class="texto1">Oooooops!!</p>
      <p class="texto2">THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</p>
    </div>
  </section>
</template>

<script>
export default {
    name: "RutasInexistenteView"
};
</script>

<style scoped>
.numero {
  display: block;
  font-size: 1100%;
  text-align: center;
}
.texto1 {
  display: block;
  font-size: 350%;
  text-align: center;
}
.texto2 {
  display: block;
  font-size: 200%;
  text-align: center;
}
/* Estilos fondo de pagina*/
.rutasinexistentes {
  height: 125vh;
  background-image: url("../assets/error.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
}
.container {
  color: rgb(255, 255, 255);
  text-shadow: black 0.3em 0.3em 0.5em;
}
</style>