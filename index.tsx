import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * --------------------------------------------------------------------------
 * DATA STRUCTURE (DATA DRIVEN)
 * --------------------------------------------------------------------------
 */
const GHA_DATA = {
    general: {
        name: "Grupo Herpetológico de Antioquia",
        acronym: "GHA",
        email: "contacto@gha-antioquia.org",
        location: "Universidad de Antioquia, Medellín, Colombia",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#"
        }
    },
    about_us: {
        history: "El Grupo Herpetológico de Antioquia (GHA) nació en 1997 en la Universidad de Antioquia, bajo el liderazgo de la profesora Vivian P. Páez y el impulso de un grupo de estudiantes interesados en caracterizar la fauna de anfibios y reptiles de la región. Desde sus inicios, el grupo se propuso desarrollar investigaciones sistemáticas sobre la herpetofauna de Antioquia y áreas cercanas, dando origen al Museo Herpetológico de Antioquia (MHUA), hoy reconocido como un referente nacional.\n\nA lo largo de su desarrollo, el GHA amplió progresivamente su misión y alcance, consolidándose como uno de los grupos de investigación más productivos en herpetología en Colombia. El MHUA se convirtió en un pilar fundamental del grupo, albergando una extensa colección de ejemplares que sirve como recurso para estudiantes e investigadores nacionales e internacionales y como centro de referencia científica.\n\nEl impacto del GHA se refleja en su liderazgo en publicaciones científicas, con numerosos artículos en revistas indexadas internacionales, y en la diversidad de áreas de investigación que abordan la taxonomía, ecología, genética, morfología y conservación de anfibios y reptiles. En conjunto, el GHA ha pasado de ser una iniciativa estudiantil a consolidarse como un referente nacional e internacional en el estudio y conservación de la herpetofauna, gracias a su trabajo sostenido, su compromiso con la formación académica y la creación de un museo científico de alto valor para el país.\n\nEn años recientes, y en coherencia con tendencias internacionales y necesidades de monitoreo en ecosistemas transformados, el grupo incorporó y consolidó un componente de bioacústica y ecoacústica como enfoque complementario y estratégico. Este avance ha permitido caracterizar señales acústicas (especialmente cantos de anuros), fortalecer repositorios de datos sonoros, desarrollar herramientas tecnológicas y de inteligencia artificial para detección y clasificación automática, e integrar la información acústica con modelos ecológicos y de paisaje para apoyar procesos de monitoreo, evaluación ambiental y conservación.",
        objectives: "El Grupo Herpetológico de Antioquia (GHA) tiene como propósito central formar e incentivar una línea de investigación en herpetología con carácter profesional, competente tanto a nivel nacional como internacional, orientada al desarrollo de estudios básicos y aplicados sobre la biología y conservación de anfibios y reptiles, con énfasis en Antioquia y Colombia. En coherencia con este objetivo general, el grupo busca formar estudiantes de pregrado y posgrado en el área de la herpetología, contribuyendo al fortalecimiento del relevo generacional y de las capacidades científicas del país. Asimismo, el GHA se propone fortalecer de manera permanente la Colección del Museo de Herpetología de la Universidad de Antioquia (MHUA), fomentar el desarrollo tecnológico para el estudio de la fauna y producir conocimiento científico útil y pertinente para la conservación y el manejo de la biodiversidad.\n\nEstos objetivos se articulan de manera directa con la agenda de trabajo del grupo y con las líneas de investigación definidas, integrando formación académica, investigación científica, desarrollo tecnológico y aplicación del conocimiento en contextos de conservación.",
        work_agenda: "En el corto y mediano plazo, el GHA desarrolla una agenda de trabajo estructurada en varios ejes estratégicos. Uno de los principales es la consolidación científica y tecnológica del enfoque ecoacústico, mediante el fortalecimiento de las líneas de bioacústica y ecoacústica. Esto incluye la expansión del banco de datos acústicos, el mejoramiento de herramientas de inteligencia artificial para la detección y clasificación automática de señales, y la integración de información sonora con modelos ecológicos y de paisaje. Se prioriza la generación de repositorios estandarizados y la participación activa en redes regionales de ecoacústica.\n\nOtro eje fundamental es el reforzamiento del Museo de Herpetología de la Universidad de Antioquia (MHUA), a través de la ampliación y curaduría de las colecciones científicas, la digitalización de especímenes, el mejoramiento de la infraestructura de conservación y el fortalecimiento de las prácticas de documentación taxonómica mediante herramientas morfológicas, moleculares y acústicas. Este trabajo contribuye a la actualización del inventario biológico de Antioquia y a la documentación de nuevas especies, en coherencia con las líneas de ecología de anfibios, conservación de reptiles y filogenética molecular.\n\nDe manera complementaria, el grupo avanza en el fortalecimiento de programas de monitoreo poblacional de anfibios y reptiles, desarrollando protocolos estandarizados en sitios priorizados que permitan construir series de tiempo robustas para evaluar fluctuaciones demográficas, impactos antrópicos y respuestas poblacionales. Estos programas integran modelos de ocupación, análisis de historia de vida y variables ambientales, en el marco de la línea de monitoreo de herpetofauna.\n\nFinalmente, el GHA impulsa la gestión de proyectos estratégicos y la consolidación de capacidades internas, promoviendo iniciativas interdisciplinarias asociadas a biogeografía, genética de poblaciones, historia de vida, bioacústica y conservación adaptativa. Paralelamente, se fortalecen las capacidades internas mediante la formación de estudiantes, la oferta de cursos especializados, seminarios permanentes y la vinculación de nuevos investigadores jóvenes.\n\nEn el largo plazo (5 a 10 años), el grupo proyecta su posicionamiento nacional como referente en investigación herpetológica, consolidándose como líder en sistemática, ecología, genética y conservación de anfibios y reptiles en Colombia. Esta proyección incluye el incremento de la producción científica de alto impacto, la formación de talento humano altamente especializado y una mayor incidencia en políticas públicas ambientales y de conservación, en consonancia con lo planteado en el GrupLAC.\n\nAdicionalmente, el GHA busca consolidar redes internacionales de cooperación científica con universidades y centros de investigación de América Latina, Norteamérica y Europa, con el fin de impulsar estudios comparativos en filogenia, biogeografía neotropical, ecoacústica y otras áreas estratégicas. Se prioriza la co-dirección de tesis, el desarrollo de cursos internacionales y la formulación de proyectos colaborativos que superen las barreras actuales en permisos e intercambio científico.\n\nOtro objetivo a largo plazo es el desarrollo de repositorios abiertos y de infraestructura digital, que permitan alojar datos morfológicos, acústicos, genéticos y demográficos de herpetofauna bajo estándares FAIR. Estos repositorios aportarán tanto al MHUA como a plataformas nacionales (SiB Colombia, Instituto Humboldt) y, eventualmente, a redes globales de datos de biodiversidad.\n\nFinalmente, el grupo aspira a fortalecer su incidencia en conservación y manejo adaptativo, generando insumos técnicos y científicos para planes de manejo, políticas públicas y estrategias de conservación de especies amenazadas, incluyendo tortugas de importancia económica, reptiles sensibles y especies de anfibios vulnerables al cambio climático, enfermedades emergentes y transformación del paisaje.",
        research_lines_summary: "El trabajo del Grupo Herpetológico de Antioquia se orienta a través de diversas líneas de investigación articuladas entre sí.\n\nLa línea de Bioacústica y Ecoacústica: desarrolla y aplica herramientas acústicas para el estudio de la biodiversidad, con énfasis en anfibios y reptiles, incluyendo la caracterización de señales acústicas, el uso de índices ecoacústicos, la implementación de técnicas de inteligencia artificial para clasificación automática y la evaluación de patrones espaciales y temporales del paisaje sonoro. Esta línea contribuye tanto a la documentación taxonómica, especialmente de cantos de anuros, como al desarrollo de tecnologías de monitoreo ecológico basadas en sonido.\n\nLa línea de Ecología de Anfibios: comprende estudios sobre historia natural, dinámica poblacional, selección de hábitat, estrategias reproductivas y variación espacial y temporal de poblaciones. Incluye inventarios regionales, descripciones taxonómicas y estudios demográficos de largo plazo, así como análisis de los efectos de condiciones ambientales y presiones antrópicas sobre la distribución y abundancia de las especies.\n\nLa línea de Ecología y Conservación de Reptiles: aborda aspectos ecológicos, demográficos y de conservación de tortugas, lagartos y serpientes, centrándose en el uso del hábitat, movimientos, historia de vida, impactos antrópicos y estrategias de conservación adaptativa. Esta línea apoya procesos de manejo, planes de conservación y evaluaciones de riesgo para reptiles continentales y de importancia económica.\n\nLa línea de Filogenética Molecular y Biogeografía Neotropical: integra datos moleculares, morfológicos y bioacústicos para reconstruir relaciones evolutivas, evaluar procesos de diversificación y comprender patrones biogeográficos de la herpetofauna andina, amazónica y caribeña, contribuyendo a la sistemática y a la descripción de nuevas especies.\n\nLa línea de Genética de Poblaciones de Anfibios y Reptiles se enfoca en el análisis de la estructura genética, conectividad poblacional, flujo génico y variación intraespecífica, incluyendo estudios sobre determinación sexual, adaptación al cambio climático y evaluación de viabilidad poblacional para la toma de decisiones en conservación.\n\nLa línea de Historia de Vida de Tortugas incluye investigaciones sobre reproducción, crecimiento, supervivencia, determinación sexual, movimientos estacionales y dinámica poblacional, orientadas a comprender los factores ecológicos que moldean sus estrategias de vida y a desarrollar acciones de conservación basadas en modelos poblacionales y datos de largo plazo.\n\nFinalmente, la línea de Monitoreo de Anfibios y Reptiles: implementa protocolos estandarizados para el seguimiento temporal y espacial de poblaciones, integrando herramientas morfológicas, moleculares y acústicas, con el fin de detectar fluctuaciones demográficas, evaluar estados de conservación y analizar respuestas a presiones antropogénicas.",
        group_dynamics: "La dinámica de trabajo del GHA se estructura a partir de diversas actividades complementarias. El grupo realiza reuniones semanales de seguimiento académico y administrativo, en las que se presentan avances de investigación, se discuten resultados, se revisan planes de trabajo y se coordinan actividades de campo, laboratorio, docencia y curaduría del MHUA.\n\nDe manera periódica, se desarrollan salidas de campo para inventarios y monitoreo de anfibios y reptiles en diferentes localidades de Antioquia y regiones cercanas, con el objetivo de recolectar datos ecológicos y acústicos y fortalecer los programas de monitoreo a largo plazo. Estas actividades se complementan con el procesamiento continuo de muestras, datos moleculares y materiales de colección en laboratorio y en el MHUA, incluyendo análisis genéticos, curaduría, actualización de bases de datos y digitalización de registros.\n\nEl grupo también desarrolla y valida herramientas bioacústicas y ecoacústicas para el análisis acústico, la extracción de índices y el procesamiento masivo de datos, apoyando tanto la investigación como el monitoreo. La formación de estudiantes de pregrado y posgrado es una actividad central, mediante la dirección de trabajos de grado, tesis, seminarios, cursos internos y acompañamiento académico permanente.\n\nAsimismo, el GHA promueve la socialización de resultados y la producción académica a través de la participación en congresos y simposios, la elaboración de artículos científicos, informes técnicos, guías metodológicas y actividades de divulgación dirigidas a comunidades locales, instituciones ambientales y la universidad. Finalmente, el grupo impulsa la gestión colaborativa y la formulación de proyectos interinstitucionales, fortaleciendo redes nacionales e internacionales para financiamiento, intercambio académico, movilidad estudiantil y consolidación de repositorios de datos.",
        conflict_resolution: "El Grupo Herpetológico de Antioquia adopta un enfoque de resolución de conflictos centrado en el diálogo directo, la escucha activa y la restauración de las relaciones, de acuerdo con los principios institucionales de la Universidad de Antioquia y los lineamientos de la Unidad para la Resolución de Conflictos (URC). El conflicto es entendido como una oportunidad para fortalecer la convivencia, mejorar las dinámicas internas y promover ambientes de trabajo respetuosos, inclusivos y orientados al bienestar colectivo, bajo los principios de dignidad humana, buen trato, participación democrática y rigor científico.\n\nAnte la aparición de desacuerdos, se prioriza el diálogo directo entre las partes en un espacio privado, seguro y respetuoso, siguiendo prácticas de comunicación asertiva y empatía. Si este primer acercamiento no permite llegar a un acuerdo, el caso será remitido al coordinador del grupo, quien facilitará una conversación estructurada para identificar hechos, percepciones y posibles soluciones, evitando la escalada de tensiones y respetando el marco normativo universitario.\n\nEn situaciones en las que el conflicto persista o exceda la capacidad de manejo interno, se recurrirá a las instancias universitarias correspondientes, como la Unidad para la Resolución de Conflictos, el Comité de Convivencia Laboral o la Unidad de Asuntos Disciplinarios, garantizando el debido proceso, la proporcionalidad de las intervenciones y la continuidad de los proyectos y compromisos institucionales. El grupo promueve un liderazgo restaurativo, orientado a soluciones colaborativas y al fortalecimiento de una cultura interna de corresponsabilidad y convivencia positiva."
    },
    statutes: {
        summary: "Nuestros estatutos rigen el comportamiento ético, los procesos de admisión de nuevos miembros y la estructura democrática del grupo.",
        link: "#"
    },
    members: {
        direction: [
            { 
                id: 'd1', 
                name: "Juan Manuel Daza Rojas", 
                role: "Director", 
                photo: "juan_daza.jpg", 
                bio: "Profesor del Instituto de Biología. Experto en sistemática, filogeografía y evolución de anfibios y reptiles neotropicales.",
                education: "PhD, University of Florida (2010)",
                areas: ["Phylogenetics", "Biogeography", "Systematics", "Herpetology", "Ecoacoustics"],
                profile_desc: "Vinculado al grupo desde 1997, Juan Manuel cofundó y coordinó el Museo de Herpetología Universidad de Antioquia (MHUA). Tras doctorarse en biología, se ha destacado por sus estudios en ecoacústica, filogenética molecular y taxonomía, colectando más de 700,000 archivos de sonido que hoy enriquecen el compendio natural de la Alma Máter. En 2019 descubrió, junto a sus estudiantes, el primer género de reptiles endémicos de Colombia (Magdalenasaura), además de describir numerosas especies nuevas de ranas y lagartos. Actualmente, centra sus estudios en el género Pholidobolus y se desempeña como curador de la Colección de Ciencias Naturales del Museo Universitario (MUUA).",
                google_scholar: "https://scholar.google.com/citations?hl=es&user=Fpc3D0UAAAAJ&view_op=list_works&sortby=pubdate",
                publications: [
                    { year: 2025, title: "Detecting labeling errors in bioacoustics through dimensionality reduction and clustering techniques", journal: "Ecological Informatics 92, 103484" },
                    { year: 2025, title: "The colorful giants: Revisiting the systematics of the Anolis latifrons series", journal: "Vertebrate Zoology 75, 441-457" },
                    { year: 2025, title: "A workflow to optimize spatial sampling in ecoacoustic studies", journal: "VM Martinez-Arias, C Paniagua-Villada et al." },
                    { year: 2025, title: "Letting ecosystems speak for themselves: An unsupervised methodology for mapping landscape acoustic heterogeneity", journal: "Environmental Modelling & Software 187, 106373" },
                    { year: 2025, title: "A new species of hedgehog-lizard of the genus Echinosaura from Colombia and Panama", journal: "Zootaxa 5583 (1), 128-142" },
                    { year: 2025, title: "A roadmap for harlequin frog systematics, with a partial revision of Amazonian species related to Atelopus spumarius", journal: "Zootaxa 5571 (1), 1-76" },
                    { year: 2024, title: "Setting-Up the Audiomoth Recorder for Wildlife Monitoring in the Rainforest", journal: "Workshop on Engineering Applications, 200-212" },
                    { year: 2024, title: "Phylogeography of the Colombian water snake Helicops danieli", journal: "Helicops..." },
                    { year: 2024, title: "Ecoacoustic bank: A software for ecoacoustics data management", journal: "SoftwareX 27, 101822" },
                    { year: 2024, title: "Quantifying and mitigating recorder-induced variability in ecological acoustic indices", journal: "Ecological Informatics 82, 102668" }
                ]
            },
            { 
                id: 'd2', 
                name: "Mauricio Rivera-Correa", 
                role: "Codirector", 
                photo: "mauricio_correa.jpg", 
                bio: "Profesor Asistente del Instituto de Biología. Investigador enfocado en sistemática filogenética, taxonomía y bioacústica de anfibios.",
                education: "Assistant Professor, Instituto de Biología, UdeA",
                areas: ["Phylogenetic Systematics", "Amphibians", "Bioacoustics", "Taxonomy", "Evolutionary Biology"],
                profile_desc: "Mauricio Rivera-Correa se desempeña como Profesor Asistente en el Instituto de Biología de la Universidad de Antioquia. Su línea de investigación principal abarca la sistemática filogenética, la taxonomía integrativa y la bioacústica de anfibios neotropicales. Ha liderado estudios cruciales sobre la evolución de historias de vida y diversificación en grupos como Dendropsophus y Hyloscirtus, además de investigar la crisis de extinción de los anfibios, documentando declives poblacionales en especies vulnerables como los sapos arlequín (Atelopus).",
                google_scholar: "https://scholar.google.com/citations?hl=es&user=tAJ3TjYAAAAJ&view_op=list_works&sortby=pubdate",
                publications: [
                    { year: 2025, title: "Allometric constraint predominates over the acoustic adaptation hypothesis in a radiation of Neotropical treefrogs", journal: "Integrative Zoology 20 (4), 763-773" },
                    { year: 2025, title: "Phylogenetics, biogeography, and life history evolution in the broadly distributed treefrog genus Dendropsophus", journal: "Molecular Phylogenetics and Evolution 204, 108275" },
                    { year: 2024, title: "Fenología acústica del ensamble de anuros en charcas estacionales de las tierras bajas del Magdalena, Colombia", journal: "" },
                    { year: 2024, title: "Forty years later: a new Andean stream treefrog of the genus Hyloscirtus (Anura: Hylidae) from Ecuador", journal: "Zootaxa 5474 (2), 101-126" },
                    { year: 2023, title: "Ongoing harlequin toad declines suggest the amphibian extinction crisis is still an emergency", journal: "Communications Earth & Environment 4 (1), 412" },
                    { year: 2023, title: "The significance of hypervariability and conserved motifs in antimicrobial peptides from tree frogs", journal: "Journal of Natural Products 86 (7), 1761-1769" },
                    { year: 2023, title: "Tic, Tii and Trii calls: advertisement call descriptions for eight glass frogs from Colombia", journal: "Bioacoustics 32 (2), 143-180" },
                    { year: 2022, title: "Ranas de cristal", journal: "Academia Colombiana de Ciencias Exactas, Físicas y Naturales" },
                    { year: 2022, title: "Genetic diversity, acoustic signal and geographic distribution of a colourful rain frog of the genus Pristimantis", journal: "Herpetology Notes 15, 215-227" },
                    { year: 2021, title: "Cantos de las ranas y los sapos de Colombia: estado actual del conocimiento y perspectivas de investigación en ecoacústica", journal: "Neotropical Biodiversity 7 (1), 352–365" }
                ]
            }
        ],
        admin: [
            { 
                id: 'a1', 
                name: "Ana Londoño", 
                role: "Asistente de Curaduría", 
                photo: "ana_londono.jpg", 
                bio: "Estudiante de Biología. Actualmente en la línea de investigación de Sistemática y taxonomía. Asistente de Curaduría del Museo de Herpetología Universidad de Antioquia.", 
                profile_desc: "Estudiante de Biología. Actualmente en la línea de investigación de Sistemática y taxonomía. Asistente de Curaduría del Museo de Herpetología Universidad de Antioquia.",
                link_cv: "#" 
            }
        ],
        emeritus: [
            { 
                id: 'e1', 
                name: "Vivian Páez", 
                role: "Investigadora Emérita", 
                photo: "vivian_paez.jpg", 
                bio: "Fundadora del grupo. Distinguida como Profesora Emérita por su legado en la conservación de tortugas continentales y ecología de poblaciones.", 
                education: "PhD, Ohio University",
                areas: ["Population Ecology", "Herpetology", "Conservation Biology", "Turtles"],
                google_scholar: "https://scholar.google.com/citations?hl=es&user=ov0ddhYAAAAJ&view_op=list_works&authuser=2&sortby=pubdate",
                profile_desc: "Reconocida como Profesora Emérita de la Universidad de Antioquia, Vivian Páez ha dedicado más de 26 años a la docencia y la investigación, siendo pilar fundamental en la fundación y consolidación del Laboratorio y Museo de Herpetología. Conocida como la 'guardiana de las tortugas', su trayectoria académica incluye un doctorado en la Universidad de Ohio y estancias en el Smithsonian Institution. Su investigación se centra en la ecología de poblaciones y la conservación de tortugas continentales, labor por la cual ha recibido galardones internacionales de prestigio como el Andrew Sabin Conservation Prize (2013) y el Premio de Conservación de Tortugas Behler (2022). Ha publicado 11 libros y cerca de 70 artículos científicos, enfocando sus esfuerzos recientes en especies amenazadas como Podocnemis lewyana.",
                publications: [
                    { year: 2025, title: "Life history characteristics of the Colombian Wood Turtle, Rhinoclemmys melanosterna (Gray, 1861), in the middle Magdalena River, Colombia", journal: "Herpetology Notes 18, 921–930" },
                    { year: 2025, title: "Estudio poblacional de la tortuga morrocoy de patas rojas (Chelonoidis carbonarius) en áreas con tipos de manejo del paisaje contrastantes en Colombia", journal: "" },
                    { year: 2024, title: "Lessons learned during a 12-year monitoring project with the endangered Magdalena River turtle (Podocnemis lewyana)", journal: "Environmental Monitoring and Assessment 196 (9), 862" },
                    { year: 2023, title: "An Approximation of the Sex Determination Parameters in the Savanna Side-Necked Turtle Podocnemis vogli", journal: "Chelonian Conservation and Biology" },
                    { year: 2022, title: "Turtles of Colombia: an annotated analysis of their diversity, distribution, and conservation status", journal: "Amphibian & Reptile Conservation 16 (1), 106-135" },
                    { year: 2021, title: "Risk of nest flooding in a population of the Magdalena River turtle (Podocnemis lewyana) inhabiting the climatic equator", journal: "" },
                    { year: 2021, title: "Embryo Development and Sex Ratios in the Red-Footed Tortoise (Chelonoidis carbonarius) at Masculinizing Temperatures", journal: "Chelonian Conservation and Biology" },
                    { year: 2020, title: "Demography and habitat use of Caiman crocodilus in two contrasting channels in the middle Magdalena River drainage, Colombia", journal: "Herpetological Conservation and Biology 15 (1), 49-60" },
                    { year: 2020, title: "Linear Home Range and Seasonal Movements of Podocnemis lewyana in the Magdalena River, Colombia", journal: "Copeia 108 (1), 29-38" },
                    { year: 2016, title: "V. Biología y conservación de las tortugas continentales de Colombia", journal: "Serie Recursos Hidrobiológicos y Pesqueros Continentales" }
                ]
            },
            { 
                id: 'e2', 
                name: "Brian Bock", 
                role: "Investigador Emérito", 
                photo: "brian_bock.jpg", 
                bio: "Profesor jubilado. Estudia comportamiento, ecología, demografía y genética de poblaciones de reptiles y otras especies.", 
                education: "PhD in Zoology",
                areas: ["Zoology", "Evolutionary Biology", "Population Genetics", "Herpetology", "Animal Behavior"],
                profile_desc: "Brian Bock es Ph.D. y Profesor Jubilado del Instituto de Biología de la Universidad de Antioquia. Con una destacada carrera en Zoología y Biología Evolutiva, su investigación se ha centrado en desentrañar aspectos clave del comportamiento, la ecología, la demografía y la genética de poblaciones de la herpetofauna neotropical. Ha realizado aportes significativos al conocimiento de la biología de la iguana verde (Iguana iguana) y diversas especies de tortugas continentales, contribuyendo activamente a su conservación.",
                google_scholar: "https://www.researchgate.net/profile/Brian-Bock-3", 
                publications: [
                    { year: 2025, title: "Life history characteristics of the Colombian Wood Turtle, Rhinoclemmys melanosterna, in the middle Magdalena River", journal: "Herpetology Notes" },
                    { year: 2024, title: "Lessons learned during a 12-year monitoring project with the endangered Magdalena River turtle (Podocnemis lewyana)", journal: "Environmental Monitoring and Assessment" },
                    { year: 2024, title: "An Approximation of the Sex Determination Parameters in the Savanna Side-Necked Turtle Podocnemis vogli", journal: "Chelonian Conservation and Biology" },
                    { year: 2022, title: "Turtles of Colombia: an annotated analysis of their diversity, distribution, and conservation status", journal: "Amphibian & Reptile Conservation" },
                    { year: 2021, title: "Risk of Nest Flooding in a Population of the Magdalena River Turtle Inhabiting the Climatic Equator", journal: "Journal of Herpetology" },
                    { year: 2021, title: "Current and Historical Genetic Structure of the White-Footed Tamarin (Saguinus leucopus)", journal: "Chapter" },
                    { year: 2020, title: "Demography and Habitat Use of Caiman crocodilus in two Contrasting Channels in the Middle Magdalena River", journal: "Herpetological Conservation and Biology" },
                    { year: 2020, title: "Linear Home Range and Seasonal Movements of Podocnemis lewyana in the Magdalena River, Colombia", journal: "Copeia" },
                    { year: 2018, title: "Iguana iguana. The IUCN Red List of Threatened Species", journal: "Technical Report" },
                    { year: 2017, title: "Meta-análisis de la historia del estudio de las tortugas continentales de Colombia", journal: "Acta Biológica Colombiana" }
                ]
            }
        ],
        associates: [
            { id: 'as1', name: "Carlos Marín", role: "Investigador Asociado", photo: "carlos_marin.jpg", bio: "Especialista en bioacústica y taxonomía de anfibios.", link_cv: "#" },
            { 
                id: 'as2', 
                name: "Johana Pérez-Mira", 
                role: "Investigadora Asociada", 
                photo: "johana_perez.jpg", 
                bio: "Bióloga (UdeA). Herpetóloga consultora con énfasis en conservación de tortugas y parasitología de anfibios.", 
                education: "Bióloga, Universidad de Antioquia (2024)",
                areas: ["Turtle Conservation", "Herpetology", "Parasitology", "Environmental Consulting"],
                profile_desc: "Bióloga graduada de la Universidad de Antioquia. Se desempeña como herpetóloga independiente y consultora ambiental, con experiencia en el manejo de fauna silvestre. Su trayectoria investigativa abarca la conservación y monitoreo de tortugas marinas y continentales (destacando su labor en COPROT, Costa Rica), así como el estudio de ectoparásitos en anfibios. Ha participado como Joven Investigadora en el laboratorio de genética animal.",
                publications: [
                    { year: 2024, title: "An Approximation of the Sex Determination Parameters in the Savanna Side-Necked Turtle Podocnemis vogli (Podocnemididae)", journal: "Chelonian Conservation and Biology" }
                ]
            },
            { id: 'as3', name: "Viviana Maria Cartagena", role: "Investigadora Asociada", photo: "viviana_cartagena.jpg", bio: "Experta en educación ambiental y conservación comunitaria.", link_cv: "#" },
            { 
                id: 'as4', 
                name: "Camilo Sánchez Giraldo", 
                role: "Investigador Asociado", 
                photo: "camilo_sanchez.jpg", 
                bio: "Primer graduado de Doctorado en Biología del GHA. Especialista en ecoacústica y monitoreo de biodiversidad mediante paisajes sonoros.", 
                education: "Ph.D. en Biología, Universidad de Antioquia",
                areas: ["Ecoacoustics", "Soundscape Ecology", "Machine Learning", "Biodiversity Monitoring"],
                profile_desc: "Camilo Sánchez Giraldo es un hito para el Grupo Herpetológico de Antioquia al convertirse en su primer graduado del Doctorado en Biología. Su tesis doctoral se enfocó en la ecoacústica, desarrollando metodologías innovadoras no supervisadas para mapear la heterogeneidad acústica del paisaje y utilizar el sonido ambiental como un espejo de la integridad ecológica. Su trabajo combina ecología, tecnología y aprendizaje automático para entender cómo los paisajes transformados afectan la comunicación animal y la biodiversidad.",
                google_scholar: "https://www.researchgate.net/profile/Camilo-Sanchez-Giraldo/research",
                publications: [
                    { year: 2025, title: "Graphical representation of landscape heterogeneity identification through unsupervised acoustic analysis", journal: "Methods in Ecology and Evolution" },
                    { year: 2025, title: "Letting ecosystems speak for themselves: An unsupervised methodology for mapping landscape acoustic heterogeneity", journal: "Environmental Modelling & Software" },
                    { year: 2024, title: "Quantifying and mitigating recorder-induced variability in ecological acoustic indices", journal: "Ecological Informatics" },
                    { year: 2024, title: "Soundscape Characterization Using Autoencoders and Unsupervised Learning", journal: "Sensors" },
                    { year: 2022, title: "Hábitat y espectro acústico como factores determinantes de la ocupación de anuros neotropicales", journal: "Biota Colombiana" },
                    { year: 2021, title: "Environmental sound as a mirror of landscape ecological integrity in monitoring programs", journal: "Perspectives in Ecology and Conservation" },
                    { year: 2020, title: "Ecoacoustics in the rain: understanding acoustic indices under the most common geophonic source in tropical rainforests", journal: "Remote Sensing in Ecology and Conservation" }
                ]
            },
            { id: 'as5', name: "Mateo Rivera", role: "Investigador Asociado", photo: "mateo_rivera.jpg", bio: "Ecología de comunidades de anfibios de alta montaña.", link_cv: "#" },
            { id: 'as6', name: "Santiago Varela", role: "Investigador Asociado", photo: "santiago_varela.jpg", bio: "Investigación en historia natural y distribución de reptiles.", link_cv: "#" }
        ],
        postgrad: [
            { 
                id: 'pg1', 
                name: "Víctor M. Martínez-Arias", 
                role: "Estudiante Doctorado", 
                photo: "victor_martinez.jpg", 
                bio: "Biólogo, MSc. y candidato a Doctor en Biología. Experto en ecoacústica, ecología espacial y conservación.", 
                education: "Biólogo (UdeA), MSc. Bosques y Conservación (UNAL), PhD Student (UdeA)",
                areas: ["Ecoacoustics", "Landscape Ecology", "GIS", "Mammalogy", "Conservation"],
                profile_desc: "Biólogo, MSc. y candidato a Doctor en Biología, con experiencia en ecoacústica, ecología espacial y del paisaje, mastozología, biología de la conservación y ecología animal. Especializado en la recolección, procesamiento y análisis de datos, incluyendo estadística multivariada y espacial, así como en el manejo, adquisición y producción de datos SIG y el análisis de conectividad ecológica. Posee habilidades en manejo de bases de datos, escritura científica y coordinación de equipos de trabajo.",
                google_scholar: "https://scholar.google.com/citations?user=wfx4nqIAAAAJ&hl=es&authuser=2",
                website: "https://vmartinezarias.github.io/Victor_Martinez-Arias/",
                orcid: "https://orcid.org/0000-0002-3328-130X",
                publications: [
                    { year: 2026, title: "Echolocation Pulses of the Endemic Bat Saccopteryx antioquensis (Emballonuridae) in Antioquia, Colombia", journal: "Journal article" },
                    { year: 2025, title: "A workflow to optimize spatial sampling in ecoacoustic studies", journal: "Research Square (Preprint)" },
                    { year: 2025, title: "Letting ecosystems speak for themselves: An unsupervised methodology for mapping landscape acoustic heterogeneity", journal: "Environmental Modelling & Software" },
                    { year: 2025, title: "What is essential is invisible to the eyes: a conservation approach for poison frogs (Dendrobatidae)", journal: "Biodiversity and Conservation" },
                    { year: 2024, title: "Built vs. Green cover: an unequal struggle for urban space in Medellín (Colombia)", journal: "Urban Ecosystems" },
                    { year: 2024, title: "Living on the EDGE: From the evolutionary uniqueness to the conservation status of the Colombian elapids", journal: "The Herpetological Journal" }
                ]
            },
            { 
                id: 'pg2', 
                name: "Carolina Paniagua-Villada", 
                role: "Estudiante Maestría", 
                photo: "carolina_paniagua.jpg", 
                bio: "Ingeniera ambiental (UNAL). Investigadora en ecoacústica, ecología del paisaje y análisis espacial (SIG).", 
                education: "Ingeniera Ambiental (UNAL), Maestría en Biología (En curso)",
                areas: ["Landscape Ecology", "Ecoacoustics", "GIS", "Urban Ecosystems"],
                profile_desc: "Ingeniera Ambiental de la UNAL y estudiante de Maestría en Biología. Su investigación integra la ecoacústica y la ecología del paisaje utilizando herramientas SIG avanzadas. Cuenta con amplia experiencia profesional en la estructuración de proyectos de conservación, análisis de conectividad ecológica funcional y estructural, y caracterización de paisajes sonoros. Ha colaborado con entidades como la Sociedad Antioqueña de Ornitología y la Secretaría de Medio Ambiente de La Estrella en la gestión de ecosistemas estratégicos.",
                google_scholar: "https://www.researchgate.net/profile/Carolina-Paniagua-Villada",
                publications: [
                    { year: 2025, title: "A workflow to optimize spatial sampling in ecoacoustic studies", journal: "Preprint" },
                    { year: 2024, title: "Built vs. Green cover: an unequal struggle for urban space in Medellín (Colombia)", journal: "Urban Ecosystems" }
                ]
            },
            { id: 'pg3', name: "Yeison Tolosa", role: "Estudiante Maestría", photo: "yeison_tolosa.jpg", bio: "Sistemática molecular y taxonomía integrativa.", link_cv: "#" },
            { id: 'pg4', name: "Freddy Alexander Grisales", role: "Estudiante Maestría", photo: "freddy_grisales.jpg", bio: "Biogeografía y modelos de nicho ecológico.", link_cv: "#" }
        ],
        undergrad: [
            { name: "Marisol Londoño", bio: "Interés en ecología de anfibios." },
            { name: "Camilo Gómez", bio: "Taxonomía y sistemática de serpientes." },
            { name: "Santiago Arango", bio: "Ecoacústica." },
            { name: "Carolina Torres", bio: "Genómica y filogenética." },
            { name: "Felipe Barrera Ocampo", bio: "Trabaja con taxonomía y sistemática de reptiles." },
            { name: "Katherine Aguirre", bio: "Joven investigadora. Actualmente trabaja con caracteres morfológicos en serpientes." }
        ]
    },
    research_lines: [
        { id: 1, title: "Ecología y Conservación", description: "Estudio de dinámicas poblacionales y amenazas a especies en peligro.", icon: "Leaf" },
        { id: 2, title: "Sistemática y Taxonomía", description: "Descripción de nuevas especies y resolución de complejos crípticos.", icon: "Dna" },
        { id: 3, title: "Biogeografía", description: "Patrones de distribución de la herpetofauna en los Andes.", icon: "Map" }
    ],
    projects: [
        { title: "Tortugas del Río Magdalena", status: "En curso", funder: "MinCiencias" },
        { title: "Monitoreo de Atelopus en el Páramo", status: "Finalizado", funder: "GHA Interno" },
        { title: "Inventario Herpetológico del Occidente", status: "En curso", funder: "Universidad de Antioquia" }
    ],
    news: [
        { id: 1, title: "Nueva especie descrita: Pristimantis gha", date: "Octubre 2023", summary: "El grupo celebra el descubrimiento de una nueva rana de lluvia en el Urrao." },
        { id: 2, title: "Simposio Colombiano de Herpetología", date: "Agosto 2023", summary: "Participación destacada de nuestros estudiantes con 5 ponencias orales." },
        { id: 3, title: "Apertura convocatoria nuevos miembros", date: "Julio 2023", summary: "Buscamos estudiantes de pregrado apasionados por la herpetología." }
    ],
    species_month: {
        scientific_name: "Andinobates opisthomelas",
        common_name: "Rana venenosa de Andino",
        photo: "rana_mes.jpg",
        description: "Endémica de la cordillera central y occidental de Colombia. Se destaca por su coloración roja vibrante y su cuidado parental especializado."
    },
    mhua: {
        title: "Museo de Herpetología Universidad de Antioquia",
        description: "El MHUA custodia una de las colecciones biológicas más importantes de Colombia, con más de 30,000 especímenes catalogados que documentan la diversidad de anfibios y reptiles del país.",
        services: ["Préstamo de especímenes", "Visitas guiadas", "Depósito de material", "Consultoría taxonómica"],
        curator: "Dr. Juan Manuel Daza"
    }
};

