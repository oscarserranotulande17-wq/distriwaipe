import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ChevronDown, ArrowRight, Shield, Truck, Award, Clock } from "lucide-react";
import WhatsAppButton from "./components/WhatsAppButton";
import { Link } from "react-router";

const products = [
  {
    id: 0,
    name: "Waipe Tipo Carpeta",
    category: "Fabricación Propia",
    description: "Fabricamos nuestro propio Waipe tipo carpeta: paño industrial resistente, ideal para limpieza de maquinaria, talleres y superficies de alta demanda.",
    badge: "FABRICADO",
  },
  {
    id: 7,
    name: "Waipe Blanco",
    category: "Fabricación Propia",
    description: "Fabricamos Waipe blanco de alta calidad, suave y absorbente, para limpieza de precisión en superficies delicadas, industria textil y uso general.",
    badge: "FABRICADO",
  },
  {
    id: 1,
    name: "Wypall-X70",
    category: "Toallas Industriales",
    description: "Paños industriales de alta resistencia para limpieza en ambientes exigentes. Absorción superior, durabilidad comprobada y reutilizables.",
    badge: "PREMIUM",
  },
  {
    id: 2,
    name: "Thinner",
    category: "Diluyente Industrial",
    description: "Diluyente de alta calidad para pinturas, lacas y esmaltes. Formulación optimizada para resultados profesionales en todo tipo de superficies.",
    badge: null,
  },
  {
    id: 3,
    name: "Varsol",
    category: "Solvente Mineral",
    description: "Solvente derivado del petróleo, ideal para desengrase y limpieza profunda de maquinaria, equipos y superficies metálicas.",
    badge: null,
  },
  {
    id: 4,
    name: "Alcohol",
    category: "Isopropílico 96°",
    description: "Alcohol de alta pureza para desinfección de superficies, limpieza de circuitos electrónicos y aplicaciones de laboratorio.",
    badge: "96°",
  },
  {
    id: 5,
    name: "Xilol",
    category: "Solvente Aromático",
    description: "Solvente de base aromática ampliamente utilizado en pinturas, barnices, resinas y como agente de limpieza industrial especializado.",
    badge: null,
  },
  {
    id: 6,
    name: "Aseo General",
    category: "Línea de Limpieza",
    description: "Línea completa de productos de aseo para entornos industriales, comerciales y domésticos. Desengrasantes, multiusos y más.",
    badge: "LÍNEA",
  },
  {
    id: 8,
    name: "Cintas Stretch",
    category: "Embalaje Industrial",
    description: "Cinta stretch de alta resistencia para embalaje, paletizado y protección de mercancía durante transporte y almacenamiento.",
    badge: null,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    desc: "Todos nuestros productos cumplen estándares de calidad para uso industrial y comercial exigente.",
  },
  {
    icon: Truck,
    title: "Distribución Directa",
    desc: "Realizamos servicio a domicilio totalmente gratiuto en Cali y sus alrededores, permitiendo conectar con el cliente facilmente.",
  },
  {
    icon: Award,
    title: "Fabricación Propia",
    desc: "Fabricamos Waipe tipo carpeta y Waipe blanco, y comercializamos solventes con control total del proceso.",
  },
  {
    icon: Clock,
    title: "Atención Rápida",
    desc: "Respondemos ágilmente a sus pedidos. Servicio personalizado para empresas y clientes particulares.",
  },
];

const faqs = [
  {
    question: "¿Cuál es el pedido mínimo?",
    answer: "El pedido mínimo es de tan solo 1 unidad de Waipe (o el producto que necesite). No manejamos cantidades mínimas altas, así que puede solicitar desde una unidad hasta grandes volúmenes según su necesidad.",
  },
  {
    question: "¿Hacen entregas fuera de Cali?",
    answer: "Sí, realizamos domicilio a los alrededores de Cali. Contáctenos indicando su ubicación y le confirmamos cobertura y condiciones de entrega.",
  },
  {
    question: "¿Cuánto tarda la entrega?",
    answer: "El tiempo de entrega depende de la cantidad solicitada. Pedidos pequeños (como 1 unidad) se entregan al día siguiente. Pedidos más grandes, como una tonelada, pueden tardar entre 1 y 8 días, dependiendo del volumen solicitado.",
  },
  {
    question: "¿Manejan precios por mayor?",
    answer: "Sí, ofrecemos precios especiales para compras al por mayor. Contáctenos por WhatsApp o el formulario de cotización indicando las cantidades que necesita.",
  },
];

