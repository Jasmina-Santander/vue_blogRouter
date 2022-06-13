<template>
  <!--Seccion de lista de articulos-->
  <section class="container">
    <div id="todo-list-example ">
      <ul class="list-group mb-3" v-for="todo in todos" :key="todo.id">
        <li class="list-group-item">{{ todo.parrafo }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "MisPost",
  //Lista de datos
  data() {
    return {
      todos: [
        {
          id: 1,
          parrafo:
            "Durante los próximos años posiblemente oiremos hablar mucho del nuevo universo del Metaverso. Nos dirigimos rápidamente hacia él: Realidades virtuales en las que viviremos vidas digitales conviviendo con nuestra vida real.",
        },
        {
          id: 2,
          parrafo:
            "La última sorpresa en ciberseguridad ha sido el aumento de ciberataques a políticos, tanto independentistas como del Gobierno con el spyware Pegasus. Sin embargo ,ha sido solo la gota que colma el vaso, en una época complicada en cuanto a ciberseguridad. ",
        },
        {
          id: 3,
          parrafo:
            "La Inteligencia Artificial en fabricación industrial se define como la inteligencia con que cuentan las máquinas para realizar tareas parecidas a las de los humanos, tales como responder a eventos internos y externos o incluso anticiparse a ellos de forma autónoma.",
        },
        {
          id: 4,
          parrafo:
            " Desde la aparición de las primeras redes sociales hasta nuestros días, más de mil millones de personas en todo el mundo se han convertido en usuarios asiduos.",
        },
      ],
    };
  },
};
</script>

<style>
.list-group {
  box-shadow: 0px 11px 23px 5px rgba(0, 0, 0, 0.34);
}
.list-group-item {
  background-color: rgba(255, 255, 255, 0.7);
  border: 0;
}
</style>
