<template>
<!--Seccion Sobre mi-->
  <section class="sobremi">
    <div class="container">
      <!--Titulo y texto-->
      <h1>Estrategias para usar las redes sociales en las empresas</h1>
      <p>
        Las estrategias que usan las empresas para utilizar las redes sociales
        pueden dividirse en tres grupos, dependiendo de su enfoque, complejidad
        y propósito.
      </p>
      <!--Inicio Lista-->
      <ul class="list-group">
        <li class="list-group-item">
          <strong> Estrategia de marca:</strong>
          <br />
          En primer lugar, la aproximación más básica para la gestión de las
          redes sociales desde una perspectiva empresarial consiste en el
          establecimiento de políticas, directrices y controles que regulen el
          uso que los empleados hacen de las redes sociales en la comunicación
          de la información corporativa. De este modo preservamos la imagen de
          la empresa y evitando impactos reputacionales negativos derivados de
          comentarios desafortunados.
        </li>
        <li class="list-group-item">
          <strong>Comunicación con el cliente por medio de las redes sociales:</strong>
          <br />
          Consiste en adaptar y extender los servicios empresariales a las redes
          sociales, considerándolas como un canal más de comunicación con
          clientes. Desde esta perspectiva, son muchas las compañías que desde
          hace varios años han apostado por este enfoque. Los primeros servicios
          fueron liderados por las áreas de Recursos Humanos, Comunicación,
          Marketing y Atención al cliente. Todas ellas compartían enfoques
          tácticos u operativos como la búsqueda de talento, compartir
          información interna, la relación con el cliente, la comunicación
          corporativa y el marketing de productos.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "SobreMiView"
};
</script>

<style scoped>
.container {
  padding: 5%;
}
/* Estilo fondo de pagina */
.sobremi {
  background-image: url("../assets/sobremi.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto auto;
}
/* Estilo Lista*/
.list-group {
  box-shadow: 0px 11px 23px 5px rgba(0, 0, 0, 0.34);
}

.list-group-item {
  background-color: rgba(248, 209, 248, 0.863);
  border: 0;
}
</style>
