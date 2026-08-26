export default {
  global: {
    Name: 'Gestión comunitaria, gobernanza ambiental y desarrollo territorial',
    Description: 'El componente formativo orienta el desarrollo de conocimientos y capacidades relacionadas con la gestión comunitaria, la participación ciudadana, la resolución de conflictos y la gobernanza ambiental del territorio. A través del análisis de la normatividad ambiental, los mecanismos de concertación, la prospectiva territorial, el desarrollo local sostenible, el emprendimiento comunitario y las estrategias de comunicación y gestión del conocimiento, se promueve la construcción colectiva de iniciativas orientadas al fortalecimiento organizativo, la participación social, el manejo sostenible de los recursos naturales y el desarrollo integral de las comunidades.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Normatividad ambiental y derechos territoriales",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Marco normativo ambiental colombiano",
          "hash": "t_1_1"
        },
        {
          "numero": "1.2",
          "titulo": "Normatividad para grupos étnicos, comunidades campesinas y territorios con protección especial",
          "hash": "t_1_2"
        },
        {
          "numero": "1.3",
          "titulo": "Políticas ambientales para la gestión territorial",
          "hash": "t_1_3"
        },
        {
          "numero": "1.4",
          "titulo": "Construcción de paz y gestión territorial",
          "hash": "t_1_4"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Participación ciudadana, concertación y resolución de conflictos territoriales",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "Mecanismos de participación ciudadana",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Democratización de la gestión pública",
          "hash": "t_2_2"
        },
        {
          "numero": "2.3",
          "titulo": "Diálogo, concertación y manejo de conflictos",
          "hash": "t_2_3"
        },
        {
          "numero": "2.4",
          "titulo": "Gobernanza colaborativa para la gestión ambiental",
          "hash": "t_2_4"
        }
      ]
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Prospectiva, desarrollo local y formulación de iniciativas territoriales",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "3.1",
          "titulo": "Prospectiva territorial",
          "hash": "t_3_1"
        },
        {
          "numero": "3.2",
          "titulo": "Identificación de oportunidades territoriales",
          "hash": "t_3_2"
        },
        {
          "numero": "3.3",
          "titulo": "Desarrollo local sostenible",
          "hash": "t_3_3"
        },
        {
          "numero": "3.4",
          "titulo": "Emprendimiento y formulación de proyectos",
          "hash": "t_3_4"
        }
      ]
    },
    {
      "nombreRuta": "tema4",
      "numero": "4",
      "titulo": "Comunicación, gestión del conocimiento y fortalecimiento comunitario",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "4.1",
          "titulo": "Comunicación asertiva para la gestión territorial",
          "hash": "t_4_1"
        },
        {
          "numero": "4.2",
          "titulo": "Bienestar común y autorregulación territorial",
          "hash": "t_4_2"
        },
        {
          "numero": "4.3",
          "titulo": "Redes de conocimiento",
          "hash": "t_4_3"
        },
        {
          "numero": "4.4",
          "titulo": "Espacios de intercambio de conocimientos",
          "hash": "t_4_4"
        }
      ]
    },
    {
      "nombreRuta": "tema5",
      "numero": "5",
      "titulo": "Formulación de estrategias para la gobernanza ambiental",
      "desarrolloContenidos": true,
      "subMenu": []
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Asociatividad',
      significado: 'estrategia mediante la cual personas, organizaciones o comunidades se unen voluntariamente para desarrollar proyectos, fortalecer capacidades y alcanzar objetivos comunes relacionados con el desarrollo territorial y la sostenibilidad.',
    },
    {
      termino: 'Concertación',
      significado: 'proceso de diálogo y negociación entre diferentes actores para construir acuerdos, resolver diferencias y tomar decisiones de manera participativa sobre asuntos de interés común.',
    },
    {
      termino: 'Consulta previa',
      significado: 'derecho fundamental de los pueblos y comunidades étnicas reconocidas a ser consultados mediante procedimientos apropiados antes de adoptar medidas o ejecutar proyectos que puedan afectar directamente sus territorios, cultura o derechos colectivos.',
    },
    {
      termino: 'Corresponsabilidad',
      significado: 'responsabilidad compartida entre instituciones, comunidades, organizaciones y demás actores del territorio, de acuerdo con sus competencias y capacidades, frente a la protección ambiental y el desarrollo sostenible.',
    },
    {
      termino: 'Desarrollo local sostenible',
      significado: 'proceso orientado a mejorar las condiciones económicas, sociales, culturales y ambientales de un territorio mediante el aprovechamiento responsable de sus recursos y la participación de la comunidad.',
    },
    {
      termino: 'Emprendimiento',
      significado: 'proceso de identificar oportunidades y desarrollar iniciativas innovadoras que generen valor económico, social o ambiental, contribuyendo al bienestar de la comunidad y al desarrollo territorial.',
    },
    {
      termino: 'Gestión del conocimiento',
      significado: 'proceso mediante el cual se genera, organiza, comparte y utiliza conocimiento para fortalecer capacidades, apoyar la toma de decisiones y contribuir al cumplimiento de objetivos individuales y colectivos.',
    },
    {
      termino: 'Gobernanza ambiental',
      significado: 'modelo de gestión basado en la participación y articulación entre instituciones, comunidades y demás actores sociales para la toma de decisiones relacionadas con el uso, conservación y manejo sostenible del territorio y los recursos naturales.',
    },
    {
      termino: 'Indicador',
      significado: 'medida cualitativa o cuantitativa que permite hacer seguimiento al avance de una acción, estrategia o proyecto y valorar el cumplimiento de los objetivos y resultados establecidos.',
    },
    {
      termino: 'Normatividad ambiental',
      significado: 'conjunto de normas, leyes, decretos y políticas que regulan la protección del ambiente, el uso sostenible de los recursos naturales y las responsabilidades de los diferentes actores frente a la gestión ambiental.',
    },
    {
      termino: 'Plan de acción',
      significado: 'instrumento de planificación que organiza las actividades necesarias para alcanzar uno o varios objetivos, definiendo responsables, recursos, tiempos, indicadores y mecanismos de seguimiento.',
    },
    {
      termino: 'Participación ciudadana',
      significado: 'derecho y mecanismo mediante el cual las personas intervienen en la toma de decisiones públicas, el control social y la gestión de asuntos relacionados con el desarrollo y la protección del territorio.',
    },
    {
      termino: 'Perfil de proyecto',
      significado: 'documento preliminar que describe de manera general una iniciativa, incluyendo el problema identificado, los objetivos, las actividades, los recursos requeridos y la viabilidad de su ejecución.',
    },
    {
      termino: 'Prospectiva territorial',
      significado: 'proceso de análisis y planificación que permite construir escenarios futuros para orientar la toma de decisiones y promover el desarrollo sostenible del territorio.',
    },
    {
      termino: 'Redes de conocimiento',
      significado: 'espacios de colaboración entre personas, organizaciones e instituciones que facilitan el intercambio de experiencias, saberes, información y buenas prácticas para fortalecer la gestión territorial y ambiental.',
    },
    {
      termino: 'Resolución de conflictos',
      significado: 'conjunto de estrategias y mecanismos orientados a gestionar desacuerdos de forma pacífica, mediante el diálogo, la negociación, la mediación y la construcción de consensos.',
    },
    {
      termino: 'Sina (sistema nacional ambiental)',
      significado: 'sistema conformado por orientaciones, normas, actividades, recursos, programas e instituciones que permiten implementar los principios generales ambientales y coordinar la gestión ambiental en colombia.',
    },
    {
      termino: 'Veeduría ciudadana',
      significado: 'mecanismo de participación mediante el cual los ciudadanos ejercen vigilancia y control sobre la gestión pública, con el propósito de garantizar la transparencia, la eficiencia y el adecuado uso de los recursos públicos.',
    },
  ],
  referencias: [
    {
      referencia: 'Agencia Nacional de Tierras. (2025). Plan de participación ciudadana 2025. Gobierno de Colombia.',
      link: 'https://www.ant.gov.co/sites/default/files/2025-04/documentos/archivos/plan-de-participacion-ciudadana-2025-ant.pdf',
    },
    {
      referencia: '',
      link: 'https://www.ant.gov.co/transparencia-y-acceso-a-la-informacion-publica/planeacion-presupuesto-e-informes/plan-de-accion/plan-de-participacion-ciudadana',
    },
    {
      referencia: 'Agencia de Renovación del Territorio. (2026). Estrategia de participación ciudadana 2026. Gobierno de Colombia.',
      link: 'https://www.renovacionterritorio.gov.co/sites/default/files/2026-02/Estrategia%20de%20Participaci%C3%B3n%20Ciudadana%202026.pdf',
    },
    {
      referencia: 'Asamblea Nacional Constituyente. (1991). Constitución Política de Colombia. Gaceta Constitucional No. 116, 20 de julio de 1991.',
    },
    {
      referencia: 'Gobierno Nacional de Colombia & Fuerzas Armadas Revolucionarias de Colombia-Ejército del Pueblo (FARC-EP). (2016). Acuerdo final para la terminación del conflicto y la construcción de una paz estable y duradera.',
    },
    {
      referencia: 'Ley 1454 de 2011. Por la cual se dictan normas orgánicas sobre ordenamiento territorial y se modifican otras disposiciones. 28 de junio de 2011. D.O. No. 48115.',
    },
    {
      referencia: 'Ley 388 de 1997. Por la cual se modifica la Ley 9 de 1989, y la Ley 2 de 1991 y se dictan otras disposiciones. 18 de julio de 1997. D.O. No. 43091.',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Ordenamiento Ambiental Territorial y Sistema Nacional Ambiental - SINA. Gobierno de Colombia.',
      link: 'https://www.minambiente.gov.co/ordenamiento-ambiental-territorial-y-sistema-nacional-ambiental-sina/',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política nacional de cambio climático. República de Colombia.',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos (PNGIBSE). República de Colombia.',
    },
    {
      referencia: 'Rodríguez, G. A. (2022). Fundamentos del derecho ambiental colombiano. Friedrich Ebert Stiftung y Foro Nacional Ambiental.',
      link: 'https://foronacionalambiental.org.co/wp-content/uploads/2023/03/FUNDAMENTOSDERECHOAMBIENTALCOLOMBIANO.pdf',
    },
    {
      referencia: 'Sistema Único de Información Normativa. (s. f.). Derecho ambiental en Colombia. Ministerio de Justicia y del Derecho.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
