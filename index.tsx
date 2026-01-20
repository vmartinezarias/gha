
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
    sections: {
        history: "El GHA nació en 1998 como una iniciativa estudiantil en la Universidad de Antioquia. A lo largo de más de dos décadas, nos hemos consolidado como un referente en la investigación y conservación de anfibios y reptiles en los Andes tropicales.",
        mission: "Promover el conocimiento, la conservación y el uso sostenible de la biodiversidad de anfibios y reptiles a través de la investigación científica rigurosa.",
        vision: "Ser reconocidos internacionalmente como un grupo líder en investigación herpetológica, cuyos aportes científicos fundamenten estrategias efectivas de conservación."
    },
    statutes: {
        summary: "Nuestros estatutos rigen el comportamiento ético, los procesos de admisión de nuevos miembros y la estructura democrática del grupo.",
        link: "#"
    },
    // --- NUEVA ESTRUCTURA DE INTEGRANTES ---
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
                bio: "Estudiante de Biología. Actualmente en la línea de investigación de Sistemática y taxonomía. Asistente de Curaduría del Museo de Herpetología Universidad de Antioquia. No sé qué más poner jajaja.", 
                profile_desc: "Estudiante de Biología. Actualmente en la línea de investigación de Sistemática y taxonomía. Asistente de Curaduría del Museo de Herpetología Universidad de Antioquia. No sé qué más poner jajaja.",
                link_cv: "#" 
            }
        ],
        emeritus: [
            { id: 'e1', name: "Vivian Páez", role: "Investigadora Emérita", photo: "vivian_paez.jpg", bio: "Fundadora del grupo. Pionera en el estudio de la ecología de tortugas continentales en Colombia y biología de la conservación.", link_cv: "#" },
            { id: 'e2', name: "Brian Bock", role: "Investigador Emérito", photo: "brian_bock.jpg", bio: "Profesor jubilado con una vasta trayectoria en comportamiento animal, demografía y evolución de iguánidos.", link_cv: "#" }
        ],
        associates: [
            { id: 'as1', name: "Carlos Marín", role: "Investigador Asociado", photo: "carlos_marin.jpg", bio: "Especialista en bioacústica y taxonomía de anfibios.", link_cv: "#" },
            { id: 'as2', name: "Johana Pérez-Mira", role: "Investigadora Asociada", photo: "johana_perez.jpg", bio: "Investigadora en ecología funcional y diversidad.", link_cv: "#" },
            { id: 'as3', name: "Viviana Maria Cartagena", role: "Investigadora Asociada", photo: "viviana_cartagena.jpg", bio: "Experta en educación ambiental y conservación comunitaria.", link_cv: "#" },
            { id: 'as4', name: "Camilo Sánchez Giraldo", role: "Investigador Asociado", photo: "camilo_sanchez.jpg", bio: "Estudios en genética de poblaciones y evolución.", link_cv: "#" },
            { id: 'as5', name: "Mateo Rivera", role: "Investigador Asociado", photo: "mateo_rivera.jpg", bio: "Ecología de comunidades de anfibios de alta montaña.", link_cv: "#" },
            { id: 'as6', name: "Santiago Varela", role: "Investigador Asociado", photo: "santiago_varela.jpg", bio: "Investigación en historia natural y distribución de reptiles.", link_cv: "#" }
        ],
        postgrad: [
            { id: 'pg1', name: "Víctor M. Martínez-Arias", role: "Estudiante Doctorado", photo: "victor_martinez.jpg", bio: "Investigando procesos evolutivos y diversificación en anfibios de los Andes.", link_cv: "#" },
            { id: 'pg2', name: "Carolina Paniagua-Villada", role: "Estudiante Maestría", photo: "carolina_paniagua.jpg", bio: "Ecología espacial y uso de hábitat en serpientes.", link_cv: "#" },
            { id: 'pg3', name: "Yeison Tolosa", role: "Estudiante Maestría", photo: "yeison_tolosa.jpg", bio: "Sistemática molecular y taxonomía integrativa.", link_cv: "#" },
            { id: 'pg4', name: "Freddy Alexander Grisales", role: "Estudiante Maestría", photo: "freddy_grisales.jpg", bio: "Biogeografía y modelos de nicho ecológico.", link_cv: "#" }
        ],
        undergrad: [
            "Marisol Londoño",
            "Camilo Gómez",
            "Felipe Barrera Ocampo",
            "Katherine",
            "Santiago Arango",
            "Carolina Torres"
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
    ExternalLink: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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

const AboutView = () => (
    <div className="container section-padding animate-fade">
        <h2 className="section-title">Quiénes Somos</h2>
        
        <div className="grid-responsive" style={{marginBottom: '4rem'}}>
            <div>
                <h3>Nuestra Historia</h3>
                <p style={{marginTop: '1rem'}}>{GHA_DATA.sections.history}</p>
            </div>
            <div style={{backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow)'}}>
                <div style={{marginBottom: '2rem'}}>
                    <h3>Misión</h3>
                    <p>{GHA_DATA.sections.mission}</p>
                </div>
                <div>
                    <h3>Visión</h3>
                    <p>{GHA_DATA.sections.vision}</p>
                </div>
            </div>
        </div>

        <div className="text-center" style={{background:'#e8e8e8', padding:'3rem', borderRadius:'8px'}}>
            <Icons.Pdf size={48} color="var(--gha-primary)" />
            <h3 style={{marginTop:'1rem'}}>Estatutos del GHA</h3>
            <p style={{maxWidth:'600px', margin:'1rem auto'}}>{GHA_DATA.statutes.summary}</p>
            <a href={GHA_DATA.statutes.link} className="btn">Descargar PDF</a>
        </div>
    </div>
);

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
                        {member.google_scholar && (
                            <a href={member.google_scholar} target="_blank" className="btn" style={{marginTop: '1.5rem', display: 'inline-flex', gap: '0.5rem', alignItems: 'center'}}>
                            Ver en Google Scholar <Icons.ExternalLink size={18} />
                            </a>
                        )}
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
            {GHA_DATA.members.undergrad.map((name, idx) => (
                <div key={idx} className="card-small">
                    <img 
                        src={`ug_${idx}.jpg`} 
                        className="card-small-img" 
                        alt={name}
                        onError={(e) => handleImageError(e, 'person')}
                    />
                    <h4 style={{fontSize:'1rem', margin:0}}>{name}</h4>
                    <span style={{fontSize:'0.8rem', color:'#666'}}>Pregrado</span>
                </div>
            ))}
            <div className="card-small" style={{background: 'var(--gha-primary)', color:'white', justifyContent:'center'}}>
                 <p style={{fontSize:'0.9rem'}}>¡Únete a nuestro semillero!</p>
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
