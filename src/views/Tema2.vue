<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Normatividad

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Debido a la gravedad del coronavirus, todos los países han tomado acciones urgentes, trabajando en las medidas preventivas con el fin de mitigar el contagio. En nuestro contexto, el Ministerio de Salud y Protección Social, ha definido y publicado directrices sobre el COVID-19 que sirven de orientación para la aplicación de medidas de control y prevención.
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-img.png', alt='Texto que describa la imagen') 

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Generales 

    p.mb-4(data-aos="fade") A nivel nacional, desde el Ministerio de Salud y Protección Social, se han expedido las siguientes resoluciones:

    .row.justify-content-center.fondo-linea.mb-4.py-5(data-aos="fade-down") 
      .col-md-10
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")

    p.mb-4(data-aos="fade") Ahora, se ampliará la información sobre cada una de ellas.

    AcordeonB.mb-4(tipo="a" clase-tarjeta="tarjeta bg-primario" data-aos="fade-down")
      .row.justify-content-center(titulo="Resolución 385 del 12 de marzo de 2020")
        p.mb-4 El 12 de marzo de 2020 se declaró la emergencia sanitaria en el territorio nacional por parte del Ministerio de Salud y Protección Social, y se definieron diferentes decisiones enfocadas a limitar el ingreso de personas al país, con el propósito de proteger la salud de todos los habitantes, adicionalmente se adoptaron diferentes medidas sanitarias, entre las que se encontraron:
        .col-md-8.mb-4
          figure
            img(src='@/assets/curso/tema2-1-acord1.svg', alt='Texto que describa la imagen') 
        .col-md-7
          a.anexo.mb-4(:href="obtenerLink('/downloads/resolucion_385_de_2020.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Para ampliar la información, consulta la Resolución 385 de 2020, emanada por el Ministerio de Salud y Protección Social. 
      .row.justify-content-center(titulo="Resolución 666 del 24 de abril de 2020")
        p.mb-4 El Ministerio de Salud y Protección Social adoptó el protocolo general de bioseguridad para mitigar, controlar y efectuar el adecuado manejo de la pandemia del coronavirus del COVID-19, entre otros, para los diferentes sectores de la administración pública, actividades económicas y sociales, conforme con las especificidades propias de cada sector; esto con el fin de disminuir el riesgo de transmisión del virus de humano a humano durante el desarrollo de todas sus actividades.
        .col-md-8.mb-4
          figure
            img(src='@/assets/curso/tema2-1-acord2.svg', alt='Texto que describa la imagen') 
        .col-md-7
          a.anexo.mb-4(:href="obtenerLink('/downloads/Resolucion_No_666_de_2020.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Para ampliar la información, consulta la Resolución 666 de 2020, emanada por el Ministerio de Salud y Protección Social.
      .row.justify-content-center(titulo="Resolución 747 del 13 de mayo de 2020")
        p.mb-4 El Ministerio de Salud y Protección Social adoptó la estrategia de respuesta sanitaria para enfrentar el coronavirus, con el fin de reducir el impacto de la mortalidad por el COVID-19, a través de la intervención activa sobre la población y los grupos de riesgo que se han identificado, como lo son, adultos mayores de 70 años y personas con comorbilidades, así como modular los impactos sociales y de salud que han surgido como consecuencia de las medidas para contener el virus.
        .col-md-8.mb-4
          figure
            img(src='@/assets/curso/tema2-1-acord3.svg', alt='Texto que describa la imagen') 
        .col-md-7
          a.anexo.mb-4(:href="obtenerLink('/downloads/resolucion-747-de-2020.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Para ampliar la información, consulta la Resolución 747 de 2020, emanada por el Ministerio de Salud y Protección Social. 
      .row.justify-content-center(titulo="Resolución 223 del 25 de febrero de 2021")
        p.mb-4 Debido a que se evidenció que la propagación del virus continuó, se hizo necesario complementar las medidas de bioseguridad que se establecieron en la Resolución 666 de 2020, incluyendo como una de las medidas de bioseguridad que han demostrado mayor evidencia para la contención de la transmisión del virus: la adecuada ventilación.
        .col-md-8.mb-4
          figure
            img(src='@/assets/curso/tema2-1-acord4.svg', alt='Texto que describa la imagen') 
        .col-md-7
          a.anexo.mb-4(:href="obtenerLink('/downloads/Resolucion_No_223_de_2021.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b> Para ampliar la información, consulta la Resolución 223 de 2021, emanada por el Ministerio de Salud y Protección Social. 
      .row.justify-content-center(titulo="Resolución 777 del 02 de junio de 2021")
        p.mb-4 Con el fin de reactivar las actividades de todos los sectores, se hizo necesario establecer las normas de autocuidado y actualizar el protocolo general de bioseguridad que debe ser implementado y adoptado por personas, actividades económicas, sociales y culturales. 
        .col-md-10.mb-4
          figure
            img(src='@/assets/curso/tema2-1-acord5.svg', alt='Texto que describa la imagen') 
        .col-md-7
          a.anexo.mb-4(:href="obtenerLink('/downloads/Resolucion_No_777_de_2021.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo.</b>  Para ampliar la información, consulta la Resolución 777 de 2021, emanada por el Ministerio de Salud y Protección Social. 

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  En el sector transporte

    p.mb-4(data-aos="fade") En Colombia, el sector transporte debe garantizar el desarrollo de sus actividades bajo el cumplimiento de la normatividad vigente, a través de los requisitos establecidos. Es importante promover la adopción de medidas específicas en todos los ámbitos para evitar la propagación. El Gobierno nacional se vio enfrentado a establecer y adoptar medidas para hacer frente a los efectos de la pandemia en el sector transporte, aunado a la normativa general anteriormente vista, se puede agregar para el sector transporte específicamente la siguiente normativa:

    AcordeonB.tipo-b.mb-4(tipo="b" clase-tarjeta="tarjeta border-bottom" data-aos="fade-down")
      .row.justify-content-center(titulo="Resolución 408 del 15 de marzo de 2020")
        p.mb-4 Resolución emitida en conjunto entre el Ministerio de Salud y Protección Social y el Ministerio de Transporte, a través del cual se adoptaron medidas estrictas y urgentes relacionadas con la contención del virus, suspendiendo así el ingreso al país por vía aérea de pasajeros provenientes del extranjero excepto para los colombianos y residentes. Estableciendo la responsabilidad de las aerolíneas, los pasajeros, las autoridades nacionales, entre otras. 
      
      .row.justify-content-center(titulo="Resolución 677 del 24 de abril de 2020")
        p.mb-4 A través de esta resolución se adopta el protocolo de bioseguridad para el manejo de riesgo del coronavirus COVID-19 en el sector transporte, por parte de los operadores y conductores de transporte de carga terrestre y fluvial, empresas y conductores de servicio público de transporte terrestre de pasajeros, terminales de transporte y transporte férreo.

      .row.justify-content-center(titulo="Resolución 904 del 11 de junio de 2020")
        p.mb-4 Es a través de la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo del coronavirus en el sector portuario exclusivamente para el transporte de carga: sociedades portuarias marítimas, sociedades portuarias fluviales, operadores portuarios, empresas de transporte marítimo y fluvial, agencias de aduana, agentes de carga internacional y agencias marítimas

      .row.justify-content-center(titulo="Resolución 1054 del 27 de junio de 2020")
        p.mb-4 Se establece el protocolo de bioseguridad para el manejo y control de riesgo del coronavirus COVID-19 en los sectores aeroportuario y aeronáutico del territorio nacional, exclusivamente para el transporte doméstico de personas por vía aérea: operadores de aeropuertos, control de pasajeros, aerolíneas y explotadores de aeronaves.

      .row.justify-content-center(titulo="Resolución 411 del 29 de marzo de 2020")
        p.mb-4 El objeto de esta resolución es unificar los protocolos de bioseguridad para el manejo y control de riesgo del coronavirus para el transporte nacional e internacional de personas por vía aérea, teniendo en cuenta las disposiciones generales, el plan de contingencia y emergencia, el control de pasajeros, la interacción con terceros, las medidas de protección para las personas que laboran en instalaciones aeroportuarias, limpieza y desinfección, manipulación de residuos, entre otros.      


</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema2',
  components: {
    AcordeonB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosLineaTiempoB: [
      {
        titulo: 'Resolución 385 de marzo de 2020',
        texto:
          'Se declara emergencia sanitaria en el territorio nacional. Se adoptan medidas sanitarias para hacer frente al virus.',
        icono: require('@/assets/curso/tema2-1-ico-linea.svg'),
      },
      {
        titulo: 'Resolución 666 de abril de 2020',
        texto:
          'Se adopta protocolo general de bioseguridad con el fin de disminuir el riesgo de transmisión.',
        icono: require('@/assets/curso/tema2-1-ico-linea.svg'),
      },
      {
        titulo: 'Resolución 747 de mayo de 2020',
        texto:
          'Se adopta la estrategia de respuesta sanitaria para enfrentar el COVID-19 en Colombia.',
        icono: require('@/assets/curso/tema2-1-ico-linea.svg'),
      },
      {
        titulo: 'Resolución 223 de febrero de 2021',
        texto:
          'Se modifica la Resolución 666 de 2020, sustituyendo el anexo técnico. ',
        icono: require('@/assets/curso/tema2-1-ico-linea.svg'),
      },
      {
        titulo: 'Resolución 777 de junio de 2021',
        texto:
          'Se definen los criterios y condiciones para el desarrollo de las actividades económicas. <br> Se adopta el protocolo de bioseguridad para la ejecución. ',
        icono: require('@/assets/curso/tema2-1-ico-linea.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
