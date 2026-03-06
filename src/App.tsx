import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  ShoppingBag, 
  Star, 
  Clock, 
  Heart, 
  ChefHat, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-text', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2
      });

      gsap.from('.hero-image', {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Scroll Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-white bg-paper text-ink">
      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/message/UVT4XL33UPG3J1"
          target="_blank"
          rel="noreferrer"
          className="bg-brand text-white p-4 rounded-full shadow-2xl flex items-center justify-center pulse-brand"
        >
          <ShoppingBag className="w-6 h-6" />
        </a>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
              src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
              alt="Dona Bartô Logo" 
              className="h-12 w-auto object-contain brightness-0"
              referrerPolicy="no-referrer"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand px-8 py-3 rounded-none text-xs uppercase tracking-widest font-bold text-white hover:bg-brand/90 transition-colors pulse-brand"
            >
              Pedir Agora
            </a>
          </nav>

          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-paper p-8 flex flex-col gap-6 border-b border-ink/10 animate-in fade-in slide-in-from-top-4">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xl font-display font-medium text-left"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              className="bg-brand w-full py-5 text-center font-bold text-white uppercase tracking-widest text-sm"
            >
              Pedir Agora
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Editorial Split */}
      <section id="início" className="min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          <div className="hero-text lg:pr-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-brand/30"></div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light">Desde 2020</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display leading-[0.9] mb-8">
              Sabor <br />
              <span className="italic font-script text-brand-light text-6xl md:text-8xl block mt-4">Artesanal</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-70 max-w-lg mb-12 leading-relaxed">
              Gastronomia caseira de verdade, com o carinho da Dona Bartô. 
              Marmitas congeladas que preservam o sabor e a alma da comida feita na hora.
            </p>

            <div className="flex flex-wrap gap-6">
              <a 
                href="https://wa.me/message/UVT4XL33UPG3J1"
                target="_blank"
                rel="noreferrer"
                className="bg-brand text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand/90 transition-all flex items-center gap-3"
              >
                Fazer Pedido <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://www.ifood.com.br/delivery/sao-paulo-sp/dona-barto-vila-romero/ea3fe6e5-290f-4c35-a6f7-b4dc985f353e"
                target="_blank"
                rel="noreferrer"
                className="border border-ink/10 px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-ink hover:text-white transition-all"
              >
                Ver no iFood
              </a>
            </div>
          </div>

          <div className="hero-image relative h-[50vh] lg:h-[70vh] xl:h-[80vh]">
            <div className="absolute inset-0 border border-ink/5 m-4 lg:m-8"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1Q5dHotxXYYa95g91_A3IoFtZ2SJLxCDh" 
              alt="Comida Caseira" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 bg-paper p-8 lg:p-12 border border-ink/5 hidden md:block">
              <div className="font-script text-5xl text-brand-light mb-2">4.0</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee - Editorial Style */}
      <section className="py-16 border-y border-ink/5 overflow-hidden bg-white">
        <div className="marquee">
          <div className="marquee-content">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <span className="text-2xl md:text-4xl font-display font-light opacity-20 flex items-center gap-12 italic">
                  Comida Caseira <div className="w-2 h-2 rounded-full bg-brand/30"></div> 
                  Marmitas Congeladas <div className="w-2 h-2 rounded-full bg-brand/30"></div> 
                  Sabor de Verdade <div className="w-2 h-2 rounded-full bg-brand/30"></div>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials - Editorial Grid */}
      <section id="diferenciais" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-4 block">Diferenciais</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight">Por que escolher a <br /><span className="italic">Dona Bartô?</span></h2>
          </div>
          <p className="opacity-60 max-w-xs mt-8 md:mt-0 text-sm leading-relaxed">Elevamos o conceito de marmita com ingredientes frescos e processos artesanais que preservam o sabor caseiro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: ChefHat, 
              title: "Sabor de Vó", 
              desc: "Receitas passadas de geração em geração, adaptadas para o seu dia a dia.",
              video: "https://drive.google.com/uc?export=download&id=1MtmFSiw9eiqgVcPZoo4_Kgp8XOumlXcn"
            },
            { 
              icon: Clock, 
              title: "Sempre Pronto", 
              desc: "Marmitas congeladas com tecnologia que preserva 100% dos nutrientes.",
              video: "https://drive.google.com/uc?export=download&id=1vCNuvmMjYcR3ym_5HLRsBhjJS604If3J"
            },
            { 
              icon: Heart, 
              title: "Feito com Amor", 
              desc: "Cada marmita é montada individualmente, garantindo o padrão de qualidade.",
              video: "https://drive.google.com/uc?export=download&id=1Pa4mL0nPcpFkaEc5VUqt6ytAmgB1rJ_S"
            }
          ].map((item, i) => (
            <div key={i} className="editorial-card group relative overflow-hidden h-[500px] flex flex-col justify-end rounded-2xl">
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                autoPlay muted loop playsInline
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="relative z-10">
                <item.icon className="w-10 h-10 text-brand-light mb-8" />
                <h3 className="text-3xl font-display italic mb-4">{item.title}</h3>
                <p className="opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="sobre" className="py-32 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-6 block">Nossa História</span>
            <h2 className="text-5xl md:text-7xl font-display leading-tight mb-10">Mais que um restaurante, <br /><span className="italic">uma missão.</span></h2>
            <p className="text-lg opacity-70 mb-10 leading-relaxed">
              Nascemos da vontade de levar comida de verdade para quem não tem tempo de cozinhar. 
              Acreditamos que a alimentação é o combustível da alma, e por isso não abrimos mão de temperos naturais e zero conservantes.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-brand/30"></div>
                <div>
                  <h4 className="font-display italic text-xl">Caseiro & Saudável</h4>
                  <p className="text-sm opacity-50">Temperos frescos e equilíbrio nutricional.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-brand text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand/90 transition-all"
            >
              Quero experimentar <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative">
              <div className="absolute -inset-4 border border-ink/5"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1KABGox_W8NjcpWXOLzHttTiWc5lGi5IU" 
                alt="Cozinha Artesanal" 
                className="w-full aspect-[4/5] object-cover grayscale-[0.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-12 -right-12 vertical-text text-[10px] uppercase tracking-[0.5em] font-bold opacity-20 hidden lg:block">
                Dona Bartô • Gastronomia Artesanal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Editorial Grid */}
      <section id="galeria" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-4 block">Galeria</span>
          <h2 className="text-5xl md:text-7xl font-display italic">Sabor em Movimento</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {[
            { id: '1MtmFSiw9eiqgVcPZoo4_Kgp8XOumlXcn', type: 'video' },
            { id: '1vCNuvmMjYcR3ym_5HLRsBhjJS604If3J', type: 'video' },
            { id: '1Pa4mL0nPcpFkaEc5VUqt6ytAmgB1rJ_S', type: 'video' },
            { id: '12_CKV0Hgs16uRy_g0-PJgJIdpZs6Zt0L', type: 'video' },
            { id: '1Q5dHotxXYYa95g91_A3IoFtZ2SJLxCDh', type: 'image' },
            { id: '1qVQEsdc6UQevIi6yaQOBXI0na9CAjutC', type: 'image' },
            { id: '1KABGox_W8NjcpWXOLzHttTiWc5lGi5IU', type: 'image' },
            { id: '1hvRj55rchPtMse6Ll_OOLDYBZACfqXlC', type: 'image' }
          ].map((item, index) => (
            <div key={item.id} className="reveal group relative overflow-hidden border border-ink/5 bg-white">
              {item.type === 'video' ? (
                <video 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  autoPlay muted loop playsInline
                >
                  <source src={`https://drive.google.com/uc?export=download&id=${item.id}`} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={`https://lh3.googleusercontent.com/d/${item.id}`} 
                  alt="Dona Bartô" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <a 
            href="https://www.instagram.com/dona.barto?igsh=MWd1aDEweWNueXZ0aQ==" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light border-b border-brand-light/30 pb-2 hover:border-brand-light transition-all"
          >
            Ver mais no Instagram
          </a>
        </div>
      </section>

      {/* Testimonials - Clean Style */}
      <section id="depoimentos" className="py-32 bg-paper border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-4 block">Depoimentos</span>
            <h2 className="text-5xl md:text-7xl font-display">O que dizem <br /><span className="italic">nossos clientes.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sueli Santos", comment: "Comida maravilhosa, tempero caseiro de verdade. As marmitas congeladas salvam minha semana!", role: "Google Review" },
              { name: "Marcos Oliveira", comment: "Excelente atendimento e a comida é divina. Recomendo muito o frango com quiabo.", role: "Google Review" },
              { name: "Juliana Lima", comment: "Melhor custo benefício da região. Comida saudável, fresquinha e entrega super rápida.", role: "Google Review" }
            ].map((t, i) => (
              <div key={i} className="reveal text-center">
                <div className="flex justify-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-brand fill-brand" />)}
                </div>
                <p className="text-xl font-display italic mb-8 leading-relaxed opacity-80">"{t.comment}"</p>
                <div className="h-px w-8 bg-brand/30 mx-auto mb-6"></div>
                <div className="text-xs uppercase tracking-widest font-bold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location - Editorial Split */}
      <section id="localização" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-6 block">Localização</span>
            <h2 className="text-5xl md:text-7xl font-display leading-tight mb-12">Venha nos visitar <br /><span className="italic">ou peça em casa.</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <MapPin className="w-6 h-6 text-brand-light shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Endereço</h4>
                  <p className="opacity-60">Vila Romero, São Paulo - SP</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-30 mt-2">Atendemos toda a região com delivery.</p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <Clock className="w-6 h-6 text-brand-light shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Horário</h4>
                  <p className="opacity-60">Segunda a Sábado: 10h às 18h</p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.google.com/maps/search/Dona+Bartô+Vila+Romero+São+Paulo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-ink text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand transition-all inline-flex items-center gap-3"
                >
                  Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal relative h-[600px] border border-ink/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3475841445!2d-46.6268846!3d-23.484004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593444444445%3A0x4444444444444444!2sDona%20Bart%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1709490000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.95)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Editorial */}
      <footer className="py-32 border-t border-ink/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-4">
              <img 
                src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
                alt="Dona Bartô" 
                className="h-12 w-auto mb-10 brightness-0"
                referrerPolicy="no-referrer"
              />
              <p className="opacity-50 leading-relaxed mb-10">
                Gastronomia caseira e marmitas congeladas de alta qualidade. 
                Sabor, saúde e praticidade em cada prato.
              </p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/dona.barto?igsh=MWd1aDEweWNueXZ0aQ==" className="opacity-40 hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/donabartocomidas/?locale=pt_BR" className="opacity-40 hover:opacity-100 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-30">Navegação</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => scrollTo('início')} className="hover:text-brand transition-colors">Início</button></li>
                <li><button onClick={() => scrollTo('diferenciais')} className="hover:text-brand transition-colors">Diferenciais</button></li>
                <li><button onClick={() => scrollTo('sobre')} className="hover:text-brand transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollTo('galeria')} className="hover:text-brand transition-colors">Galeria</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-30">Contato</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3 opacity-60"><MapPin className="w-4 h-4" /> São Paulo, SP</li>
                <li className="flex items-center gap-3 opacity-60"><Phone className="w-4 h-4" /> (11) 95884-9891</li>
                <li className="flex items-center gap-3 opacity-60"><ShoppingBag className="w-4 h-4" /> Vila Romero</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-ink/5 opacity-30 text-[10px] uppercase tracking-widest font-bold">
            <p>© 2026 Restaurante Dona Bartô.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <span>Termos</span>
              <span>Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