/**
 * --------------------------------------------------------------------------
 * ICON SYSTEM
 * --------------------------------------------------------------------------
 */
const Icons: any = {
    Menu: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
    Close: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    MapPin: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    Email: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    Facebook: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
    Instagram: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    Pdf: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Leaf: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>,
    Frog: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="4"/><path d="M12 5L12 9"/><path d="M15.5 10C16.5 8 18 6 19 6C20.5 6 21 7.5 21 9C21 11 20 12 18 13"/><path d="M8.5 10C7.5 8 6 6 5 6C3.5 6 3 7.5 3 9C3 11 4 12 6 13"/></svg>,
    ArrowRight: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
    ArrowLeft: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
    Dna: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="M17 12c.57-2.086 2.133-3.533 4.691-4.341"></path><path d="M2 12c.57 2.086 2.133 3.533 4.691 4.341"></path></svg>,
    Map: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>,
    ExternalLink: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
    Globe: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
};

/**
 * --------------------------------------------------------------------------
 * UTILS
 * --------------------------------------------------------------------------
         */
const handleImageError = (e: any, type = 'nature') => {
    e.target.onerror = null;
    const keywords: any = {
        'person': 'portrait,researcher',
        'frog': 'frog,amphibian,tropical',
        'nature': 'rainforest,jungle',
        'logo': 'abstract,green,shape'
    };
    const keyword = keywords[type] || keywords['nature'];
    e.target.src = `https://source.unsplash.com/400x400/?${keyword}`;
};

