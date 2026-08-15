import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { productsFull } from "../data/productsFull";
import WhatsAppButton from "../app/components/WhatsAppButton";

export default function Productos() {
  return (
    <>
      <WhatsAppButton />
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Barlow Condensed', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="font-display font-black text-white text-sm tracking-tight">D</span>
              </div>
              <div className="leading-none">
                <div className="font-display font-black text-white text-xl tracking-[0.2em] uppercase">Distriwaipe</div>
                <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase">Fabricacion de waipe</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                Inicio
              </Link>
              <Link to="/productos" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                Productos
              </Link>
              <Link to="/#nosotros" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                Nosotros
              </Link>
              <Link to="/#preguntas" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                Preguntas
              </Link>
              <Link to="/#contacto" className="text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                Contacto
              </Link>
            </nav>

            <Link
              to="/#contacto"
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent/80 text-white text-xs font-bold px-5 py-2.5 uppercase tracking-widest transition-colors"
            >
              Cotizar
            </Link>
          </div>
        </header>

        <section className="py-16 bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Catálogo Completo</span>
            </div>
            <h1 className="font-display font-black text-white text-4xl md:text-6xl uppercase leading-none">
              Nuestros Productos
            </h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            {productsFull.map((product, index) => (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  {product.badge && (
                    <span className="inline-block bg-accent text-white text-[9px] font-black px-2 py-0.5 tracking-[0.2em] uppercase mb-4">
                      {product.badge}
                    </span>
                  )}
                  <span className="block text-muted-foreground text-[10px] uppercase tracking-[0.25em] mb-2">
                    {product.category}
                  </span>
                  <h2 className="font-display font-black text-primary text-4xl md:text-5xl uppercase mb-4">
                    {product.name}
                  </h2>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {product.fullDescription}
                  </p>

                  <div className="mb-6">
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-2">
                      Presentaciones disponibles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.presentations.map((p) => (
                        <span
                          key={p}
                          className="border border-border px-3 py-1 text-xs text-foreground/70"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold px-6 py-3 uppercase tracking-widest text-xs transition-colors"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-primary border-t border-white/10 py-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-white/25 text-[10px]">
              © 2024 WAIPE Industrial. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
