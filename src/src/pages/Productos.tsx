import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { products } from "../data/products";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Productos() {
  return (
    <>
      <WhatsAppButton />
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Barlow Condensed', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-background text-foreground">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="font-display font-black text-white text-sm tracking-tight">W</span>
              </div>
              <div className="leading-none">
                <div className="font-display font-black text-white text-xl tracking-[0.2em] uppercase">Distriwaipe</div>
                <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase">Fabricacion de waipe</div>
              </div>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors"
            >
              <ArrowLeft size={14} /> Volver al inicio
            </Link>
          </div>
        </header>

        {/* HEADER DE LA PÁGINA */}
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

        {/* GRID DE PRODUCTOS */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
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

                  <Link
                    to="/#contacto"
                    className="mt-6 flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all cursor-pointer"
                  >
                    Solicitar información <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
