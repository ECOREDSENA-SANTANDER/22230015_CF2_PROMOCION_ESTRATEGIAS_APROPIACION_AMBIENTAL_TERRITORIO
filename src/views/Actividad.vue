<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conocimientos adquiridos por el aprendiz sobre la normatividad ambiental, los derechos territoriales, los mecanismos de participación ciudadana, la gobernanza ambiental, la resolución de conflictos, la prospectiva territorial, el desarrollo local sostenible, el emprendimiento comunitario y la gestión del conocimiento, con el fin de fortalecer su capacidad para participar en procesos de gestión comunitaria y contribuir a la gobernanza ambiental y al desarrollo sostenible del territorio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes disposiciones refleja el enfoque ambiental de la Constitución Política de Colombia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente las actividades económicas del país.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la protección del ambiente y el aprovechamiento sostenible de los recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promover exclusivamente la explotación minera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la participación ciudadana en asuntos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 2,
          texto: '¿Qué significa la sigla SINA?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema Integral Nacional Agrario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema Nacional de Información Ambiental.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Sistema Nacional Ambiental.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Servicio Integrado Nacional Ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 3,
          texto: '¿Cuál es una función del Sistema Nacional Ambiental (SINA)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar el presupuesto nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Articular y coordinar la gestión ambiental entre los actores que integran el sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrar únicamente los parques nacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular exclusivamente la producción agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal del Sistema Nacional de Áreas Protegidas (SINAP)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la expansión urbana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar la biodiversidad y los ecosistemas estratégicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promover únicamente actividades industriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular el comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 5,
          texto: '¿Qué buscan las zonas de reserva campesina?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer únicamente la expansión urbana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la explotación minera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restringir toda actividad agrícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer la economía campesina y promover el desarrollo rural sostenible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 6,
          texto:
            '¿Qué derecho puede activarse cuando un proyecto que puede afectar directamente a un pueblo indígena?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derecho a recibir subsidios únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Derecho a la consulta previa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Derecho a decidir sobre el presupuesto nacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Derecho exclusivo a explotar recursos minerales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es uno de los objetivos de la Política Nacional de Educación Ambiental?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promover la conciencia ambiental y la participación ciudadana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el consumo de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las autoridades ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la educación rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 8,
          texto: '¿Cuál es la finalidad de la restitución de tierras?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover la expansión urbana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar los impuestos rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Restablecer los derechos de las personas despojadas de sus tierras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear nuevas áreas protegidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes corresponde a un mecanismo de participación ciudadana?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Licencia ambiental.', esCorrecta: false },
            { id: 'b', texto: 'Derecho de petición.', esCorrecta: true },
            { id: 'c', texto: 'Registro mercantil.', esCorrecta: false },
            { id: 'd', texto: 'Certificado catastral.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 10,
          texto: '¿Cuál es la función principal de una veeduría ciudadana?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Elaborar leyes nacionales.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Vigilar la gestión pública y el uso adecuado de los recursos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrar los municipios.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Recaudar impuestos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 11,
          texto: 'La concertación territorial consiste en:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer decisiones sin participación ciudadana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolver conflictos únicamente por vía judicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delegar todas las decisiones a las autoridades nacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Construir acuerdos entre diferentes actores mediante el diálogo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es uno de los beneficios de la gobernanza colaborativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la cooperación entre instituciones y comunidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centralizar todas las decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las organizaciones sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 13,
          texto: '¿Qué es la prospectiva territorial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El estudio exclusivo de los recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una metodología para elaborar catastros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un proceso para analizar escenarios futuros y orientar el desarrollo del territorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un inventario de especies silvestres.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes descripciones corresponde a un escenario tendencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El territorio ideal construido colectivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La proyección del futuro basada en las tendencias actuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El escenario imposible de alcanzar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El análisis histórico del territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 15,
          texto: '¿Qué busca el desarrollo local sostenible?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la producción económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Equilibrar el crecimiento económico, el bienestar social y la conservación ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir las políticas ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecer únicamente el desarrollo urbano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 16,
          texto:
            '¿Qué aspecto se evalúa en la viabilidad económica de un proyecto?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos, ingresos y sostenibilidad financiera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La biodiversidad presente en el territorio.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La historia del municipio.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Las condiciones climáticas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 17,
          texto: 'La comunicación asertiva se caracteriza por:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar ideas con respeto, claridad y escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar toda forma de diálogo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicar únicamente por medios escritos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imponer opiniones sin escuchar a los demás.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 18,
          texto: '¿Cuál es un beneficio de la autorregulación territorial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los conflictos comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la organización comunitaria y el cumplimiento de acuerdos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la participación ciudadana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el trabajo colaborativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 19,
          texto: '¿Qué caracteriza a una red de conocimiento?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El intercambio de información exclusivamente entre entidades públicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La competencia entre organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La participación limitada a expertos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La colaboración, el aprendizaje colectivo y el intercambio de experiencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito principal de los espacios de intercambio de conocimientos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la educación formal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Centralizar la toma de decisiones en una sola institución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compartir experiencias, fortalecer capacidades y promover el aprendizaje colaborativo para la gestión territorial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la gestión comunitaria, resolución de conflictos y desarrollo territorial sostenible.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
