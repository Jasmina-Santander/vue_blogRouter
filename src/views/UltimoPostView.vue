<template>
  <!--Seccion de ultimo post-->
  <section class="ultimopost">
    <div class="contenido">
      <!--Texto que aparece en la pagina Post-->
      <div class="container text-center">
        <h1>Revisa nuestro Ultimo Post</h1>
        <p>
          Partiendo de la base de que las redes sociales son posiblemente las
          mayores fuentes de “Big Data” sociales del mundo, podría decirse que
          se han convertido en la principal fuente para realizar análisis
          predictivos de conductas y tendencias sociales. Desde estudios de
          mercado y desarrollo de nuevos productos, hasta la evaluación de
          riesgos de negocio y la anticipación a nuevas amenazas apoyándose en
          servicios de ciberinteligencia.
        </p>
        <!--Se agrega el componente hijo, MisPost-->
        <router-view />
        <!--Se agrega el componente Post que es el que tiene un boton con una transicion para ocultarse,
         el cual vuelve a aparecer cuando se carga de nuevo la pagina o se muestra despues de otra seccion-->
        <Post />
      </div>
    </div>
  </section>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "UltimoPostView",
  components: {
    Post,
  },
};
</script>

<style>
/*Fondo pagina*/
.ultimopost {
  background-image: url("../assets/post.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.contenido {
  padding: 15%;
}
</style>