/**
 * --------------------------------------------------------------------------
 * COMPONENTS
 * --------------------------------------------------------------------------
 */

const Navbar = ({ activeSection, setSection, mobileMenuOpen, setMobileMenuOpen }: any) => {
    const navItems = [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Nosotros' },
        { id: 'members', label: 'Integrantes' },
        { id: 'research', label: 'Investigación' },
        { id: 'news', label: 'Noticias' },
        { id: 'mhua', label: 'MHUA' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="nav-logo" onClick={() => setSection('home')}>
                    <img 
                        src="logo_gha.png" 
                        alt="GHA Logo" 
                        onError={(e) => handleImageError(e, 'logo')}
                    />
                    <span>{GHA_DATA.general.acronym}</span>
                </div>
                
                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <Icons.Close size={28} /> : <Icons.Menu size={28} />}
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <span 
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => {
                                setSection(item.id);
                                setMobileMenuOpen(false);
                            }}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

const Footer = () => (
    <footer className="footer">
        <div className="container grid-responsive">
            <div>
                <h4>Contacto</h4>
                <ul>
                    <li style={{display:'flex', gap:'0.5rem', alignItems:'center'}}><Icons.Email size={18}/> {GHA_DATA.general.email}</li>
                    <li style={{display:'flex', gap:'0.5rem', alignItems:'center'}}><Icons.MapPin size={18}/> {GHA_DATA.general.location}</li>
                </ul>
            </div>
            <div>
                <h4>Enlaces de Interés</h4>
                <ul>
                    <li><a href="https://www.udea.edu.co" target="_blank">Universidad de Antioquia</a></li>
                    <li><a href="#">Instituto de Biología</a></li>
                    <li><a href="#">Asociación Colombiana de Herpetología</a></li>
                </ul>
            </div>
            <div>
                <h4>Síguenos</h4>
                <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
                    <a href={GHA_DATA.general.social.facebook}><Icons.Facebook /></a>
                    <a href={GHA_DATA.general.social.instagram}><Icons.Instagram /></a>
                </div>
            </div>
        </div>
        <div className="container text-center" style={{marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p style={{opacity: 0.7, fontSize: '0.9rem'}}>&copy; {new Date().getFullYear()} {GHA_DATA.general.name}. Todos los derechos reservados.</p>
        </div>
    </footer>
);

// --- VIEWS ---

const HomeView = ({ setSection }: any) => (
    <div className="animate-fade">
        <section className="hero" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(hero_bg.jpg)'}}>
            <img 
                src="hero_bg.jpg" 
                style={{display:'none'}} 
                onError={(e: any) => { e.target.parentElement.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://source.unsplash.com/1600x900/?jungle,reptile')"; }} 
            />
            <div className="container">
                <h1>GRUPO HERPETOLÓGICO DE ANTIOQUIA</h1>
                <p>Investigación y conservación de anfibios y reptiles en el neotrópico desde 1998.</p>
                <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap: 'wrap'}}>
                    <button className="btn" onClick={() => setSection('about')}>Conócenos</button>
                    <button className="btn btn-outline" style={{borderColor:'white', color:'white'}} onClick={() => setSection('mhua')}>Visita el MHUA</button>
                </div>
            </div>
        </section>

        <section className="container section-padding">
            <h2 className="section-title">Especie del Mes</h2>
            <div className="feature-box">
                <img 
                    src={GHA_DATA.species_month.photo} 
                    alt={GHA_DATA.species_month.scientific_name} 
                    className="feature-img"
                    style={{width: '100%', objectFit: 'cover'}}
                    onError={(e) => handleImageError(e, 'frog')}
                />
                <div className="feature-content">
                    <h3 style={{fontStyle:'italic', fontSize:'1.8rem'}}>{GHA_DATA.species_month.scientific_name}</h3>
                    <h4 style={{marginBottom:'1rem', color:'var(--gha-accent)', fontSize:'1.1rem'}}>{GHA_DATA.species_month.common_name}</h4>
                    <p style={{marginBottom:'1.5rem'}}>{GHA_DATA.species_month.description}</p>
                    <button className="btn btn-outline">Saber más</button>
                </div>
            </div>
        </section>
    </div>
);

const AboutView = () => {
    const aboutContent = [
        { title: 'Historia y Trayectoria', content: GHA_DATA.about_us.history },
        { title: 'Objetivos del Grupo', content: GHA_DATA.about_us.objectives },
        { title: 'Agenda de Trabajo', content: GHA_DATA.about_us.work_agenda },
        { title: 'Líneas de Investigación', content: GHA_DATA.about_us.research_lines_summary },
        { title: 'Dinámica del Grupo', content: GHA_DATA.about_us.group_dynamics },
        { title: 'Mecanismos para la Solución de Conflictos', content: GHA_DATA.about_us.conflict_resolution },
    ];

    return (
        <div className="container section-padding animate-fade">
            <h2 className="section-title">Sobre Nosotros</h2>
            
            <div className="about-content-wrapper">
                {aboutContent.map(section => (
                    <div key={section.title} style={{marginBottom: '2.5rem'}}>
                        <h3 className="subsection-title" style={{marginTop: 0, marginBottom: '1rem'}}>{section.title}</h3>
                        {section.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} style={{marginBottom: '1rem', color: '#444'}}>{paragraph}</p>
                        ))}
                    </div>
                ))}
            </div>

            <div className="text-center" style={{background:'#e8e8e8', padding:'3rem', borderRadius:'8px', marginTop: '4rem'}}>
                <Icons.Pdf size={48} color="var(--gha-primary)" />
                <h3 style={{marginTop:'1rem'}}>Estatutos del GHA</h3>
                <p style={{maxWidth:'600px', margin:'1rem auto'}}>{GHA_DATA.statutes.summary}</p>
                <a href={GHA_DATA.statutes.link} className="btn">Descargar PDF</a>
            </div>
        </div>
    );
};