type FormData = {
  nombre: string;
  empresa: string;
  telefono: string;
  mensaje: string;
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "573148961094"; // Colombia +57

    const texto =
      `*Nueva solicitud de cotización*\n\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Empresa:* ${formData.empresa || "No especificada"}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Mensaje:*\n${formData.mensaje}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: "", empresa: "", telefono: "", mensaje: "" });
    }, 3000);
  };

const navLinks = ["Inicio", "Productos", "Nosotros", "Preguntas", "Contacto"];

  return (
    <>
    <WhatsAppButton />
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee { animation: marquee 18s linear infinite; }
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Barlow Condensed', sans-serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #e85d04; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="min-h-screen bg-background text-foreground">

        {/* ── NAVBAR ── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center bg-[#eb6000]">
                <span className="font-display font-black text-white text-sm tracking-tight">D</span>
              </div>
              <div className="leading-none">
                <div className="font-display font-black text-white text-xl tracking-[0.2em] uppercase">Distriwaipe</div>
                <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase">Fabricacion de waipe</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link === "Productos" ? (
                  <Link
                    key={link}
                    to="/productos"
                    className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>

            <a
              href="#contacto"
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent/80 text-white text-xs font-bold px-5 py-2.5 uppercase tracking-widest transition-colors"
            >
              Cotizar <ArrowRight size={12} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Menú"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden bg-primary border-t border-white/10 px-6 py-5 flex flex-col gap-5">
              {navLinks.map((link) =>
                link === "Productos" ? (
                  <Link
                    key={link}
                    to="/productos"
                    onClick={() => setMobileOpen(false)}
                    className="text-white/70 text-sm tracking-widest uppercase"
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/70 text-sm tracking-widest uppercase"
                  >
                    {link}
                  </a>
                )
              )}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="bg-accent text-white text-sm font-bold py-3 uppercase tracking-widest text-center"
              >
                Cotizar ahora
              </a>
            </div>
          )}
        </header>

        {/* ── HERO ── */}
        <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img
              src="https://i.ibb.co/YBBgGKzd/Chat-GPT-Image-14-ago-2026-08-33-01-a-m.png"
              alt="Planta industrial de fabricación"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-40 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">
                  Fabricación & Distribución · Colombia
                </span>
              </div>

              <h1 className="font-display font-black text-white leading-none uppercase mb-6">
                <span className="block text-5xl md:text-7xl lg:text-8xl">Limpieza</span>
                <span className="block text-5xl md:text-7xl lg:text-8xl text-accent">Industrial</span>
                <span className="block text-5xl md:text-7xl lg:text-8xl">de Alto</span>
                <span className="block text-5xl md:text-7xl lg:text-8xl">Rendimiento</span>
              </h1>

              <p className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Fabricamos Waipe tipo carpeta y Waipe blanco, y comercializamos solventes, diluyentes y productos de aseo para la industria colombiana. Calidad directa desde nuestra planta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/85 text-white font-bold px-8 py-4 uppercase tracking-widest text-xs transition-colors"
                >
                  Ver Productos <ChevronRight size={14} />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-bold px-8 py-4 uppercase tracking-widest text-xs transition-colors"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {[
                  { num: "6+", label: "Líneas de producto" },
                  { num: "100%", label: "Fabricación propia" },
                  { num: "24h", label: "Tiempo de respuesta" },
                  { num: "Colombia", label: "Distribución nacional" },
                ].map((s) => (
                  <div key={s.label} className="py-5 px-6 text-center">
                    <div className="font-display font-black text-accent text-3xl leading-none">{s.num}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-[0.15em] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="bg-accent overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-display font-bold text-white text-xs tracking-[0.25em] uppercase mx-6 inline-block"
              >
                WAIPE TIPO CARPETA &nbsp;·&nbsp; WAIPE BLANCO &nbsp;·&nbsp; WYPALL-X70 &nbsp;·&nbsp; THINNER &nbsp;·&nbsp; VARSOL &nbsp;·&nbsp; ALCOHOL ISOPROPÍLICO &nbsp;·&nbsp; XILOL &nbsp;·&nbsp; PRODUCTOS DE ASEO &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── PRODUCTS ── */}
        <section id="productos" className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Catálogo</span>
                </div>
                <h2 className="font-display font-black text-primary text-4xl md:text-5xl uppercase leading-none">
                  Nuestros
                  <br />
                  Productos
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
                Solventes, diluyentes y paños industriales fabricados y distribuidos con estándares de calidad comprobada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card p-8 group hover:bg-primary transition-colors duration-300 cursor-default relative overflow-hidden"
                >
                  {product.badge && (
                    <span className="absolute top-6 right-6 bg-accent text-white text-[9px] font-black px-2 py-0.5 tracking-[0.2em] uppercase">
                      {product.badge}
                    </span>
                  )}

                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/8 group-hover:bg-accent/20 transition-colors flex items-center justify-center mb-4">
                      <span className="font-display font-black text-primary group-hover:text-accent text-xl transition-colors">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-white/40 text-[9px] uppercase tracking-[0.25em] transition-colors">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-primary group-hover:text-white text-4xl uppercase mb-3 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/55 text-sm leading-relaxed transition-colors">
                    {product.description}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-6 flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
                  >
                    Solicitar información <ArrowRight size={11} />
                  </a>
                </div>
              ))}
               </div>

            <div className="mt-10 text-center">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 border border-primary hover:bg-primary hover:text-white text-primary font-bold px-8 py-4 uppercase tracking-widest text-xs transition-colors"
              >
                Ver Catálogo Completo
              </Link>
            </div>
             </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="nosotros" className="py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Quiénes Somos</span>
                </div>
                <h2 className="font-display font-black text-primary text-4xl md:text-5xl uppercase leading-none mb-8">
                  Microempresa
                  <br />
                  Colombiana
                  <br />
                  <span className="text-accent">con Visión</span>
                  <br />
                  Industrial
                </h2>
                <p className="text-foreground/65 leading-relaxed mb-5 text-sm">
Somos una microempresa colombiana dedicada a la fabricación y comercialización de productos industriales de limpieza. Nacimos el 26 de octubre de 2003 con el propósito de ofrecer soluciones confiables y de alta calidad para las necesidades de limpieza de nuestros clientes.                </p>
                <p className="text-foreground/65 leading-relaxed mb-10 text-sm">
                  Atendemos a industrias, talleres, empresas de construcción, manufacturas y clientes del sector doméstico que necesitan productos confiables a precios justos, con el respaldo de quienes conocen el mercado colombiano.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Fabricación propia", val: "Waipe carpeta & blanco" },
                    { label: "Comercialización", val: "Solventes & aseo" },
                    { label: "Mercado objetivo", val: "Industria & hogar" },
                    { label: "Cobertura", val: "Colombia" },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-accent pl-4">
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-display font-bold text-primary text-sm uppercase">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-primary">
                  <img
                    src="https://i.ibb.co/5xsG6X9b/Chat-GPT-Image-14-ago-2026-09-12-02.png"
                    alt="Equipo de trabajo en planta de fabricación"
                    className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-primary/40" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-accent text-white p-6 w-36">
                  <div className="font-display font-black text-4xl leading-none">100%</div>
                  <div className="text-white/80 text-[10px] uppercase tracking-wider mt-1">Fabricación</div>
                  <div className="text-white/80 text-[10px] uppercase tracking-wider">Nacional</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Por Qué Elegirnos</span>
                <div className="h-px w-8 bg-accent" />
              </div>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl uppercase leading-none">
                Ventajas que
                <br />
                <span className="text-accent">Marcan la Diferencia</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-primary p-8 group hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 border border-accent/30 group-hover:border-accent group-hover:bg-accent/15 transition-colors flex items-center justify-center mb-6">
                    <b.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg uppercase mb-3">{b.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="preguntas" className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Dudas Frecuentes</span>
                <div className="h-px w-8 bg-accent" />
              </div>
              <h2 className="font-display font-black text-primary text-4xl md:text-5xl uppercase leading-none">
                Preguntas
                <br />
                <span className="text-accent">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-px bg-border">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display font-bold text-primary text-lg uppercase">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* ── IMAGE BAND ── */}
        <div className="h-56 md:h-72 overflow-hidden relative bg-primary">
          <img
            src="https://i.ibb.co/fYv1pM4k/Chat-GPT-Image-13-ago-2026-10-30-02-p-m.png"
            alt="Productos químicos industriales en estantería"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
            <p className="font-display font-black text-white text-2xl md:text-5xl uppercase tracking-[0.15em] text-center px-6 leading-none">
              Waipe Carpeta · Waipe Blanco · Solventes · Diluyentes · Aseo
            </p>
          </div>
        </div>

        {/* ── CONTACT ── */}
        <section id="contacto" className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Contacto</span>
                </div>
                <h2 className="font-display font-black text-primary text-4xl md:text-5xl uppercase leading-none mb-8">
                  Solicite
                  <br />
                  Su Cotización
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                  Contáctenos para conocer precios, disponibilidad y condiciones de entrega. Atendemos pedidos al por mayor y al detal.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Teléfono", val: "314 896 1094" },
                    { icon: Mail, label: "Correo electrónico", val: "distriwaipe2003@gmail.com" },
                    { icon: MapPin, label: "Bodega", val: "Calle 34 # 2-67, Barrio Santander, Cali" },
                    { icon: MapPin, label: "Oficina", val: "Carrera 4 # 70-69, Barrio Quintas de Salomia, Cali" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={15} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</div>
                        <div className="font-medium text-primary text-sm">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-primary">
                  <p className="text-white/70 text-sm leading-relaxed">
                    <span className="text-accent font-bold block mb-1 text-xs uppercase tracking-widest">Horario de atención</span>
                    Lunes a viernes: 8:00 am – 5:00 pm
                    <br />
                    Sábados: 8:00 am – 12:00 m
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: "nombre", label: "Nombre completo *", placeholder: "Su nombre", type: "text", required: true },
                  { key: "empresa", label: "Empresa (opcional)", placeholder: "Nombre de su empresa", type: "text", required: false },
                  { key: "telefono", label: "Teléfono *", placeholder: "+57 300 000 0000", type: "tel", required: true },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[9px] uppercase tracking-widest text-muted-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={formData[field.key as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-muted-foreground mb-2">
                    Mensaje / Productos de interés *
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Indique los productos que necesita y las cantidades aproximadas..."
                    rows={5}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full font-bold py-4 uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-colors ${
                    submitted
                      ? "bg-green-700 text-white"
                      : "bg-primary hover:bg-accent text-white"
                  }`}
                >
                  {submitted ? "¡Mensaje enviado con éxito!" : (
                    <>Enviar Solicitud <ArrowRight size={13} /></>
                  )}
                </button>

                <p className="text-muted-foreground text-[10px]">
                  Nos pondremos en contacto en menos de 24 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-primary border-t border-white/10 py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent flex items-center justify-center">
                  <span className="font-display font-black text-white text-sm tracking-tight">W</span>
                </div>
                <div className="leading-none">
                  <div className="font-display font-black text-white text-xl tracking-[0.2em] uppercase">Distriwaipe</div>
                  <div className="text-white/35 text-[9px] tracking-[0.25em] uppercase">Fabricacion de waipe</div>
                </div>
              </div>

              <nav className="flex flex-wrap gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-white/80 text-[10px] tracking-widest uppercase transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
              <p className="text-white/25 text-[10px]">
                © 2024 WAIPE Industrial. Todos los derechos reservados.
              </p>
              <p className="text-white/25 text-[10px]">
                Waipe tipo carpeta · Waipe blanco · Solventes · Productos de aseo · Colombia
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
