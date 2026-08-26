<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión comunitaria fortalece la gobernanza ambiental mediante la participación ciudadana, el cumplimiento de la normativa y la construcción de acuerdos para el manejo sostenible del territorio. El diálogo, la concertación y la resolución pacífica de conflictos favorecen la cooperación entre comunidades e instituciones. Asimismo, la prospectiva territorial, la formulación de proyectos, el emprendimiento y la gestión del conocimiento permiten aprovechar las capacidades locales, conservar los recursos naturales y mejorar la calidad de vida. Estos procesos forman ciudadanos capaces de liderar iniciativas colectivas orientadas al desarrollo sostenible.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La gestión comunitaria integra la normatividad ambiental y los derechos territoriales con la participación ciudadana, la concertación y la resolución de conflictos. Asimismo, promueve la prospectiva territorial, el desarrollo local sostenible, la formulación de proyectos, la comunicación asertiva, el bienestar colectivo y la gestión del conocimiento para fortalecer la gobernanza ambiental y territorial. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
