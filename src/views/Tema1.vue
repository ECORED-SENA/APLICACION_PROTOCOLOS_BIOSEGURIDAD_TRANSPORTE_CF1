<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Conceptualización sobre el COVID-19

    .row.mb-4
      .col-md-7.mb-4(data-aos="fade-right")
        p El 
          strong COVID-19, 
          | una enfermedad causada por el nuevo coronavirus, conocido como 
          strong SARS-CoV-2, 
          | se identificó en Wuhan (China) a finales del año 2019 en personas con neumonía severa y fue declarado pandemia por la Organización Mundial de la Salud (OMS) debido a su gravedad y velocidad de expansión alrededor del mundo, provocando una gran crisis económica, social y de salud. En Colombia fue confirmado el primer caso el 6 de marzo de 2020.
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-img.png', alt='Texto que describa la imagen') 

    .row.justify-content-center.tarjeta.fondo-elementos.py-5(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/y5atKVtpS7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Definición

    p.mb-4(data-aos="fade") La Organización Mundial de la Salud -OMS- define los coronavirus como 
      strong una extensa familia de virus que tienen la posibilidad de provocar patologías tanto en animales como en humanos, causando infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves. 
      | El coronavirus, recientemente descubierto, causa la enfermedad por coronavirus COVID-19; y se ha denominado así porque es el nombre abreviado “CO”, que corresponde a “corona”, y “VI” a “virus”, y “D” a “disease” (enfermedad), tal como puede observarse en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Figura 1.</b> Nombre de la enfermedad del coronavirus COVID-19

    .row.mb-5(data-aos="fade-down")
      figure
        img.mb-2(src='@/assets/curso/tema1-1-fig1.svg', alt='Nombre de la enfermedad del coronavirus COVID-19') 
      figcaption <b>Nota:</b> https://www.fundeu.es/wp-content/uploads/2020/02/Coronavirus-1-info-1-768x384.png
      
    .row
      .col-md-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-1-img.png', alt='Texto que describa la imagen') 
      .col-md-6.mb-4(data-aos="fade-left")
        p El virus es muy contagioso y se puede transmitir cuando una persona enferma tose o estornuda y expulsa partículas que entran en contacto con otras personas, lo que sugiere que el ambiente (aire y superficies) es un medio potencial de transmisión. 
        p Esta enfermedad 
          strong se caracteriza por un cuadro de infección respiratoria, 
          | sin embargo, puede generar gran variedad de manifestaciones clínicas según grupos de riesgo, llegando a ser una afección de gran complejidad, generalmente en personas de la tercera edad y con comorbilidades. 
        p Según estudios, el período de incubación puede ser de 1 hasta 14 días, desde la exposición hasta la aparición de síntomas. La OMS recomienda el aislamiento por 14 días más luego del alta hospitalaria debido a que últimos estudios han presentado datos que indican su transmisión (virus), después de esos primeros días de aislamiento.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-8.cajon-amarillo.p-4.px-md-5
        p.mb-0 El pilar más importante ante esta pandemia es <b>la prevención</b>, tomando las medidas correctas para detener la transmisión, realizando todas las acciones necesarias con el fin de detectar y neutralizar los focos de propagación.

    .row.justify-content-center.fondo-rectangulo.mb-5(data-aos="fade-down") 
      .col-md-8.p-md-0.p-4
        .row.align-items-end.py-2
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Es necesario, entonces, conocer un poco más sobre esta enfermedad, en relación con el contagio, así como las principales medidas de cuidado y atención requeridas para el manejo y sobre todo la recuperación, <b>le invitamos a ver el siguiente video</b>, en donde encontrará una mayor explicación al respecto.
          .col-md-5 
            img(src='@/assets/curso/tema1-1-img.svg', alt='Texto que describa la imagen') 

    .row.justify-content-center(data-aos="fade-up") 
      .col-md-10
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.px-md-4(src="@/assets/curso/tema1-1cta.svg")
            .col.text-white
              .row.justify-content-between.align-items-center
                .col.col-md-9.mb-3.mb-sm-0
                  h3.mb-1 Explicación de la enfermedad
                  p.mb-0.text-small Le invitamos a consultar el video explicativo sobre la enfermedad, contagio y atención del Ministerio de Salud y Protección Social en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=jFRFkncM0lk')" target="_blank")
                    span Enlace
                    i.fas.fa-link

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Sintomatología

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p El cuadro clínico del COVID-19 tiene amplias manifestaciones clínicas, causando afecciones que pueden ir de moderadas a severas y, en algunos casos, fatales;  
          strong varía desde pacientes asintomáticos hasta pacientes con insuficiencia respiratoria que requieren de ventilación mecánica. 
          | En la mayoría de los casos los síntomas son leves y consisten en fiebre, dolor de cabeza y tos seca. También se han reportado casos en todo el mundo cuya única manifestación es la pérdida del sentido del olfato, por lo tanto, se ha hecho un llamado a tener en cuenta este tipo de pacientes, debido a que son aquellos los que facilitan la rápida propagación del virus.
          .cajon-amarillo.p-4.px-md-5
            p.mb-0 A través de la <b>etapa sintomática</b> se genera la liberación máxima de virus por las vías respiratorias, sin embargo, también puede darse, en menor medida, en una fase asintomática o en el proceso de recuperación. Las personas con enfermedades preexistentes podrían desarrollar mayor dificultad para respirar.
      .col-md-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-2-img.png', alt='Texto que describa la imagen')   

    .row.justify-content-center.fondo-rectangulo2.mb-5(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Según el protocolo publicado por la OMS, 
              strong la forma de diagnosticar la presencia del virus es a través de la prueba diagnóstica RT-PCR y también ha sido de utilidad la prueba rápida de antígenos y de serología. 
              | Cada una de las pruebas tiene una cinética distinta y un rendimiento que difiere a partir del momento en que son realizadas. Actualmente se considera que la RT-PCR es la prueba diagnóstica con mejor rendimiento (sensibilidad 89 % y especificidad 99 %).
          .col-md-4 
            img.px-md-3(src='@/assets/curso/tema1-2-img2.svg', alt='Texto que describa la imagen') 
    
    p(data-aos="fade") Algunos síntomas del COVID-19 son similares a los del resfriado común o la gripe, por lo que en ocasiones se puede dificultar saber si realmente se tiene el virus. Es importante tener en cuenta que las personas pueden presentar solo alguno de los síntomas que se enuncian a continuación o una probable combinación de ellos, además, no en todas las personas se da con la misma intensidad. 

    p.mb-4(data-aos="fade") Los principales síntomas que se han identificado, los cuales constituyen indicio de sospecha del COVID-19 son los siguientes:


    TabsC.color-acento-contenido.mb-5(data-aos="fade-down") 
      .py-3.py-md-4(titulo="Fiebre (mayor a 37,5 °C)")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-2-tab1.png', alt='Fiebre (mayor a 37,5 °C)')
          .col-md-5
            h4 Fiebre (mayor a 37,5 °C)
            p Es el aumento temporal en la temperatura del cuerpo en respuesta al contagio por la enfermedad del COVID-19 y corresponde a uno de los principales síntomas de la presencia de esta enfermedad en el organismo. Según los Centros para el Control y Prevención de Enfermedades de los EE. UU., la fiebre debe persistir por más de 48 horas para que sea un síntoma claro de coronavirus.
      .py-3.py-md-4(titulo="Tos seca")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-2-tab2.png', alt='Tos seca')
          .col-md-5
            h4 Tos seca
            p La tos es persistente y puede llegar a impedir a una persona respirar con normalidad, se da porque el tejido pulmonar comienza a acumular fluidos, ocasionando una falta de aire y, en los casos más graves, se puede producir daño en los pulmones o romper sus tejidos debido a la fuerza al toser.          
      .py-3.py-md-4(titulo="Cansancio")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-2-tab3.png', alt='Cansancio')
          .col-md-5
            h4 Cansancio
            p Es una sensación general de agotamiento y se muestra como una respuesta contra la infección, puede verse alterado el sueño, sentir inestabilidad o afectar la capacidad de concentración. 

    p.mb-4(data-aos="fade") Sin embargo, también se pueden presentar otros síntomas que están asociados con la enfermedad, y que deben ser mantenidos bajo vigilancia, estos son:

    .titulo-sexto.color-acento-contenido.mb-4
      h4.mb-0 Otros síntomas asociados al COVID-19

    .row.otros-sintomas.mb-5
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico1.svg', alt='Diarrea')
            .col-md-8
              h5 Diarrea
              p.mb-0 Significa que la persona afectada por el virus puede tener deposiciones blandas y acuosas que ocurren con mucha frecuencia. Este es uno de los síntomas menos habituales por el coronavirus.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico2.svg', alt='Congestión nasal')
            .col-md-8
              h5 Congestión nasal
              p.mb-0 Es uno de los síntomas que con mayor frecuencia acompaña a las afecciones agudas del tracto respiratorio superior, haciendo difícil la respiración.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico3.svg', alt='Dolor de cabeza')
            .col-md-8
              h5 Dolor de cabeza
              p.mb-0 Ocurre por la acción del sistema inmunitario ante la infección por el COVID-19.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico4.svg', alt='Dolor de garganta')
            .col-md-8
              h5 Dolor de garganta
              p.mb-0 Puede darse debido a la infección por el Covid-19, provocando dificultad para comer o hablar y produce inflamación en las amígdalas.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico5.svg', alt='Pérdida del gusto y olfato')
            .col-md-8
              h5 Pérdida del gusto y olfato
              p.mb-0 El coronavirus se puede manifestar a nivel nasal debido a alteraciones del olfato y suele ir asociado a la pérdida del sabor.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico6.svg', alt='Conjuntivitis')
            .col-md-8
              h5 Conjuntivitis
              p.mb-0 Las investigaciones señalan que los problemas oculares más comunes relacionados con el COVID-19 son la sensibilidad a la luz y la irritación de los ojos.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top.borde-bottom
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico7.svg', alt='Escalofríos')
            .col-md-8
              h5 Escalofríos
              p.mb-0 Puede presentar una sensación de frío, junto con un episodio de temblores causados por la alteración rápida entre las contracciones de los músculos.
      .col-md-6.d-flex.align-items-stretch
        .col-md-12.borde-top.borde-bottom
          .row.justify-content-center.p-4
            .col-md-3.col-6.mb-md-0.mb-3
              img(src='@/assets/curso/tema1-2-ico8.svg', alt='Fatiga')
            .col-md-8
              h5 Fatiga
              p.mb-0 Es una sensación de agotamiento y falta general de energía. Una persona con fatiga podría sentirse agotada, débil o aletargada. 

    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")
        p Ahora, según la OMS la mayoría de las personas se recuperan de la enfermedad sin necesidad de tratamiento hospitalario; sin embargo, 
          strong cualquier persona puede enfermarse y presentar síntomas graves.
        p Los casos graves se caracterizan por producir:   
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Neumonía. 
          li 
            i.fas.fa-check
            | Dificultad respiratoria aguda.
          li 
            i.fas.fa-check
            | Choque séptico. 
        p Todo esto conduce a los afectados a la muerte, no obstante, los registros que se encuentran hasta el momento, informan de pocos casos de presentación en la población infantil.      
      .col-md-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-2-img3.png', alt='Texto que describa la imagen') 

    .row.justify-content-center.fondo-rectangulo3.mb-5(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Es importante tener en cuenta que la sintomatología, el tratamiento y el pronóstico dependen de la severidad de la infección en cada paciente. Si se ha tenido exposición al virus, 
              strong el primer síntoma se podrá manifestar hasta 2 o 14 días después, 
              | presentando síntomas relacionados con gripas o resfriados o síntomas más graves, los cuales aparecerían días antes de los problemas respiratorios. 
              strong El COVID-19 es una enfermedad respiratoria, 
              | es decir que la mayoría de las personas que la padecen solamente tendrán afección en las vías respiratorias, generando inflamación y dificultando la difusión de oxígeno en los pulmones, esta inflamación sería la responsable de la tos seca, por lo tanto, los síntomas gastrointestinales no siempre están presentes en los pacientes.
          .col-md-1
          .col-md-4 
            img(src='@/assets/curso/tema1-2-img4.svg', alt='Texto que describa la imagen') 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-8.cajon-amarillo.p-4.px-md-5
        p.mb-0 <b>Para recordar:</b> cuando los casos son leves, los síntomas suelen desaparecer rápido, pero cuando los casos pasan de moderados a críticos se ha evidenciado neumonía y aumenta la probabilidad de mortalidad.

    p(data-aos="fade") Para identificar y diferenciar la sintomatología presente en los estados gripales y de resfriado, y así evitar confusiones con el diagnóstico del COVID-19, se invita a ver el video explicativo sobre la diferenciación que hay entre gripa, resfriado y COVID-19, el cual encontrará en el material complementario.

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3   Prevención y cuidado

    p.mb-4(data-aos="fade")  Hasta el momento, 
      strong ningún medicamento ha demostrado curar o prevenir el COVID-19 y no es recomendable automedicarse. 
      | Para el control de esta enfermedad, en el mundo se han desarrollado vacunas que han significado un avance para las ciencias médicas y la humanidad y que, según la OMS, son una estrategia para la prevención, la cual consiste en la estimulación del sistema inmune para entrenar y preparar las defensas naturales del organismo para que desarrolle anticuerpos y evitar la infección o enfermedad por este agente infeccioso. 

    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")
        .cajon-amarillo.p-4.px-md-5
            p.mb-0 Se encuentran al menos siete vacunas que los países han empezado a administrar a su población entre finales del año 2020 y comienzos de año 2021 y más de 200 vacunas en estado experimental (OMS). 
              strong En Colombia se adoptó el Plan Nacional de Vacunación contra el COVID-19 para disminuir la incidencia de casos graves y la protección de la población que tiene alta exposición al virus y reducir el contagio.         
      .col-md-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-3-img.png', alt='Texto que describa la imagen') 

    .row.justify-content-center.fondo-rectangulo2.mb-5(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-7.mb-4.mb-md-0
            p.mb-0 En términos generales, se logra mitigar la transmisión a través de medidas farmacológicas como 
              strong la vacunación
              |, y no farmacológicas como 
              strong las medidas de bioseguridad, 
              | las que deben asumirse como prácticas de 
              strong autocuidado.
          .col-md-1
          .col-md-4 
            img(src='@/assets/curso/tema1-3-img2.svg', alt='Texto que describa la imagen') 

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1-3-img3.png', alt='Texto que describa la imagen') 
      .col-md-6.mb-4(data-aos="fade-left")
        p Ante esta situación mundial, la principal labor es 
          strong la prevención. 
          | Cada país ha adoptado medidas con el fin de reducir la velocidad de transmisión del virus y controlar la pandemia, el pilar fundamental de las medidas de prevención de infecciones es:
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | La higiene de manos.
          li 
            i.fas.fa-check
            | El uso de Elementos de Protección Personal (EPP), que corresponde a la ropa o equipo especializado para la protección contra materiales infecciosos, utilizados de acuerdo con el escenario de exposición.

    p.mb-4(data-aos="fade") Junto con estas medidas, el Ministerio de Salud y Protección Social recomienda otras acciones de prevención para ayudar a prevenir la propagación de enfermedades respiratorias:

    .row.justify-content-center.fondo-elementos.py-5.mb-4(data-aos="fade-down") 
      .col-md-10
        SlyderE(indicadores="derecha")
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Uso de elementos de protección personal
              p Son implementos para ser utilizados de forma individual, proyectados y fabricados para preservar el cuerpo humano de enfermedades como el COVID-19. Principalmente el uso de mascarillas que deben usarse como estrategia para suprimir la transmisión, es un complemento a las medidas de higiene y distanciamiento físico recomendadas. Debe cubrir nariz, boca y barbilla y puede ser reutilizable o de un solo uso. Se recomienda no usarlo por más de 4 horas.          
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide1.png', alt='Uso de elementos de protección personal')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Distanciamiento físico o social
              p Es la manera importante de ayudar a prevenir y reducir la propagación del virus. Significa dejar espacio entre una y otra persona de, al menos, un metro. Al interior de un vehículo se recomienda el siguiente esquema de distanciamiento: 
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide2.png', alt='Distanciamiento físico o social')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Desinfección de superficies y del ambiente
              p Es una medida preventiva para la mitigación y contención de la infección respiratoria aguda por el COVID-19, es importante limpiar todas las superficies que hayan podido estar en contacto con el virus y, además, limpiar con frecuencia, garantizando que se realice de manera segura, con los elementos adecuados.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide3.png', alt='Desinfección de superficies y del ambiente')      
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Lavado de manos
              p En el contexto del COVID-19, el lavado de manos debe ser frecuente, pues es una de las mejores formas de protegerse y proteger, ya que reduce hasta en 50 % el riesgo de contraer el coronavirus. Debe realizarse con agua y jabón. En el ambiente laboral se deben tener recordatorios para lavado de manos en la zona donde se realiza esta actividad.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide4.png', alt='Lavado de manos')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Ventilación
              p Siempre que sea posible deben mantener puertas y ventanas abiertas o realizar las adaptaciones para garantizar adecuada ventilación y correcta circulación del aire.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide5.png', alt='Ventilación')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Manejo de residuos
              p Todos debemos ser conscientes de la correcta disposición de elementos para el manejo del COVID-19, el Ministerio de Salud ha establecido orientaciones para gestionar los residuos en las actividades económicas, por ejemplo: ubicar contenedores y bolsas suficientes, y depositar tapabocas en bolsas negras separados de recursos aprovechables.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-3-slide6.png', alt='Manejo de residuos')            

    p.mb-4(data-aos="fade") Adicionalmente, el conocimiento temprano de personas infectadas ha permitido el inicio oportuno de las medidas apropiadas de prevención y control de infecciones. El Ministerio de Salud y Protección Social recomienda, además, acciones que se desarrollan en el día a día como:

    .row.mb-4
      .col-md-4.text-center.mb-3
        img(src='@/assets/curso/tema1-3-tarj1.png', alt='Evitar el contacto con personas enfermas.') 
        .fondo-tarjeta.py-4.px-5
          .numero.h2.mb-3 1
          h5 Evitar el contacto con personas enfermas.  
      .col-md-4.text-center.mb-3
        img(src='@/assets/curso/tema1-3-tarj2.png', alt='Cubrirse con la parte interna del codo al estornudar.') 
        .fondo-tarjeta.py-4.px-5
          .numero.h2.mb-3 2
          h5 Cubrirse con la parte interna del codo al estornudar.
      .col-md-4.text-center.mb-3
        img(src='@/assets/curso/tema1-3-tarj3.png', alt='Quedarse en casa si presenta síntomas de resfriado.') 
        .fondo-tarjeta.py-4.px-5
          .numero.h2.mb-3 3
          h5 Quedarse en casa si presenta síntomas de resfriado.     

    p.mb-4(data-aos="fade") Existen numerosos desinfectantes en el mercado con los que se puede inactivar de forma efectiva el virus, sin embargo, la selección de cualquier producto debe ser cuidadosa, asegurándose de que este sea el correcto para su aplicación eficiente y el fin previsto, debido a que se ha evidenciado que la exposición a diferentes agentes químicos puede generar riesgos en la salud de las personas o animales, se debe, entonces, hacer un uso racional del mismo y aplicar medidas de mitigación ante cualquier efecto.

    .row.justify-content-center.fondo-rectangulo3(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-7.mb-4.mb-md-0
            p.mb-0 En el marco de esta pandemia resulta importante que las empresas definan un protocolo de actuación para lograr un retorno seguro al trabajo, el cual hace parte integral del Sistema de Gestión de Salud y Seguridad en el Trabajo (SGSST), garantizando medidas de contención, mitigación y prevención del riesgo por contagio del COVID-19. Es decir, que 
              strong los empleadores deben proporcionar un ambiente de trabajo en condiciones adecuadas de higiene y seguridad, con el fin de garantizar el mínimo riesgo en las actividades laborales.
          .col-md-1
          .col-md-4 
            img(src='@/assets/curso/tema1-3-img4.svg', alt='Texto que describa la imagen') 

    Separador


    // 1.4
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4  Impacto 

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        p.mb-3 Con lo visto hasta el momento, y de acuerdo con lo promulgado por diversidad de autores e instituciones, la pandemia causada por el COVID-19, 
          strong ha afectado negativamente la economía global, y el sector transporte no ha sido la excepción, 
          | la pandemia ha traído consecuencias sin precedentes para este sector de la economía. Algunas empresas se han declarado en quiebra, otras optaron por el recorte de personal.
        .cajon-amarillo.p-4.px-md-5
          p.mb-0 Las medidas que se han establecido alrededor del mundo tuvieron mayor impacto en el transporte por vía aérea, según el DANE, para este sector la afectación en el PIB se registró en las actividades de transporte aéreo, con una caída aproximada del 75 %, por otro lado, en el transporte terrestre fue del 28 % y para el caso del transporte marítimo del 24 %.
      .col-lg-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-4-img.png', alt='Texto que describa la imagen')

    .row.justify-content-center.fondo-rectangulo4.mb-5(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/tema1-4-img2.png', alt='Texto que describa la imagen')
          .col-md-1
          .col-md-6
            p.mb-0 Sin embargo, es de gran importancia resaltar que el sector del transporte ha contribuido en la mitigación del COVID-19 al trasladar material sanitario y mantener el suministro de productos en las diferentes regiones del país.
        
    p.mb-4(data-aos="fade") A continuación, se abordará el impacto que ha tenido el COVID-19 en los diferentes modos de transporte más comunes en el territorio colombiano, a nivel terrestre, aéreo y marítimo.

    .row.justify-content-center.fondo-elementos.py-5.mb-4(data-aos="fade-down") 
      .col-md-10
        SlyderE(indicadores="derecha")
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Impacto del COVID-19 en el transporte
              p El servicio público de transporte terrestre automotor de pasajeros por carretera (transporte intermunicipal) y las empresas administradoras y operadoras de terminales de transporte terrestre automotor (terminales de transporte), se encuentran en un escenario de disminución de la demanda de servicios como consecuencia de la pandemia por el COVID-19. Los pasajeros han dejado de utilizar los servicios de las empresas de transporte por las medidas de restricción a la movilidad que ha ordenado el Gobierno nacional, la falta de confianza y la crisis económica; por esta misma razón las terminales de transporte despachan menos vehículos. Todo lo anterior afecta los ingresos y amenaza la sostenibilidad de las compañías.
              p Se presenta la afectación en cada una de las líneas de transporte (terrestre, aéreo y marítimo) que permite dimensionar el grado de afección en el país.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide1.png', alt='Impacto del COVID-19 en el transporte')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h3 Transporte terrestre
              h4 Transporte de carga
              p Esta pandemia ha afectado el proceso de distribución de mercancías y paralelamente el flujo de camiones sobre la carretera, alcanzando efectos nunca vistos en el tránsito de camiones de carga.
              p La importancia de este modo radica en el alto nivel de accesibilidad a todas las regiones y la flexibilidad del servicio puerta a puerta en tiempos de pandemia, además que el modo terrestre es el que mueve gran parte de la mercancía del país.
              p Muchas empresas de transporte de carga tuvieron que parar totalmente sus actividades, especialmente las mipymes.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide2.png', alt='Impacto')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Transporte de pasajeros
              p Este es vital para proporcionar movilidad, es una columna vertebral de la economía local y nacional y un servicio esencial, por eso resulta indispensable garantizar su prestación.
              p Este sector se vio gravemente afectado debido a que las medidas tomadas para reducir la propagación estuvieron direccionadas a limitar la movilidad de los ciudadanos, ocasionando una gran disminución en el transporte de viajeros; otros efectos se presentaron como: el no uso de flotas de transporte, desempleo y aumento de costos operativos. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide3.png', alt='Impacto')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              p Debido a las limitaciones en la movilidad ocasionadas por la pandemia, a partir del mes de marzo de 2020 se evidenció un significativo decrecimiento de los despachos de pasajeros, en razón a la restricción de la operación en las terminales de transporte, alcanzando de esta forma en el mes de abril, cifras mínimas históricas en despachos: “En el año 2019 se despacharon 14.865.856 vehículos de transporte intermunicipal desde las terminales de transporte a nivel nacional, presentando una disminución del 52,9 % para el año 2020 respecto al año anterior, con un total de 6.918.113 de despachos, así mismo, el número de pasajeros, despachados desde terminales de transporte en el año 2019 fue de 136.219.925, mientras que para el año 2020 el reporte fue de 45.621.008, lo que representó una disminución total del 66,50 %”.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide4.png', alt='Impacto')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Transporte aéreo
              p Se ha evidenciado una disminución sin precedentes en el tráfico aéreo mundial, provocando una reducción del 41 % para el año 2020 en el tráfico aéreo comercial respecto al año 2019 en el mes de marzo. La pérdida de ingresos ha impactado de manera generalizada a todas las aerolíneas del mundo.
              p Según datos de la Asociación Internacional de Transporte Aéreo (IATA) el transporte de mercancías para abril del año 2020 cayó 27,2 % respecto al año anterior, provocando la mayor caída jamás registrada, el transporte de carga aérea se redujo de manera muy rápida, obligando a desacelerar las actividades económicas. Las fuertes restricciones a los viajes hicieron que al inicio de la pandemia salieran de circulación los vuelos de pasajeros, inactivándolos y quedando únicamente la opción de carga.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide5.png', alt='Impacto')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              p El transporte de carga aérea no se desplomó por completo en Colombia debido a que los alimentos, dispositivos médicos y otros productos de primera necesidad se siguieron suministrando, haciendo uso de este tipo de medio para llegar a todos los rincones de la geografía nacional.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide6.png', alt='Impacto')
          .row.mb-3
            .col-md-6.mb-4.mb-md-0
              h4 Transporte marítimo
              p Corresponde al transporte de carga de mayor uso en el mundo, pues más del 80 % de productos circulan a través de buques para el intercambio comercial de mercancía, haciendo de este medio de transporte una actividad vital para la provisión de todo tipo de productos.
              p A nivel mundial, el transporte de carga marítima entre enero y julio de 2020 disminuyó en 5,54 %, respecto al mismo periodo del año anterior.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1-4-slide7.png', alt='Impacto')                              

    .row.justify-content-center.fondo-rectangulo3(data-aos="fade-down") 
      .col-md-10.p-md-0.p-4
        .row.align-items-center.py-2
          .col-md-7.mb-4.mb-md-0
            p.mb-0 Teniendo en cuenta los aspectos revisados anteriormente debido al impacto de la pandemia en el sector transporte, desde el Gobierno nacional se han adoptado medidas para generar alivios al sector y garantizar la prestación del servicio, creando por ejemplo una 
              strong línea de crédito para beneficiar a las empresas de transporte, propietarios, conductores y terminales de transporte, 
              | permitiendo así que aquellos agentes del sector que han presentado un gran impacto económico debido al COVID-19 puedan solventar el pago de nómina, gastos operativos, entre otros.
          .col-md-5
            img(src='@/assets/curso/tema1-3-img3.svg', alt='Texto que describa la imagen') 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
