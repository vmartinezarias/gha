
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
    members: [
        { id: 1, name: "Dra. Vivian Páez", role: "Directora & Fundadora", photo: "vivian_paez.jpg", bio: "Experta en ecología de tortugas continentales y biología de la conservación.", link_cv: "#" },
        { id: 2, name: "Dr. Brian Bock", role: "Investigador Senior", photo: "brian_bock.jpg", bio: "Especialista en comportamiento animal y evolución de lagartos.", link_cv: "#" },
        { id: 3, name: "MSc. Juan Camilo Arredondo", role: "Curador Asociado", photo: "juan_arredondo.jpg", bio: "Taxonomía y sistemática de saurios neotropicales.", link_cv: "#" },
        { id: 4, name: "Est. Ana María Pérez", role: "Estudiante Doctorado", photo: "ana_perez.jpg", bio: "Investigando vocalizaciones en ranas de cristal.", link_cv: "#" }
    ],
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
    Dna: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="M17 12c.57-2.086 2.133-3.533 4.691-4.341"></path><path d="M2 12c.57 2.086 2.133 3.533 4.691 4.341"></path></svg>,
    Map: ({size=24, color="currentColor"}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
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

const MembersView = () => (
    <div className="container section-padding animate-fade">
        <h2 className="section-title">Integrantes</h2>
        <div className="grid-responsive">
            {GHA_DATA.members.map(member => (
                <div key={member.id} className="card">
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
                        <a href={member.link_cv} style={{color: 'var(--gha-primary)', fontWeight:'bold', display:'flex', alignItems:'center', gap:'0.25rem'}}>
                            Ver CvLAC <Icons.ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
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
    }, [activeSection]);

    const renderSection = () => {
        switch(activeSection) {
            case 'home': return <HomeView setSection={setActiveSection} />;
            case 'about': return <AboutView />;
            case 'members': return <MembersView />;
            case 'research': return <ResearchView />;
            case 'news': return <NewsView />;
            case 'mhua': return <MHUAView />;
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
