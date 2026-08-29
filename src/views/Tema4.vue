<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 4
        h1 Comunicación, gestión del conocimiento y fortalecimiento comunitario
      
      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t4/1.png' data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La gobernanza ambiental del territorio requiere procesos permanentes de comunicación, intercambio de conocimientos y fortalecimiento de las capacidades comunitarias. La participación efectiva de los diferentes actores territoriales depende en gran medida de la existencia de canales de comunicación que faciliten el diálogo, la construcción de acuerdos y la solución conjunta de problemáticas ambientales, sociales y económicas. En este sentido, la comunicación asertiva se convierte en una herramienta fundamental para promover relaciones basadas en el respeto, la confianza y la cooperación entre las comunidades, las instituciones y demás organizaciones presentes en el territorio.
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Asimismo, el fortalecimiento del bienestar común, la autorregulación comunitaria y la creación de redes de conocimiento favorecen la apropiación social del territorio y la construcción colectiva de soluciones sostenibles. Los espacios de intercambio de conocimientos permiten integrar los saberes tradicionales con los conocimientos técnicos y científicos, generando procesos de aprendizaje colaborativo que fortalecen la gobernanza ambiental, impulsan la innovación social y promueven un desarrollo territorial más participativo, incluyente y sostenible.
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Comunicación asertiva para la gestión territorial
      p.mb-5(data-aos='fade-right') La comunicación asertiva es una forma de interacción que permite expresar ideas, opiniones, necesidades y sentimientos de manera clara, respetuosa y oportuna, sin vulnerar los derechos de otras personas. En los procesos de gestión territorial constituye una competencia esencial, ya que facilita el diálogo entre los diferentes actores, fortalece la confianza y contribuye a la construcción de acuerdos orientados al bienestar colectivo y la conservación del territorio.
      
      .bg-full-width.bg-fondo-1.mb-0(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-6
              img(src='@/assets/curso/temas/t4/3.svg')
      
      p.mb-5(data-aos='fade-right') La comunicación asertiva favorece ambientes de respeto y cooperación, disminuye los conflictos derivados de la desinformación y promueve una participación más activa de la comunidad en los procesos de planificación, gestión ambiental y toma de decisiones.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png')
        .col-sm-12.col-lg-4
            p.mb-3 Algunos elementos que favorecen una comunicación asertiva son:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Respeto por las diferencias. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Escucha activa. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Claridad en el mensaje. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Empatía. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Honestidad. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Comunicación oportuna. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Responsabilidad en el manejo de la información. 
      p.mb-5(data-aos='fade-right') La comunicación asertiva fortalece la convivencia, facilita la participación ciudadana y mejora la articulación entre las comunidades, las instituciones y los diferentes actores territoriales.
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card" data-aos='fade-right')
        .row.justify-content-center.align-items-center.mb-0(titulo="Tipos de comunicación")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6
                p.mb-0 La comunicación puede clasificarse de acuerdo con la forma en que se transmite la información y los medios utilizados durante la interacción entre las personas. En los procesos comunitarios es importante reconocer estos tipos de comunicación para seleccionar las estrategias más adecuadas según el contexto y los objetivos de cada actividad.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/5.png')
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 #[b Tabla 16.] Tipos de comunicación
            .tabla-a.color-acento-contenido.mb-5.bg-white(data-aos='fade-right')
              table
                thead
                  tr
                    th Tipo de comunicación
                    th Descripción
                    th Ejemplo en la gestión territorial
                tbody
                  tr
                    td Participación comunitaria
                    td Se realiza mediante el lenguaje oral o escrito.
                    td Reuniones comunitarias, talleres participativos, informes técnicos.
                  tr
                    td Comunicación no verbal
                    td Se expresa mediante gestos, posturas, expresiones faciales y lenguaje corporal.
                    td Actitudes de respeto durante una asamblea comunitaria.
                  tr
                    td Comunicación visual
                    td Utiliza imágenes, mapas, gráficos, símbolos y recursos audiovisuales.
                    td Cartografía social, infografías ambientales y señalización ecológica.
                  tr
                    td Comunicación digital
                    td Se desarrolla mediante plataformas tecnológicas y medios virtuales.
                    td Redes sociales, videoconferencias, aplicaciones de mensajería y plataformas colaborativas.
            p.mb-0 La combinación adecuada de estos tipos de comunicación mejora la comprensión de la información, facilita la participación ciudadana y fortalece los procesos de educación y gestión ambiental.

        .row.justify-content-center.align-items-center.mb-0(titulo="Escucha activa y comunicación efectiva")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6
                p.mb-0 La escucha activa consiste en prestar atención consciente al mensaje que transmite otra persona, procurando comprender su significado antes de responder. Implica observar tanto el contenido verbal como el lenguaje no verbal, formular preguntas cuando sea necesario y demostrar interés por las opiniones de los demás. La comunicación efectiva complementa este proceso al garantizar que el mensaje sea comprendido correctamente por los diferentes actores.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/6.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/7.png')
              .col-sm-12.col-lg-6
                p.mb-4 Elementos de la escucha activa:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Atención plena.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Respeto por quien habla.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Empatía.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Retroalimentación.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Preguntas de aclaración.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Síntesis de la información.
            p.mb-0 La escucha activa fortalece la confianza, mejora las relaciones comunitarias y facilita la construcción de consensos en los procesos de gobernanza territorial.

        .row.justify-content-center.align-items-center.mb-0(titulo="Comunicación para la participación comunitaria")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6
                p.mb-0 La comunicación constituye una herramienta estratégica para promover la participación de las comunidades en la planificación, ejecución y seguimiento de iniciativas orientadas al desarrollo sostenible del territorio. Una comunicación clara, incluyente y accesible facilita la circulación de información, fortalece la organización comunitaria y promueve la corresponsabilidad en la gestión ambiental.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/8.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/9.png')
              .col-sm-12.col-lg-6
                p.mb-4 Estas son algunas de las estrategias de comunicación comunitaria:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Reuniones comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Talleres participativos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Carteleras informativas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Emisoras comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Redes sociales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Boletines informativos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Material educativo.
            p.mb-0 Estas estrategias favorecen la apropiación del territorio y fortalecen la participación ciudadana en la toma de decisiones.




      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Bienestar común y autorregulación territorial
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/10.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El bienestar común y la autorregulación territorial son elementos fundamentales para fortalecer la convivencia, la participación ciudadana y la gestión sostenible del territorio. Estos procesos promueven la construcción de acuerdos colectivos, el ejercicio de la corresponsabilidad y el compromiso de las comunidades con el cuidado de los recursos naturales y el desarrollo local. A través de la organización comunitaria, el diálogo y el establecimiento de normas compartidas, es posible generar relaciones de cooperación que favorezcan la gobernanza ambiental, la resolución de conflictos y la consolidación de territorios más sostenibles, inclusivos y resilientes.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Construcción de acuerdos comunitarios
      
      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t4/11.png' data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Los acuerdos comunitarios son compromisos establecidos de manera participativa entre los habitantes de un territorio con el propósito de orientar comportamientos, regular el uso de los recursos naturales y fortalecer la convivencia. Estos acuerdos se construyen mediante procesos de diálogo, concertación y consenso, considerando las necesidades, intereses y responsabilidades de los diferentes actores territoriales.
      p.mb-5(data-aos='fade-right') Características de los acuerdos comunitarios:
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-md-4.col-lg-2.mb-cus
          .mini-card.br-2.p-4
            img.d-none.d-lg-block.mb-4.wcus-5(src='@/assets/curso/temas/t4/12.svg')
            p.mb-0 Participación voluntaria. 
        .col-sm-6.col-md-4.col-lg-2.mb-cus  
          .mini-card.br-2.p-4
            img.d-none.d-lg-block.mb-4.wcus-5(src='@/assets/curso/temas/t4/13.svg')
            p.mb-0 Construcción colectiva. 
        .col-sm-6.col-md-4.col-lg-2.mb-cus  
          .mini-card.br-2.p-4
            img.d-none.d-lg-block.mb-4.wcus-5(src='@/assets/curso/temas/t4/14.svg')
            p.mb-0 Compromisos compartidos. 
        .col-sm-6.col-md-4.col-lg-2.mb-cus  
          .mini-card.br-2.p-4
            img.d-none.d-lg-block.mb-4.wcus-5(src='@/assets/curso/temas/t4/15.svg')
            p.mb-0 Respeto por la diversidad. 
        .col-sm-6.col-md-4.col-lg-2.mb-cus  
          .mini-card.br-2.p-4
            img.d-none.d-lg-block.mb-4.wcus-5(src='@/assets/curso/temas/t4/16.svg')
            p.mb-0 Orientación al bien común. 
      
      p.mb-5(data-aos='fade-right') Los acuerdos fortalecen la gobernanza ambiental y favorecen el cumplimiento de acciones orientadas al desarrollo sostenible.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Bienestar colectivo y corresponsabilidad
      
      p.mb-5(data-aos='fade-right') El bienestar colectivo hace referencia a las condiciones sociales, económicas, culturales y ambientales que permiten mejorar la calidad de vida de toda la comunidad. Su construcción requiere la corresponsabilidad entre ciudadanía, instituciones, organizaciones sociales y sector productivo.
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/17.png')
        .col-sm-12.col-lg-4.bg-color-1.p-3
            p.mb-3 Componentes del bienestar colectivo:
            ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Calidad ambiental. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Participación ciudadana. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Equidad social. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Seguridad alimentaria. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Conservación del territorio. 
                li.d-flex.mb-0
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Fortalecimiento institucional.  
        
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/18.png')

      p.mb-5(data-aos='fade-right') La corresponsabilidad fortalece el compromiso ciudadano y mejora la sostenibilidad de las acciones desarrolladas en el territorio.La corresponsabilidad fortalece el compromiso ciudadano y mejora la sostenibilidad de las acciones desarrolladas en el territorio.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mecanismos de autorregulación territorial
      
      p.mb-3(data-aos='fade-right') La autorregulación territorial corresponde al conjunto de normas, acuerdos, prácticas y mecanismos que las comunidades establecen para orientar el comportamiento de sus integrantes y promover el uso responsable de los recursos naturales. Estos mecanismos complementan la normatividad oficial y fortalecen la autonomía comunitaria.
      p.mb-3(data-aos='fade-right') Ejemplos:

      .bg-full-width.bg-fondo-1.mb-0(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-6
              img(src='@/assets/curso/temas/t4/19.svg')
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/20.png')
        .col-sm-12.col-lg-8
            p.mb-0 La implementación de mecanismos de autorregulación territorial aporta múltiples beneficios para las comunidades y para la gestión sostenible del territorio. En primer lugar, fortalece la organización comunitaria al promover la participación de sus integrantes en la definición y cumplimiento de normas, acuerdos y compromisos colectivos. Además, contribuye a reducir los conflictos relacionados con el uso de los recursos naturales, la convivencia y las actividades productivas, al establecer reglas claras y consensuadas. De igual manera, favorece la conservación ambiental mediante la adopción de prácticas responsables para el manejo del agua, los bosques, el suelo y la biodiversidad, promoviendo el aprovechamiento sostenible de los recursos. Finalmente, la autorregulación impulsa el cumplimiento de los acuerdos comunitarios, fortalece la corresponsabilidad entre los diferentes actores del territorio y consolida procesos de gobernanza ambiental orientados al bienestar común y al desarrollo territorial sostenible.
      
      
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cultura de cuidado y convivencia
      p.mb-3(data-aos='fade-right') La cultura del cuidado promueve valores, actitudes y comportamientos orientados al respeto por las personas, el ambiente y el territorio. La convivencia pacífica fortalece las relaciones sociales y favorece el trabajo colaborativo en beneficio de la comunidad.
      p.mb-5(data-aos='fade-right') Valores asociados:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/21.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Solidaridad.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/22.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Respeto.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/23.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Responsabilidad.

      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/24.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Cooperación.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/25.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Honestidad.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/26.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Tolerancia.







      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Redes de conocimiento
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
            p.mb-4 Las redes de conocimiento son espacios de articulación entre personas, comunidades, instituciones y organizaciones que comparten información, experiencias y aprendizajes con el propósito de generar soluciones a problemáticas comunes y fortalecer las capacidades del territorio. Estas redes facilitan la circulación del conocimiento y promueven procesos permanentes de aprendizaje colaborativo.

            .bg-color-7.p-5
              p.mb-0 Las redes de conocimiento se caracterizan por promover la colaboración entre personas, organizaciones e instituciones que comparten intereses y objetivos comunes para fortalecer el desarrollo del territorio. Su funcionamiento se basa en el intercambio de experiencias, conocimientos, buenas prácticas y lecciones aprendidas, permitiendo que los participantes enriquezcan sus capacidades a partir del aprendizaje mutuo. Asimismo, fomentan la participación de todos los actores, quienes aportan ideas, información y soluciones desde sus diferentes experiencias y saberes, fortaleciendo así los procesos de construcción colectiva del conocimiento.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/27.png')
      
      p.mb-3(data-aos='fade-right') Otra característica importante es el aprendizaje colectivo, mediante el cual el conocimiento se construye de forma conjunta a partir del diálogo, la reflexión y la cooperación entre los participantes. Estas redes también impulsan la innovación, al facilitar la generación de nuevas ideas, metodologías y estrategias para resolver problemáticas ambientales, sociales y productivas del territorio. Finalmente, promueven la cooperación institucional, favoreciendo la articulación entre comunidades, entidades públicas, organizaciones privadas, instituciones educativas y organizaciones sociales, lo que fortalece la gobernanza ambiental, optimiza el uso de los recursos disponibles y contribuye al desarrollo territorial sostenible.
      p.mb-5(data-aos='fade-right') Las redes fortalecen la gestión del conocimiento y mejoran la capacidad de respuesta frente a los desafíos territoriales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de redes de conocimiento
      
      p.mb-5(data-aos='fade-right') Las redes pueden conformarse según sus objetivos, actores participantes y formas de interacción.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 17.]  Tipos de redes de conocimiento
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th Tipo de red
              th Características
              th Ejemplos
          tbody
            tr
              td Comunitarias
              td Integran organizaciones locales y líderes sociales.
              td Redes ambientales comunitarias.
            tr
              td Académicas
              td Vinculan instituciones educativas e investigadores.
              td Universidades y centros de investigación.
            tr
              td Institucionales
              td Articulan entidades públicas y privadas.
              td Mesas técnicas interinstitucionales.
            tr
              td Virtuales
              td Funcionan mediante plataformas digitales.
              td Comunidades de aprendizaje en línea.
      
      p.mb-5(data-aos='fade-right') Cada tipo de red contribuye al fortalecimiento de capacidades y a la construcción de soluciones colaborativas para el territorio.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Intercambio de experiencias y aprendizajes
      
      p.mb-5(data-aos='fade-right') El intercambio de experiencias permite compartir conocimientos adquiridos durante la ejecución de proyectos, la gestión comunitaria y las prácticas de conservación ambiental. Este proceso favorece el aprendizaje mutuo y fortalece las capacidades de las comunidades para enfrentar nuevos retos.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/28.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Estrategias:
          ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Encuentros comunitarios. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Giras de aprendizaje. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Talleres participativos. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Ferias de experiencias. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Seminarios. 
              li.d-flex.mb-0
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Comunidades de práctica. 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/29.png')
        .col-sm-12.col-lg-8
            p.mb-0 El intercambio de experiencias y aprendizajes genera numerosos beneficios para las comunidades y las organizaciones que participan en procesos de gestión territorial. En primer lugar, facilita la difusión de buenas prácticas, permitiendo que experiencias exitosas puedan adaptarse y replicarse en otros contextos para mejorar la gestión ambiental y el desarrollo comunitario. Asimismo, estimula la innovación, ya que el intercambio de conocimientos y perspectivas favorece la generación de nuevas ideas, metodologías y soluciones frente a los desafíos del territorio. De igual manera, contribuye al fortalecimiento organizacional, al desarrollar capacidades técnicas, de liderazgo y de trabajo en equipo entre los diferentes actores involucrados. Finalmente, promueve el aprendizaje colaborativo, mediante el cual las personas construyen conocimiento de forma conjunta, integrando saberes tradicionales, experiencias locales y conocimientos técnicos para fortalecer la gobernanza ambiental y el desarrollo territorial sostenible.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Redes comunitarias para la gestión ambiental

      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/30.png')
        .col-sm-12.col-lg-9
            .bg-color-1.p-4.mb-4
              p.mb-0 Las redes comunitarias para la gestión ambiental articulan organizaciones sociales, instituciones y ciudadanos interesados en la conservación del territorio y el manejo sostenible de los recursos naturales. Estas redes promueven acciones coordinadas orientadas a la educación ambiental, la restauración ecológica, la gestión del riesgo y la gobernanza ambiental.
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-7.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/31.png')
              .col-sm-12.col-lg-5
                  p.mb-3 Áreas de trabajo:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Conservación de ecosistemas. 
                    li.d-flex
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Educación ambiental. 
                    li.d-flex
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Gestión del agua. 
                    li.d-flex
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Cambio climático. 
                    li.d-flex
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Restauración ecológica. 
                    li.d-flex.mb-0
                      i.fas.fa-flag.color-acento-contenido
                      p.mb-0 Vigilancia ambiental comunitaria. 




      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Espacios de intercambio de conocimientos
      
      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t4/32.svg' data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Los espacios de intercambio de conocimientos son escenarios diseñados para compartir saberes, experiencias, metodologías y aprendizajes entre diferentes actores territoriales.
      p.mb-5(data-aos='fade-right') Su finalidad es fortalecer las capacidades locales, promover el aprendizaje colectivo y facilitar la construcción de soluciones a problemáticas comunes.


      LineaTiempoD.color-acento-botones(data-aos='fade-right').mb-0
        .row(numero="1" titulo="Tipos de espacios de intercambio")
          .col-12.pcus-1
            p.mb-5 Existen diversas modalidades de intercambio según los objetivos y características de los participantes.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/33.png')
              .col-sm-12.col-lg-6
                p.mb-3 Principales tipos de espacios de intercambio:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Talleres comunitarios.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Foros.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Seminarios.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Conversatorios.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Ferias ambientales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Encuentros de saberes.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Escuelas de campo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Mesas técnicas.
            p.mb-0 Estos espacios fortalecen la apropiación del conocimiento y favorecen la innovación territorial.

        .row(numero="2" titulo="Estructura y organización de encuentros comunitarios")
          .col-12.pcus-1
            p.mb-5 La organización de encuentros comunitarios requiere una adecuada planificación para garantizar el cumplimiento de los objetivos propuestos y promover una participación amplia e incluyente.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 18.] Etapas principales
            .tabla-a.color-acento-contenido.mb-5.bg-white
              table
                thead
                  tr
                    th Etapa
                    th Descripción
                tbody
                  tr
                    td Planeación
                    td Definición de objetivos, participantes, metodología y recursos.
                  tr
                    td Convocatoria
                    td Invitación y difusión de la actividad.
                  tr
                    td Desarrollo
                    td Realización de las actividades participativas.
                  tr
                    td Sistematización
                    td Registro de resultados, acuerdos y aprendizajes.
                  tr
                    td Seguimiento
                    td Evaluación y cumplimiento de compromisos.
            p.mb-0 Una adecuada organización mejora la calidad de los procesos participativos y facilita la construcción de acuerdos comunitarios.

        .row(numero="3" titulo="Sistematización y transferencia de conocimientos")
          .col-12.pcus-1
            p.mb-5 La sistematización consiste en organizar, analizar y documentar las experiencias desarrolladas durante procesos comunitarios, proyectos o iniciativas territoriales, con el propósito de identificar aprendizajes, buenas prácticas y oportunidades de mejora. La transferencia de conocimientos permite compartir esa información con otras comunidades, instituciones y organizaciones, facilitando la réplica de experiencias exitosas y el fortalecimiento de las capacidades locales.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/34.png')
              .col-sm-12.col-lg-6
                p.mb-3 Estrategias de sistematización y transferencia:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Elaboración de informes y memorias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Publicaciones técnicas y comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Bancos de experiencias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Plataformas digitales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Material audiovisual.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Encuentros de socialización.
            p.mb-0 La sistematización y la transferencia de conocimientos fortalecen la memoria institucional y comunitaria, promueven la innovación, facilitan el aprendizaje colectivo y contribuyen a consolidar procesos sostenibles de gobernanza ambiental y desarrollo territorial.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