// Componente auxiliar para tarjeta de miembro estándar
const MemberCard = ({ member, onSelect }: any) => (
    <div className="card">
        <img 
            src={member.photo} 
            alt={member.name} 
            className="card-img"
            onError={(e) => handleImageError(e, 'person')}
        />
        <div className="card-body">
            <h3 className="card-title">{member.name}</h3>
            <span className="card-subtitle">{member.role}</span>
            <p style={{fontSize: '0.9rem', color: '#555'}}>{member.bio}</p>
        </div>
        <div className="card-footer">
            <button 
                onClick={() => onSelect(member)}
                style={{background:'none', border:'none', color: 'var(--gha-primary)', fontWeight:'bold', display:'flex', alignItems:'center', gap:'0.25rem', cursor:'pointer', fontSize: 'inherit', padding: 0}}
            >
                Más información <Icons.ArrowRight size={16} />
            </button>
        </div>
    </div>
);

const MemberProfileView = ({ member, onBack }: any) => {
    if (!member) return null;

    return (
        <div className="container section-padding animate-fade">
            <button onClick={onBack} className="btn-outline" style={{marginBottom: '2rem', padding: '0.5rem 1rem'}}>
                    <Icons.ArrowLeft size={16} style={{marginRight: '5px'}}/> Volver a integrantes
            </button>

            <div className="profile-header">
                <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="profile-img"
                    onError={(e) => handleImageError(e, 'person')}
                />
                <div className="profile-info">
                    <h2>{member.name}</h2>
                    <span className="role">{member.role}</span>
                    <div className="profile-meta">
                        {member.education && <p style={{marginBottom: '0.5rem'}}><strong>Educación:</strong> {member.education}</p>}
                        <p>{member.bio}</p>
                    </div>
                    {member.areas && (
                        <div style={{marginTop: '1rem'}}>
                            {member.areas.map((area: any, i: number) => <span key={i} className="tag">{area}</span>)}
                        </div>
                    )}
                </div>
            </div>

            {/* Sección de Resumen de Trayectoria */}
            {member.profile_desc && (
                <div style={{marginBottom: '3rem', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow)'}}>
                        <h3 className="subsection-title" style={{marginTop: 0}}>Trayectoria Académica</h3>
                        <p style={{fontSize: '1.05rem', color: '#444'}}>{member.profile_desc}</p>
                        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop: '1.5rem'}}>
                            {member.google_scholar && (
                                <a href={member.google_scholar} target="_blank" className="btn" style={{display: 'inline-flex', gap: '0.5rem', alignItems: 'center'}}>
                                    Google Scholar <Icons.ExternalLink size={18} />
                                </a>
                            )}
                            {member.website && (
                                <a href={member.website} target="_blank" className="btn btn-outline" style={{display: 'inline-flex', gap: '0.5rem', alignItems: 'center'}}>
                                    Sitio Web <Icons.Globe size={18} />
                                </a>
                            )}
                            {member.orcid && (
                                <a href={member.orcid} target="_blank" className="btn btn-outline" style={{display: 'inline-flex', gap: '0.5rem', alignItems: 'center'}}>
                                    ORCID <Icons.ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                </div>
            )}

            {member.publications && member.publications.length > 0 && (
                <div>
                    <h3 className="subsection-title">Publicaciones Destacadas</h3>
                    <div className="pub-list">
                        {member.publications.map((pub: any, idx: number) => (
                            <div key={idx} className="pub-item">
                                <span className="pub-year">{pub.year}</span>
                                <div className="pub-title">{pub.title}</div>
                                <div className="pub-journal">{pub.journal}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const MembersView = ({ onMemberSelect }: any) => (
    <div className="container section-padding animate-fade">
        <h2 className="section-title">Nuestros Integrantes</h2>
        
        <h3 className="subsection-title">Dirección del Grupo</h3>
        <div className="grid-responsive">
            {GHA_DATA.members.direction.map(m => <MemberCard key={m.id} member={m} onSelect={onMemberSelect} />)}
        </div>

        <h3 className="subsection-title">Apoyo Administrativo</h3>
        <div className="grid-responsive">
            {GHA_DATA.members.admin.map(m => <MemberCard key={m.id} member={m} onSelect={onMemberSelect} />)}
        </div>

        <h3 className="subsection-title">Investigadores Eméritos</h3>
        <div className="grid-responsive">
            {GHA_DATA.members.emeritus.map(m => <MemberCard key={m.id} member={m} onSelect={onMemberSelect} />)}
        </div>
        
        <h3 className="subsection-title">Investigadores Asociados</h3>
        <div className="grid-responsive">
            {GHA_DATA.members.associates.map(m => <MemberCard key={m.id} member={m} onSelect={onMemberSelect} />)}
        </div>

        <h3 className="subsection-title">Estudiantes de Posgrado</h3>
        <div className="grid-responsive">
            {GHA_DATA.members.postgrad.map(m => <MemberCard key={m.id} member={m} onSelect={onMemberSelect} />)}
        </div>

        <h3 className="subsection-title">Estudiantes de Pregrado</h3>
        <div className="grid-compact" style={{background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow)'}}>
            {GHA_DATA.members.undergrad.map((member, idx) => (
                <div key={idx} className="card-small">
                    <img 
                        src={`ug_${idx}.jpg`} 
                        className="card-small-img" 
                        alt={member.name}
                        onError={(e) => handleImageError(e, 'person')}
                    />
                    <h4 style={{fontSize:'1rem', margin:0}}>{member.name}</h4>
                    <span style={{fontSize:'0.8rem', color:'var(--gha-accent)', fontWeight:'600'}}>Pregrado</span>
                    <p style={{fontSize:'0.85rem', color:'#555', marginTop:'0.5rem', lineHeight:'1.3'}}>{member.bio}</p>
                </div>
            ))}
            <div 
                className="card-small" 
                style={{background: 'var(--gha-primary)', color:'white', justifyContent:'center', cursor: 'pointer'}}
                onClick={() => alert("Reuniones en el laboratorio de Herpetología, 7-121 a las 14:00 horas todos los lunes.")}
            >
                 <p style={{fontSize:'1rem', fontWeight:'bold'}}>¡Asiste a nuestras reuniones!</p>
                 <span style={{fontSize:'0.8rem', opacity: 0.8}}>(Click para info)</span>
            </div>
        </div>
        <p style={{textAlign:'center', marginTop:'1rem', color:'#666', fontStyle:'italic'}}>
            Nuestros estudiantes de pregrado son el corazón del semillero, participando activamente en salidas de campo, curaduría y proyectos de investigación.
        </p>
    </div>
);

const ResearchView = () => (
    <div className="container section-padding animate-fade">
        <h2 className="section-title">Investigación</h2>
        
        <div className="grid-responsive" style={{marginBottom:'4rem'}}>
            {GHA_DATA.research_lines.map(line => {
                const IconComp = Icons[line.icon] || Icons.Frog;
                return (
                    <div key={line.id} className="card" style={{textAlign:'center', padding:'2rem', alignItems:'center'}}>
                        <div style={{color:'var(--gha-primary)', marginBottom:'1rem', background:'#eef', padding:'1rem', borderRadius:'50%'}}>
                            <IconComp size={40} />
                        </div>
                        <h3 style={{fontSize:'1.2rem'}}>{line.title}</h3>
                        <p style={{marginTop:'0.5rem', fontSize:'0.9rem'}}>{line.description}</p>
                    </div>
                )
            })}
        </div>

        <h3 style={{marginBottom:'1.5rem'}}>Proyectos Recientes</h3>
        <div style={{overflowX: 'auto', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', minWidth: '600px'}}>
                <thead style={{background: 'var(--gha-primary)', color: 'white'}}>
                    <tr>
                        <th style={{padding: '1rem', textAlign: 'left'}}>Título</th>
                        <th style={{padding: '1rem', textAlign: 'left'}}>Estado</th>
                        <th style={{padding: '1rem', textAlign: 'left'}}>Financiador</th>
                    </tr>
                </thead>
                <tbody>
                    {GHA_DATA.projects.map((proj, idx) => (
                        <tr key={idx} style={{borderBottom: '1px solid #eee'}}>
                            <td style={{padding: '1rem'}}>{proj.title}</td>
                            <td style={{padding: '1rem'}}><span style={{padding:'0.25rem 0.5rem', borderRadius:'4px', background: proj.status === 'En curso' ? '#d1fae5' : '#e5e7eb', color: proj.status === 'En curso' ? '#065f46' : '#374151', fontSize:'0.85rem', fontWeight:'600'}}>{proj.status}</span></td>
                            <td style={{padding: '1rem'}}>{proj.funder}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const NewsView = () => (
    <div className="container section-padding animate-fade">
        <h2 className="section-title">Noticias</h2>
        <div className="grid-responsive">
            {GHA_DATA.news.map(item => (
                <div key={item.id} className="card">
                    <div className="card-body">
                        <span style={{fontSize: '0.8rem', color: '#888', display:'block', marginBottom:'0.5rem'}}>{item.date}</span>
                        <h3 className="card-title" style={{fontSize:'1.3rem'}}>{item.title}</h3>
                        <p style={{color:'#555'}}>{item.summary}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn-outline" style={{padding:'0.25rem 0.75rem', fontSize:'0.8rem', borderRadius:'4px'}}>Leer más</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MHUAView = () => (
    <div className="animate-fade">
        <div className="mhua-banner">
            <div className="container">
                <h1 style={{fontSize:'3rem', marginBottom:'1rem'}}>{GHA_DATA.mhua.title}</h1>
                <p style={{fontSize:'1.2rem', maxWidth:'800px', margin:'0 auto'}}>
                    {GHA_DATA.mhua.description}
                </p>
            </div>
        </div>
        <div className="container section-padding">
            <div className="grid-responsive" style={{gridTemplateColumns: '1fr 1fr'}}>
                <div>
                    <img 
                        src="mhua_collection.jpg" 
                        alt="Colección MHUA" 
                        style={{borderRadius:'8px', boxShadow:'var(--shadow)', width:'100%'}}
                        onError={(e) => handleImageError(e, 'nature')}
                    />
                    <p style={{textAlign:'center', marginTop:'0.5rem', fontStyle:'italic', color:'#666'}}>Curador: {GHA_DATA.mhua.curator}</p>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <h3 style={{color: 'var(--mhua-primary)'}}>Servicios a la Comunidad</h3>
                    <ul style={{marginTop:'1.5rem'}}>
                        {GHA_DATA.mhua.services.map((serv, i) => (
                            <li key={i} style={{marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'1.1rem'}}>
                                <Icons.ArrowRight size={20} color="var(--mhua-primary)" />
                                {serv}
                            </li>
                        ))}
                    </ul>
                    <div style={{marginTop:'2rem', padding:'1.5rem', background:'#fff5eb', borderLeft:'4px solid var(--mhua-primary)', borderRadius:'0 4px 4px 0'}}>
                        <h4 style={{color: 'var(--mhua-primary)'}}>Visitas y Consultas</h4>
                        <p style={{fontSize:'0.95rem'}}>Para acceder a la colección o solicitar visitas, por favor contáctenos a través del correo oficial del grupo con el asunto "Solicitud MHUA".</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/**
 * --------------------------------------------------------------------------
 * APP ROOT
 * --------------------------------------------------------------------------
         */
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [selectedMember, setSelectedMember] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Dynamic Theme Switching based on section
    useEffect(() => {
        if (activeSection === 'mhua') {
            document.body.classList.add('mhua-theme');
        } else {
            document.body.classList.remove('mhua-theme');
        }
    }, [activeSection]);

    // Scroll to top on section change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeSection, selectedMember]);

    const handleMemberSelect = (member: any) => {
        setSelectedMember(member);
        setActiveSection('profile');
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'home': return <HomeView setSection={setActiveSection} />;
            case 'about': return <AboutView />;
            case 'members': return <MembersView onMemberSelect={handleMemberSelect} />;
            case 'research': return <ResearchView />;
            case 'news': return <NewsView />;
            case 'mhua': return <MHUAView />;
            case 'profile': return <MemberProfileView member={selectedMember} onBack={() => setActiveSection('members')} />;
            default: return <HomeView setSection={setActiveSection} />;
        }
    };

    return (
        <>
            <Navbar 
                activeSection={activeSection} 
                setSection={setActiveSection}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
            <main style={{minHeight: '80vh'}}>
                {renderSection()}
            </main>
            <Footer />
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}