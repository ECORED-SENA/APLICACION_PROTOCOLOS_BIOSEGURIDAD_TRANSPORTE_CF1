export default {
  global: {
    componenteFormativo: 'Concepto y regulación',
    descripcionCurso:
      'En el marco de la pandemia del coronavirus COVID-19, se han establecido condiciones para hacer frente a esta crisis sanitaria e impedir la extensión de sus efectos, por lo tanto, se hace indispensable conocer los aspectos fundamentales de esta enfermedad y las disposiciones establecidas en materia de regulación, a nivel general y en el sector transporte.',
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal2.png'),
    fondoContenido: require('@/assets/curso/banner-contenido.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización sobre el COVID-19',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sintomatología',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Prevención y cuidado',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Impacto',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'En el sector del transporte',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fedesarrollo. (2020). Choque dual y posibles efectos sobre la economía colombiana.',
      link:
        'https://www.fedesarrollo.org.co/sites/default/files/DocumentosTrabajo/2020-03-26_choque_dual_y_posibles_efectos_sobre_la_economia_colombiana.pdf',
    },
    {
      referencia:
        'García, M., F. (2021). Impacto de la pandemia por covid-19 en el transporte intermunicipal en Colombia.',
      link:
        'http://consejosuperiordeltransporte.org/wp-content/uploads/2021/04/IMPACTO-DE-LA-PANDEMIA-POR-COVID-19-EN-EL-TRANSPORTE-INTERMUNICIPAL-EN-COLOMBIA-SR.pdf',
    },
    {
      referencia:
        'García, O., G. (2021). Efectos del Covid-19 en el transporte terrestre de carga en 2020.',
      link:
        'https://www.imt.mx/archivos/Publicaciones/PublicacionTecnica/pt628.pdf',
    },
    {
      referencia:
        'Infectología, A. C. (2020). Diagnóstico y manejo de la Infección por SARS-Cov-2/COVID-19.',
      link: 'https://www.acin.org/images/guias/coronavirus/consenso_pdf.pdf ',
    },
    {
      referencia:
        'Londoño, M., J. (2021). Consenso Colombiano de Atención, Diagnóstico y Manejo de la Infección por SARS-COV-2/COVID-19 en establecimientos de atención de la salud.',
      link:
        'https://www.acin.org/images/guias/coronavirus/GUIA_COVID_ED3_copia.pdf ',
    },
    {
      referencia:
        'Maguiña, V., C., Gastelo, A., R., y Tequen, B., A. (2020). El nuevo coronavirus y la pandemia del Covid-19.',
      link:
        'http://www.scielo.org.pe/scielo.php?pid=S1018-130X2020000200125&script=sci_arttext',
    },
    {
      referencia:
        'Ministerio de Salud. (s.f.). Coronavirus (Covid-19). Ministerio de Salud.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2020). La Covid-19 y los servicios de transporte urbano de pasajeros.',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---ed_dialogue/---sector/documents/briefingnote/wcms_760415.pdf',
    },
    {
      referencia:
        'Otoya, T., A., García, M., Jaramillo, C., y Wills, C. (2020). Covid-19: generalidades, comportamiento epidemiológico y medidas adoptadas en medio de la pandemia en Colombia.',
      link:
        'https://docs.bvsalud.org/biblioref/2020/05/1096161/1-covid-19-generalidades-comportamiento-epidemiologico.pdf',
    },
    {
      referencia:
        'Pérez, A., M., Gómez, T., J., y Dieguez, G., R. (2020). Características clínico-epidemiológicas de la Covid-19. Revista Habanera de Ciencias Médicas, 19(2)e_3254.',
      link:
        'https://www.medigraphic.com/pdfs/revhabciemed/hcm-2020/hcm202e.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autocuidado',
      significado:
        'comprende todo lo que hacemos por nosotros mismos para establecer y mantener la salud, prevenir y manejar la enfermedad.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas que tienen como fin eliminar o minimizar el factor de riesgo biológico que pueda llegar a afectar la salud, el medio ambiente o la vida de las personas.',
    },
    {
      termino: 'Comorbilidad',
      significado:
        'significa que se cuenta con más de una enfermedad o condición de salud y estas pueden o no estar relacionadas entre sí.',
    },
    {
      termino: 'Contagio',
      significado:
        'transmisión de una enfermedad por contacto con el agente patógeno.',
    },
    {
      termino: 'Coronavirus',
      significado:
        'familia de virus que pueden provocar enfermedades en humanos y en animales, en los humanos todos los virus asociados a esta familia pueden causar infecciones respiratorias de leves a graves.',
    },
    {
      termino: 'Logística',
      significado:
        'proceso de planeación, implementación y control de los procedimientos para la eficiencia y efectividad del transporte y almacenaje de mercaderías.',
    },
    {
      termino: 'Pandemia',
      significado:
        'propagación a escala mundial y a gran velocidad de una enfermedad que afecta simultáneamente a un gran número de personas.',
    },
    {
      termino: 'Transmisión',
      significado:
        'mecanismo por el cual un agente infeccioso se propaga a un organismo susceptible; en el caso de la enfermedad causada por el COVID-19 la transmisión se da por contacto con mucosas y por vía aérea mediante gotas.',
    },
    {
      termino: 'Virus',
      significado:
        'agente infeccioso que solo puede reproducirse en organismos vivos.',
    },
  ],
  complementario: [
    {
      texto: 'MinSaludCol. (2020). ¿Qué es la Covid-19? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jFRFkncM0lk',
    },
    {
      texto: 'MinSalud. (2020). Abecé coronavirus. ',
      tipo: 'Artículo',
      descarga: '/downloads/abece-coronavirus.pdf',
    },
    {
      texto:
        'Eldiarioes. (2020). Cómo diferenciar el coronavirus de la gripe y del resfriado. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mPmzCBSHkOw',
    },
    {
      texto: 'MinSalud. (2021). ABECÉ de la vacunación contra la COVID-19. ',
      tipo: 'Artículo',
      descarga: '/downloads/abece-vacunacion-contra-covid19.pdf',
    },
    {
      texto:
        'Asociación Colombiana de Infectología. (2020). Diagnóstico y manejo de la infección por SARS-CoV-2/COVID-19 en establecimientos de atención de la salud. ',
      tipo: 'Artículo',
      descarga: '/downloads/consenso_pdf.pdf',
    },
    {
      texto:
        'Revista MSP. (2020). Así ataca el coronavirus al cuerpo humano. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tCPq2IVM5Mg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Paula Daniela Díaz León',
        cargo: 'Experta temática',
        centro: 'CENIGRAF <br>Regional Distrito Capital',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
