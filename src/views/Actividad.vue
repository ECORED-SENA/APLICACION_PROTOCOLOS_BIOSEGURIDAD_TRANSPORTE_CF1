<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 Crucigrama de sintomatología por COVID-19
    .row.mb-4.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center.p-lg-2
          figure.px-lg-5
            img.px-lg-2.py-lg-4(src="@/assets/curso/act-didactica.svg", alt="Elementos de la cultura organizacional que corresponden a la cultura organizacional?")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-12.mb-lg-5.mb-3 
          p Estimular en el aprendiz el conocimiento acerca de los síntomas por COVID-19, facilitando su aprendizaje y recordación.
        .tarjeta.color-acento-contenido.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0.text-white
              p.fw-bold.mb-0.px-lg-2 Crucigrama 
            .col-auto
              a.boton.boton--b.text-white(:href="obtenerLink('/actividades/actividad1/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


    .titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 Encuentra la palabra 
    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center.p-lg-2
          figure.px-lg-5
            img.px-lg-2.py-lg-4(src="@/assets/curso/act-didactica2.svg", alt="Elementos de la cultura organizacional que corresponden a la cultura organizacional?")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-12.mb-lg-5.mb-3 
          p Afianzar en el aprendiz el contenido del componente formativo: concepto y regulación.
        .tarjeta.color-acento-contenido.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0.text-white
              p.fw-bold.mb-0.px-lg-2 Banco de palabras 
            .col-auto
              a.boton.boton--b.text-white(:href="obtenerLink('/actividades/actividad2/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece              

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
