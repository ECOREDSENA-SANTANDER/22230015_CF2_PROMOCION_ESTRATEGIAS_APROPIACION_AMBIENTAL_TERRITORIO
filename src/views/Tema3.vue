<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 3
        h1 Prospectiva, desarrollo local y formulación de iniciativas territoriales
      
      p.mb-5(data-aos='fade-right') La gestión sostenible del territorio requiere una visión de futuro que permita identificar oportunidades, anticipar desafíos y orientar acciones encaminadas al bienestar de las comunidades y la conservación ambiental. En este contexto, la prospectiva territorial constituye una herramienta fundamental para analizar las condiciones actuales del territorio, proyectar escenarios futuros y construir estrategias que contribuyan al desarrollo local sostenible.

      .row.justify-content-center.mb-0.bg-primario(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t3/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-3(src='@/assets/curso/temas/t3/2.svg')
          p.mb-0  Asimismo, el reconocimiento de las potencialidades ambientales, productivas, sociales y culturales permite identificar oportunidades para fortalecer las capacidades comunitarias, promover iniciativas económicas sostenibles y generar procesos de desarrollo acordes con las características y necesidades del territorio. De igual manera, el emprendimiento y la formulación de proyectos representan instrumentos importantes para transformar ideas en acciones concretas que contribuyan al mejoramiento de la calidad de vida, la gobernanza ambiental y el desarrollo territorial.


      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Prospectiva territorial

      p.mb-5(data-aos='fade-right') La prospectiva territorial es un proceso de análisis y construcción colectiva orientado a comprender las dinámicas actuales del territorio y explorar posibles escenarios futuros. Su propósito es apoyar la toma de decisiones estratégicas mediante la identificación de tendencias, oportunidades, riesgos y alternativas de desarrollo.
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La prospectiva no busca predecir el futuro, sino construir visiones compartidas que permitan orientar acciones hacia escenarios deseables y sostenibles.
          p.mb-0 La prospectiva permite anticipar cambios sociales, ambientales y económicos, facilita la planificación de largo plazo, fortalece la participación comunitaria y contribuye a la formulación de estrategias orientadas al desarrollo sostenible del territorio.

      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card" data-aos='fade-right')
        .row.justify-content-center.align-items-center.mb-0(titulo="Escenario actual del territorio")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 El escenario actual corresponde al análisis de las condiciones presentes del territorio en términos ambientales, sociales, económicos, culturales e institucionales. Este diagnóstico permite identificar fortalezas, debilidades, oportunidades y problemáticas que influyen en el desarrollo territorial.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/4.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.png')
              .col-sm-12.col-lg-6
                p.mb-4 Aspectos de análisis:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Recursos naturales disponibles.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Situación socioeconómica.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Actividades productivas.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Infraestructura y servicios.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Organización comunitaria.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Problemáticas ambientales.
                  li.d-flex
                    i.fas.fa-flag.color-acento-contenido
                    p.mb-0 Gobernanza territorial.
            p.mb-0 Conocer el escenario actual constituye el punto de partida para la construcción de propuestas y estrategias de desarrollo.

        .row.justify-content-center.align-items-center.mb-0(titulo="Escenario tendencial")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 El escenario tendencial describe la situación futura que podría presentarse si las condiciones actuales continúan sin cambios significativos. Se construye a partir de tendencias observadas en variables ambientales, sociales, económicas y territoriales.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/6.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/7.png')
              .col-sm-12.col-lg-6
                p.mb-0 El escenario tendencial se caracteriza por realizar una proyección del futuro basada en los comportamientos y dinámicas que actualmente se presentan en el territorio. Este análisis permite identificar los riesgos que podrían surgir si las tendencias existentes continúan sin cambios o intervenciones significativas, facilitando la anticipación de posibles problemáticas ambientales, sociales, económicas o institucionales. Asimismo, permite evaluar las consecuencias que dichas tendencias podrían generar a mediano y largo plazo, proporcionando información valiosa para la toma de decisiones y la formulación de estrategias orientadas a construir escenarios más sostenibles y favorables para el desarrollo territorial.
            .cajon.color-secundario.p-4.mb-0
              h4 Ejemplo:
              p.mb-0 Si continúa la deforestación en una región, el escenario tendencial podría incluir pérdida de biodiversidad, disminución de recursos hídricos y aumento de la erosión.

        .row.justify-content-center.align-items-center.mb-0(titulo="Escenario deseado")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 El escenario deseado representa la visión de futuro que las comunidades establecen para su territorio. Esta visión se fundamenta en principios de sostenibilidad, equidad, bienestar colectivo y conservación ambiental.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/8.png')
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/9.png')
              .col-sm-12.col-lg-6
                p.mb-0 El escenario deseado se caracteriza por construirse de manera participativa, involucrando a los diferentes actores del territorio en la definición de una visión compartida de futuro. Este proceso permite establecer metas territoriales que reflejan las aspiraciones y necesidades de la comunidad, así como identificar las prioridades de desarrollo que deben ser atendidas para alcanzar mejores condiciones sociales, económicas y ambientales. Además, el escenario deseado sirve como una orientación estratégica para la gestión territorial, ya que guía la formulación de planes, programas y proyectos encaminados a lograr un desarrollo sostenible, incluyente y acorde con las expectativas colectivas de la población.
            .cajon.color-secundario.p-4.mb-0
              h4 Ejemplo:
              p.mb-0 Una comunidad puede proyectar un territorio con ecosistemas conservados, producción sostenible, participación ciudadana activa y mejores oportunidades económicas.

        .row.justify-content-center.align-items-center.mb-0(titulo="Escenario posible")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.bg-color-1.px-4.py-4
                p.mb-0 El escenario posible corresponde a la situación futura que puede alcanzarse mediante la implementación de acciones concretas, considerando los recursos, capacidades y limitaciones existentes. Representa un punto de equilibrio entre la realidad actual y las aspiraciones colectivas.
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/10.png')
            p.mb-0 Permite diseñar estrategias viables y formular planes de acción orientados al logro de objetivos territoriales.

      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Identificación de oportunidades territoriales

      .tarjeta.bg-fondo-2.p-4(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Prospectiva territorial
              p.mb-0 Proceso participativo que analiza las dinámicas actuales del territorio y explora escenarios futuros para orientar decisiones estratégicas. Identifica tendencias, oportunidades y riesgos, y permite construir una visión compartida de desarrollo sostenible.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/11.png')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Escenario actual
              p.mb-0 Analiza las condiciones presentes del territorio en los ámbitos ambiental, social, económico, cultural e institucional. Identifica fortalezas, debilidades, oportunidades y problemáticas como punto de partida para la planificación territorial.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/12.png')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Aspectos clave
              p.mb-0 Recursos naturales, situación socioeconómica, actividades productivas, infraestructura, servicios, organización comunitaria, problemáticas ambientales y gobernanza.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/13.png')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Escenario tendencial
              p.mb-4 Proyecta lo que podría ocurrir si las condiciones y dinámicas actuales continúan sin cambios significativos. Permite anticipar riesgos y evaluar posibles consecuencias a mediano y largo plazo.
              p.mb-0 #[b Ejemplo:] la continuidad de la deforestación podría generar pérdida de biodiversidad, reducción de recursos hídricos y erosión.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/14.png')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Escenario deseado
              p.mb-0 Representa la visión de futuro que la comunidad aspira alcanzar. Se construye participativamente y establece metas y prioridades basadas en la sostenibilidad, la equidad, el bienestar colectivo y la conservación ambiental.
              p.mb-0 #[b Ejemplo:] un territorio con ecosistemas conservados, producción sostenible, participación ciudadana y mejores oportunidades económicas.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/15.png')

          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5
              h4 Escenario posible
              p.mb-0 Define el futuro que puede alcanzarse mediante acciones concretas, considerando los recursos, capacidades y limitaciones del territorio. Equilibra la realidad actual con las aspiraciones colectivas y facilita la formulación de estrategias viables y planes de acción.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/16.png')





      
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Desarrollo local sostenible
      
      p.mb-3(data-aos='fade-right') El desarrollo local es un proceso mediante el cual las comunidades fortalecen sus capacidades para mejorar las condiciones económicas, sociales, culturales y ambientales del territorio.
      p.mb-5(data-aos='fade-right') Se fundamenta en la participación de los actores locales y en el aprovechamiento de los recursos y potencialidades existentes.
      
      TabsC.color-acento-botones(data-aos='fade-right')
        .py-3.py-md-4(titulo="Tipos de desarrollo local")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/17.png')
            .col-sm-12.col-lg-6
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 #[b Desarrollo económico local:] busca fortalecer actividades productivas, generar empleo e incrementar ingresos.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 #[b Desarrollo social:] promueve el bienestar, la inclusión y el acceso a oportunidades.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 #[b Desarrollo ambiental:] orienta acciones para la conservación y el uso sostenible de los recursos naturales.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 #[b Desarrollo cultural:] fortalece la identidad, el patrimonio y las expresiones culturales de las comunidades.
        .py-3.py-md-4(titulo="Oportunidades de mercado territorial")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/18.png')
            .col-sm-12.col-lg-6
              p.mb-4 Los territorios pueden generar oportunidades económicas mediante el aprovechamiento sostenible de sus recursos y capacidades. Ejemplos:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Turismo comunitario.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Productos agroecológicos.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Mercados verdes.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Artesanías.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Servicios ambientales.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Productos con identidad territorial.
              p.mb-0 Estas oportunidades contribuyen a diversificar la economía local y mejorar los ingresos de la población.
        .py-3.py-md-4(titulo="Redes de mercado y encadenamientos productivos")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/19.png')
            .col-sm-12.col-lg-6
              p.mb-4 Las redes de mercado son relaciones establecidas entre productores, comercializadores, consumidores e instituciones para facilitar la circulación de bienes y servicios. Los encadenamientos productivos permiten integrar diferentes etapas de producción, transformación y comercialización. Algunos beneficios son:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Mayor competitividad.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Acceso a nuevos mercados.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Generación de valor agregado.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Fortalecimiento de economías locales. 
        .py-3.py-md-4(titulo="Estrategias de asociatividad comunitaria")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/20.png')
            .col-sm-12.col-lg-6
              p.mb-4 La asociatividad consiste en la unión voluntaria de personas u organizaciones para alcanzar objetivos comunes.
              p.mb-4 Algunas formas de asociatividad son:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Asociaciones.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Cooperativas.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Redes comunitarias.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Alianzas productivas.
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Organizaciones solidarias. 
              p.mb-0 La asociatividad fortalece la capacidad de gestión, mejora el acceso a recursos y facilita el desarrollo de proyectos colectivos.




      
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 Emprendimiento y formulación de proyectos
      
      p.mb-5(data-aos='fade-right') El emprendimiento es la capacidad de identificar oportunidades y transformarlas en iniciativas que generen valor económico, social o ambiental. El desarrollo de iniciativas emprendedoras puede involucrar capacidades y criterios como:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/21.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-3 Innovación. 

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/22.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Creatividad. 

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/23.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Liderazgo. 
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/24.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Responsabilidad. 

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/25.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Sostenibilidad. 

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/26.svg')
            .tarjeta.bg-color-5
              .p-4
                h4.text-center.mb-0 Trabajo colaborativo.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de iniciativas emprendedoras
      p.mb-3(data-aos='fade-right') Las iniciativas emprendedoras surgen de la observación de necesidades, problemáticas y oportunidades presentes en el territorio. Los criterios de identificación son:

     

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.bg-color-1.pcus-3
            ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Pertinencia territorial.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Viabilidad técnica.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Viabilidad económica.  
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/27.svg')
        .col-sm-12.col-lg-4.bg-color-1.pcus-4
            ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Impacto social. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Sostenibilidad ambiental. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Viabilidad técnica y económica

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
            p.mb-5 La viabilidad es el proceso mediante el cual se analiza si una iniciativa, proyecto o emprendimiento cuenta con las condiciones necesarias para ejecutarse de manera exitosa y alcanzar los resultados esperados. Este análisis permite valorar de forma anticipada los recursos disponibles, las capacidades de los actores involucrados, las condiciones del entorno y los posibles riesgos que podrían afectar su implementación. Evaluar la viabilidad antes de poner en marcha una iniciativa facilita la toma de decisiones fundamentadas, optimiza el uso de los recursos y aumenta las posibilidades de éxito. Generalmente, la viabilidad se estudia desde diferentes perspectivas; entre las más importantes se encuentran la viabilidad técnica y la viabilidad económica, las cuales ofrecen una visión integral sobre las posibilidades reales de desarrollar un proyecto.

            .bg-color-7.p-4
              p.mb-0 La viabilidad técnica analiza si la iniciativa puede ejecutarse con los recursos físicos, humanos, tecnológicos y organizacionales disponibles. Para ello, evalúa aspectos como la infraestructura necesaria, la disponibilidad de equipos y materiales, los conocimientos y competencias del talento humano, las tecnologías requeridas, el cumplimiento de la normatividad aplicable y la capacidad operativa para desarrollar las actividades propuestas. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/28.png')
      
      p.mb-5(data-aos='fade-right') Por su parte, la viabilidad económica determina si el proyecto es financieramente sostenible, mediante el análisis de los costos de implementación, los ingresos esperados, las fuentes de financiación, la rentabilidad, el flujo de recursos y la capacidad para mantenerse en el tiempo. En conjunto, estos análisis permiten reducir la incertidumbre y los riesgos asociados a la ejecución del proyecto, identificar posibles limitaciones antes de su implementación y facilitar la toma de decisiones estratégicas para seleccionar las alternativas más convenientes, sostenibles y acordes con las necesidades del territorio y de la comunidad.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Perfil de proyecto y metodología de construcción

      p.mb-5(data-aos='fade-right') El perfil de proyecto es un documento preliminar que describe una iniciativa y permite evaluar su pertinencia y factibilidad. A continuación, los componentes básicos del perfil de proyecto:
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/29.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-row
          .row.justify-content-center.mb-0.d-flex
            .col-6.br-1
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Nombre del proyecto.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Problema identificado. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Justificación. 
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Objetivos. 
            .col-6
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Beneficiarios.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Actividades.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Recursos requeridos.  
                li.d-flex
                  i.fas.fa-flag.color-acento-contenido
                  p.mb-0 Resultados esperados.  
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .cajon.color-primario.p-4.mb-0
              h4 Nota:
              p.mb-0 Constituye la base para la formulación y gestión de proyectos territoriales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fuentes de financiación y cooperación para proyectos territoriales
      p.mb-5(data-aos='fade-right') Los proyectos comunitarios pueden acceder a diferentes mecanismos de financiación y cooperación para apoyar su implementación.
      .row.justify-content-center.mb-5.bg-primario(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t3/30.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-3(src='@/assets/curso/temas/t3/31.svg')
          p.mb-3 Fuentes de financiación:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0  Entidades gubernamentales. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Fondos ambientales. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Cooperación internacional. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Organizaciones no gubernamentales. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Convocatorias públicas. 
              li.d-flex
                i.fas.fa-flag.color-acento-contenido
                p.mb-0 Empresas privadas con programas de responsabilidad social. 
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .cajon.color-secundario.p-4.mb-0
              h4 Nota:
              p.mb-0 el acceso a fuentes de financiación fortalece la capacidad de las comunidades para desarrollar iniciativas que contribuyan a la gobernanza ambiental y al desarrollo sostenible del territorio.














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
