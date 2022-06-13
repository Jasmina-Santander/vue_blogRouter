<template>
<!--Seccion Contacto-->
  <section class="color">
    <div class="container">
      <h2 class="titulo2 pt-5">Contactanos:</h2>
      <!--Formulario-->
      <form>
        <div class="form-group pt-5">
          <label for="exampleInputEmail1"> Email address </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value="nombre@gmail.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputComentario1">Comentario</label>
          <input
            type="comentario"
            class="form-control"
            id="exampleInputComentario1"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.container {
  width: 40%;
}
.form-group {
  color: rgb(0, 0, 0);
}
/*Fondo de pagina */
.color {
  height: 90vh;
  background: linear-gradient(
      rgba(119, 176, 202, 0.671),
      rgba(117, 109, 109, 0.336)
    ),
    url(../assets/contacto.webp);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
