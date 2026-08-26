<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    img.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/intro/1.png', alt='')
    p.mb-5 La gestión comunitaria y la gobernanza ambiental son fundamentales para promover el desarrollo sostenible, fortalecer la participación ciudadana y orientar la toma de decisiones hacia el bienestar colectivo. En este contexto, el conocimiento de la normatividad ambiental, los derechos territoriales y los mecanismos de participación permite a las comunidades intervenir activamente en la planificación del territorio, la conservación de los recursos naturales y la gestión del desarrollo local.


    .row.justify-content-center.mb-5.align-items-end
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-sm-12.col-lg-9
        .bg-color-1.px-5.py-4.mb-4
          p.mb-0 Ante los desafíos relacionados con el aprovechamiento sostenible de los recursos, la protección de los derechos colectivos y la resolución de conflictos socioambientales, es necesario fortalecer capacidades para el diálogo, la concertación y la construcción de acuerdos entre los actores territoriales. Asimismo, la comunicación asertiva, la asociatividad, el intercambio de conocimientos y la articulación entre comunidades, instituciones públicas y organizaciones sociales contribuyen al fortalecimiento del tejido social y al desarrollo de procesos de gestión inclusivos, transparentes y participativos.
        
        p.mb-0 Este componente formativo tiene como propósito desarrollar en el aprendiz capacidades para participar en procesos de gestión comunitaria, abordar conflictos socioambientales y plantear estrategias de gobernanza que contribuyan a la coordinación de campañas ambientales. Para ello, incorpora herramientas de prospectiva, emprendimiento comunitario, formulación de proyectos, concertación, comunicación y planificación de acciones, orientadas a fortalecer la organización comunitaria, la apropiación social del territorio y el desarrollo sostenible.


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
