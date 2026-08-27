<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 2
        h1 Participación ciudadana, concertación y resolución de conflictos territoriales
      
      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/intro/1.png' data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La participación ciudadana constituye uno de los pilares fundamentales de la democracia y de la gobernanza ambiental del territorio. A través de ella, las comunidades pueden intervenir activamente en la toma de decisiones relacionadas con el manejo de los recursos naturales, la planificación territorial y la formulación de políticas públicas. La participación fortalece la corresponsabilidad entre el Estado y la sociedad, promueve la transparencia en la gestión pública y contribuye a la construcción de territorios más sostenibles, equitativos y resilientes.
      
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Asimismo, los procesos de diálogo, concertación y resolución de conflictos permiten gestionar las diferencias que surgen entre diversos actores territoriales, favoreciendo la construcción de acuerdos colectivos y el fortalecimiento de la convivencia. Estos mecanismos son especialmente importantes en contextos donde existen intereses diversos sobre el uso de los recursos naturales, el desarrollo económico y la protección ambiental.
      
      p.mb-5(data-aos='fade-right') Se invita al aprendiz a consultar el siguiente video con el propósito de fortalecer la comprensión de los mecanismos de participación ciudadana y reconocer su importancia en la protección del ambiente, el seguimiento a la gestión pública y la construcción de soluciones colectivas.
      
      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Mecanismos de participación ciudadana
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.svg')
        .col-sm-12.col-lg-11
            p.mb-2 En el contexto de la gestión ambiental y territorial, la participación permite que las comunidades expresen sus necesidades, aporten conocimientos locales y contribuyan a la toma de decisiones relacionadas con el uso y conservación del territorio.
            p.mb-0 La participación ciudadana contribuye a fortalecer la democracia, promover la transparencia en la gestión pública y garantizar que las decisiones territoriales respondan a las necesidades de las comunidades. Además, favorece la corresponsabilidad en la protección del ambiente, fortalece el control social sobre las instituciones y facilita la construcción de soluciones concertadas frente a los desafíos ambientales y territoriales.

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card" data-aos='fade-right')
        .row.justify-content-center.align-items-center.mb-0(titulo="Veedurías ciudadanas")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 Las veedurías ciudadanas son mecanismos democráticos de representación que permiten a los ciudadanos ejercer vigilancia sobre la gestión pública y la ejecución de programas, proyectos, contratos y políticas desarrolladas por entidades estatales o privadas que administren recursos públicos.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/3.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/4.png')
              .col-sm-12.col-lg-6
                p.mb-5 Las veedurías buscan promover la transparencia en la administración pública, prevenir actos de corrupción, fortalecer la participación ciudadana y garantizar que los recursos públicos sean utilizados de manera eficiente y conforme a la normatividad vigente. Las siguientes son las funciones principales de las veedurías ciudadanas:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Vigilar la ejecución de proyectos públicos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Hacer seguimiento a la inversión de recursos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Presentar observaciones y recomendaciones.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Solicitar información a entidades públicas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Promover la rendición de cuentas.
            .cajon.color-secundario.p-4.mb-0
              h4 Ejemplo:
              p.mb-0 Una comunidad puede conformar una veeduría ciudadana para realizar seguimiento a la ejecución de un proyecto de restauración ambiental financiado por una entidad territorial.

        .row.justify-content-center.align-items-center.mb-0(titulo="Consulta popular")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 La consulta popular es un mecanismo de participación mediante el cual una autoridad pública somete una pregunta de interés general a consideración de la ciudadanía para que esta se pronuncie mediante votación.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/5.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/6.png')
              .col-sm-12.col-lg-6
                p Características:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Permite la participación directa de los ciudadanos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Se utiliza para asuntos de interés colectivo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 El resultado puede orientar decisiones públicas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Debe desarrollarse conforme a los procedimientos establecidos por la ley.
            .cajon.color-secundario.p-4.mb-0
              h4 Nota:
              p.mb-0 La consulta popular fortalece la participación democrática al permitir que la ciudadanía exprese su opinión sobre temas que impactan directamente el territorio y la comunidad.

        .row.justify-content-center.align-items-center.mb-0(titulo="Consulta previa")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 La consulta previa es un derecho fundamental de los pueblos indígenas, comunidades afrodescendientes, raizales, palenqueras y pueblo #[i Rom], mediante el cual deben ser consultados cuando una medida administrativa, legislativa o proyecto pueda afectar directamente sus territorios, recursos naturales, cultura o formas de vida.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/7.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/8.png')
              .col-sm-12.col-lg-6
                p Los principios de la consulta previa son los siguientes:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Participación efectiva.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Buena fe.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Interculturalidad.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Información adecuada y oportuna.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Respeto por la autonomía de las comunidades.
            .cajon.color-secundario.p-4.mb-0
              p.mb-0 Este mecanismo protege los derechos colectivos de los grupos étnicos y garantiza que las decisiones relacionadas con sus territorios se adopten considerando sus intereses, conocimientos y formas de organización.

        .row.justify-content-center.align-items-center.mb-0(titulo="Derecho de petición y audiencia pública")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 #[b Derecho de petición:] es un derecho fundamental que permite a toda persona presentar solicitudes respetuosas ante autoridades públicas o particulares que ejerzan funciones públicas, con el fin de obtener información, formular consultas o solicitar actuaciones específicas.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/9.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/10.png')
              .col-sm-12.col-lg-6
                p Sus finalidades son:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Acceder a información pública.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Solicitar aclaraciones.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Presentar quejas o reclamos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Formular propuestas o solicitudes.
            .cajon.color-secundario.p-4.mb-4
              h4 Audiencia pública:
              p.mb-0 Es un espacio de participación donde las autoridades presentan información sobre proyectos, programas o decisiones y permiten la intervención de la ciudadanía.
            p.mb-0 Las audiencias públicas promueven la transparencia, fortalecen el diálogo entre autoridades y comunidades y facilitan la participación ciudadana en asuntos de interés colectivo.


      
      
      
      
      
      
      
      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Democratización de la gestión pública
      
      p.mb-5(data-aos='fade-right') Promueve la participación de la ciudadanía en la toma de decisiones, el control social y la construcción de políticas públicas. Este enfoque fortalece la transparencia, la corresponsabilidad y el diálogo entre las instituciones y las comunidades, con el propósito de responder de manera equitativa a las necesidades del territorio. Para ampliar información detallaremos aspectos relevantes de esta democratización:
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Instancias de participación y control social
      
      
      .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/11.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Las instancias de participación y control social son espacios formales mediante los cuales la ciudadanía puede intervenir en los asuntos públicos, realizar seguimiento a la gestión gubernamental y contribuir a la toma de decisiones que afectan el territorio.
          p.mb-0 Estas instancias fortalecen la democracia participativa, promueven la transparencia institucional y facilitan la articulación entre las comunidades y las entidades públicas. 
      
      p.mb-4(data-aos='fade-right') Las principales instancias de participación son:
      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Consejos territoriales de planeación. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Juntas de acción comunal. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Consejos municipales de desarrollo rural. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Mesas ambientales. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Comités comunitarios. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Veedurías ciudadanas. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Consejos consultivos y sectoriales. 

        .col-sm-12.col-lg-8.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/12.png')

      p.mb-5(data-aos='fade-right') Estas instancias permiten que las comunidades expresen sus necesidades, participen en la formulación de políticas públicas y contribuyan al seguimiento de programas y proyectos territoriales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Responsabilidades de los actores territoriales

      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t2/13.png' data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La gestión territorial involucra diversos actores que comparten responsabilidades en la protección ambiental, el desarrollo sostenible y el bienestar colectivo.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 13.] Actores territoriales
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 Actor
              th Responsabilidades
          tbody
            tr
              td Estado
              td Formular políticas públicas, garantizar derechos y gestionar recursos.
            tr
              td Comunidades
              td Participar en la toma de decisiones y proteger el territorio.
            tr
              td Organizaciones sociales
              td Representar intereses colectivos y promover procesos comunitarios.
            tr
              td Sector privado
              td Desarrollar actividades productivas responsables y cumplir la normatividad.
            tr
              td Academia
              td Generar conocimiento y apoyar procesos de investigación e innovación.
      p.mb-5(data-aos='fade-right') La articulación entre estos actores favorece procesos de gobernanza más eficientes, participativos y sostenibles.
  
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Participación comunitaria en la gestión ambiental

      p.mb-3(data-aos='fade-right') La participación comunitaria en la gestión ambiental permite que las comunidades intervengan activamente en la protección, conservación y uso sostenible de los recursos naturales presentes en el territorio.
      p.mb-5(data-aos='fade-right') Esta participación fortalece la apropiación social del territorio y promueve soluciones construidas desde el conocimiento local.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/14.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Estos son los ámbitos de participación:
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Conservación de ecosistemas. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Gestión del recurso hídrico. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Educación ambiental. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Restauración ecológica. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Gestión del riesgo. 
            li.d-flex
              i.fas.fa-flag.color-acento-contenido
              p.mb-0 Vigilancia ambiental comunitaria.
      p.mb-5(data-aos='fade-right') La participación comunitaria mejora la efectividad de las acciones ambientales, fortalece la organización social y favorece la sostenibilidad de los procesos territoriales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Transparencia y corresponsabilidad ciudadana

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/15.png')
        .col-sm-12.col-lg-9
          .bg-color-1.p-4.mb-4
            p.mb-0 La transparencia implica que las actuaciones de las instituciones públicas sean accesibles y puedan ser conocidas por la ciudadanía, mediante mecanismos como el acceso a la información pública, la publicidad de las actuaciones y la rendición de cuentas. Por su parte, la corresponsabilidad implica que las autoridades, las comunidades y demás actores del territorio asumen, de acuerdo con sus competencias y capacidades, compromisos frente a su gestión, desarrollo y protección.
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/16.png')
            .col-sm-12.col-lg-5
              p.mb-3 Los principios de la transparencia son:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Acceso a la información. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Publicidad de las actuaciones públicas. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Rendición de cuentas. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Control social. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Participación ciudadana. 
          

      p.mb-0(data-aos='fade-right') La transparencia fortalece la confianza entre las instituciones y la comunidad, mientras que la corresponsabilidad promueve una gestión territorial más participativa y sostenible.

      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Diálogo, concertación y manejo de conflictos
      
      
      LineaTiempoD.color-acento-botones(data-aos='fade-right').mb-5
        .row(numero="1" titulo="Mecanismos de diálogo social")
          .col-12.pcus-1
            p.mb-5 El diálogo social es un proceso de comunicación e intercambio de ideas entre diferentes actores territoriales con el propósito de construir acuerdos y solucionar problemáticas de interés común.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/17.png')
              .col-sm-12.col-lg-6
                p.mb-3 Estos mecanismos facilitan la comprensión mutua y fortalecen la convivencia en los territorios. Los principales mecanismos de diálogo social son:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Mesas de diálogo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Reuniones comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Asambleas ciudadanas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Foros participativos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Encuentros territoriales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Comités de concertación.
            .cajon.color-secundario.p-4.mb-0
              h4 Nota:
              p.mb-0 El diálogo social favorece la construcción de confianza, reduce tensiones y fortalece la gobernanza territorial.

        .row(numero="2" titulo="Concertación y construcción de consensos")
          .col-12.pcus-1
            p.mb-5 La concertación es un proceso mediante el cual diferentes actores analizan intereses, necesidades y propuestas para construir acuerdos orientados al bienestar colectivo.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/18.png')
              .col-sm-12.col-lg-6
                p.mb-3 El consenso representa el resultado de este proceso, cuando las partes logran identificar puntos comunes que permiten avanzar hacia objetivos compartidos.
                p.mb-3 Principios de la concertación:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Respeto mutuo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Inclusión.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Participación equitativa.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Buena fe.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Búsqueda del beneficio común.
            p.mb-0 La concertación fortalece la legitimidad de las decisiones y favorece soluciones sostenibles para los conflictos territoriales.

        .row(numero="3" titulo="Identificación y manejo de disensos")
          .col-12.pcus-1
            p.mb-5 Los disensos son diferencias de opinión, intereses o perspectivas entre actores sociales respecto a un tema determinado.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/19.png')
              .col-sm-12.col-lg-6
                p.mb-3 En los procesos territoriales es normal que existan posiciones diversas relacionadas con el uso de los recursos naturales, la planificación del territorio o las actividades económicas.
                p.mb-3 Estrategias para el manejo de disensos:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Escucha activa.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Respeto por la diversidad de opiniones.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Mediación.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Negociación.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Construcción gradual de acuerdos.
            p.mb-0 El manejo adecuado de los disensos evita la escalada de conflictos y fortalece la convivencia democrática.

        .row(numero="4" titulo="Resolución pacífica de conflictos territoriales")
          .col-12.pcus-1
            p.mb-5 Los conflictos territoriales surgen cuando existen intereses contrapuestos sobre el acceso, uso o manejo del territorio y sus recursos. La resolución pacífica busca abordar estas diferencias mediante mecanismos de diálogo, negociación y concertación.
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              p.mb-0 #[b Tabla 14.] Etapas de la resolución de conflictos
            .tabla-a.color-acento-contenido.mb-5.bg-white(data-aos='fade-right')
              table
                thead
                  tr
                    th.wcus-1 Etapa
                    th Descripción
                tbody
                  tr
                    td Identificación
                    td Reconocimiento del conflicto y sus causas.
                  tr
                    td Análisis
                    td Comprensión de actores, intereses y posibles impactos.
                  tr
                    td Diálogo
                    td Intercambio de posiciones y propuestas.
                  tr
                    td Concertación
                    td Construcción de acuerdos.
                  tr
                    td Seguimiento
                    td Verificación del cumplimiento de los compromisos.
            p La resolución pacífica de conflictos territoriales genera múltiples beneficios para las comunidades y los procesos de gestión del territorio. En primer lugar, contribuye a la prevención de confrontaciones al promover el diálogo y la búsqueda de soluciones concertadas entre los diferentes actores involucrados. Asimismo, fortalece las relaciones comunitarias al fomentar el respeto, la cooperación y la construcción de objetivos comunes. Estos procesos también favorecen la generación de confianza entre la ciudadanía, las organizaciones y las instituciones, creando condiciones más propicias para el trabajo conjunto y la toma de decisiones participativas.
            p.mb-0 Por tanto, contribuyen al mejoramiento de la gobernanza territorial, ya que facilitan la participación de los actores locales, fortalecen la legitimidad de las decisiones y promueven una gestión más democrática, incluyente y sostenible del territorio.

        .row(numero="5" titulo="Mecanismos de participación propios o endógenos")
          .col-12.pcus-1
            p.mb-5 Los mecanismos endógenos son formas de participación construidas desde las prácticas culturales, organizativas y normativas propias de las comunidades.
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/20.png')
              .col-sm-12.col-lg-6
                p.mb-3 Estos mecanismos reflejan los conocimientos, tradiciones y formas de gobierno desarrolladas localmente.
                p.mb-3 Ejemplos:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Cabildos indígenas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Asambleas comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Consejos comunitarios afrodescendientes.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Mingas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Convites.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Juntas tradicionales.
            p.mb-0 Estos espacios fortalecen la identidad cultural, la autonomía comunitaria y la gobernanza local.

      
      
      
      
      p.mb-5(data-aos='fade-right') Se invita al aprendiz a explorar el pódcast #[b “Diálogo, concertación y resolución de conflictos territoriales”], con el propósito de comprender la importancia del diálogo, la concertación y la participación comunitaria en la resolución pacífica de conflictos socioambientales y en la construcción de soluciones sostenibles para el territorio.
      
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/21.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-0(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: diálogo, concertación y resolución de conflictos territoriales"
              :audio="require_src('@/assets/curso/temas/t2/podcast.mp3')"
          )








      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Gobernanza colaborativa para la gestión ambiental
      
      img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t2/22.png' data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La gobernanza colaborativa para la gestión ambiental promueve la participación articulada de las comunidades, las instituciones públicas, las organizaciones sociales y el sector productivo en la toma de decisiones. Este enfoque facilita el diálogo, la construcción de acuerdos y la responsabilidad compartida para proteger los recursos naturales y avanzar hacia un desarrollo territorial sostenible.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 15.] Actores y estrategias para la gobernanza ambiental del territorio
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          tbody
            tr
              td.wcus-4.fw-bold Actores de la gobernanza ambiental
              td
                p La gobernanza ambiental implica la participación coordinada de diversos actores en la gestión y conservación de los recursos naturales. Los actores principales son:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Entidades gubernamentales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Autoridades ambientales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Organizaciones comunitarias.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Organizaciones no gubernamentales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Sector productivo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Instituciones educativas y centros de investigación.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Comunidades locales.
                p.mb-0 La articulación de actores permite una gestión más integral y efectiva de los territorios.
            tr
              td.wcus-4.fw-bold Corresponsabilidad institucional y comunitaria
              td
                p La corresponsabilidad se refiere al compromiso compartido entre instituciones y ciudadanía para proteger el ambiente y promover el desarrollo sostenible. Las siguientes son acciones de corresponsabilidad:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Participación en procesos de planificación.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Protección de recursos naturales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Cumplimiento de la normatividad ambiental.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Educación ambiental.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Vigilancia y control social.
                p.mb-0 La corresponsabilidad fortalece la sostenibilidad de las acciones territoriales y mejora los resultados de la gestión ambiental.
            tr
              td.wcus-4.fw-bold Acuerdos comunitarios para la gestión territorial
              td
                p Los acuerdos comunitarios son compromisos construidos colectivamente para orientar el uso, manejo y conservación de los recursos del territorio.
                p Estos acuerdos surgen de procesos participativos y buscan generar reglas compartidas para la convivencia y la sostenibilidad. Los temas más frecuentes en los acuerdos son:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Protección de fuentes hídricas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Conservación de bosques.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Manejo de residuos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Uso del suelo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Gestión del riesgo.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Aprovechamiento sostenible de recursos naturales.
                p.mb-0 Los acuerdos comunitarios fortalecen la organización social y facilitan el cumplimiento de objetivos comunes.
            tr
              td.wcus-4.fw-bold Seguimiento ciudadano a la gestión pública
              td
                p El seguimiento ciudadano es el conjunto de acciones mediante las cuales la comunidad evalúa y monitorea la ejecución de políticas, programas y proyectos públicos. Este proceso fortalece el control social y promueve la transparencia institucional. Las herramientas de seguimiento son:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Veedurías ciudadanas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Informes comunitarios.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Rendición de cuentas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Observatorios ciudadanos.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Audiencias públicas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Mesas de seguimiento.
                p.mb-0 El seguimiento ciudadano permite verificar el cumplimiento de compromisos, mejorar la gestión pública y fortalecer la confianza entre las instituciones y la comunidad, contribuyendo al desarrollo sostenible y a la gobernanza ambiental del territorio.

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
