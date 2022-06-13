<template>
<!--Seccion Portada-->
  <section class="portada">
    <div class="container">
      <h1 class="titulo">TECNOCHILE</h1>
      <p class="caja">
        Desde la aparición de las primeras redes sociales hasta nuestros días,
        más de mil millones de personas en todo el mundo se han convertido en
        usuarios asiduos. La efectividad de las redes sociales para llegar a las
        personas no ha pasado desapercibido para las empresas que, viendo su
        impacto mediático y reputacional, las están usando como plataformas de
        comunicación con sus clientes. En este blog te explicamos las cuestiones
        más importantes que debes tener en cuenta para trabajar con las redes
        sociales.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portada",
};
</script>

<style scoped>
/*Estilo Fondo de pagina*/ 
.portada {
  height: 127vh;
  background-image: url("../assets/portada.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
.container {
  padding-top: 15%;
  padding-left: 20%;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
}
/*Estilo Fondo de texto y texto*/
.caja {
  background-color: hsla(180, 1%, 26%, 0.774);
  color: white;
  text-shadow: black 0.1em 0.1em 0.3em;
  text-align: center;
  box-shadow: 5px 5px 10px black;
}

.titulo {
  font-family: "Open Sans";
  font-size: 35px;
  color: black;
  font-weight: 1000;
  text-shadow: none;
}
</style>
