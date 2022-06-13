<template>
<!--Menu paginas-->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="nav-link" href=""><router-link to="/">TecnoChile</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href=""><router-link to="/sobremi">Sobre mi</router-link></a>
          <a class="nav-link" href=""><router-link to="/contacto">Contacto</router-link></a>
          <a class="nav-link" href=""><router-link to="/post">Post</router-link></a>
          <a class="nav-link" href=""><router-link to="/ru">Rutas Inexistente</router-link></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
.navbar a {
  color: rgb(255, 251, 251);
}
</style>
