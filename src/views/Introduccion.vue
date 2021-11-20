<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')
    
    p(data-aos="fade") El mundo entero se ha enfrentado a una amenaza invisible, difícilmente imaginable, declarada en el año 2020 por la Organización Mundial de la Salud (OMS) como pandemia global, la cual ha tenido incidencia en la salud de las personas y ha paralizado actividades sociales y económicas en todo el mundo; además, se ha reconocido como uno de los problemas sanitarios más críticos que ha afectado a la humanidad.

    p.mb-4(data-aos="fade") Le invitamos a ver el siguiente video, que informa sobre los aspectos más relevantes de esta contingencia y su incidencia en el transporte. 

    h5.mb-4(data-aos="fade") ¡Empecemos con mucho entusiasmo!

    .row.justify-content-center.tarjeta.fondo-elementos.mb-5.py-5(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/YfQaUkagePA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
