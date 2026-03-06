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
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
              src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
              alt="Dona Bartô Logo" 
              className="h-12 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 hover:opacity-100 hover:text-brand transition-all"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:bg-brand-light transition-all pulse-brand"
            >
              Pedir Agora
            </a>
          </nav>

          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-paper p-8 flex flex-col gap-6 border-b border-white/10 animate-in fade-in slide-in-from-top-4">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-3xl font-display font-medium text-left"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              className="bg-brand w-full py-5 text-center font-bold text-black uppercase tracking-widest text-sm rounded-xl"
            >
              Pedir Agora
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Immersive Dark */}
      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/d/1Q5dHotxXYYa95g91_A3IoFtZ2SJLxCDh" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center hero-text">
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="h-px w-8 bg-brand"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand">Dona Bartô Gastronomia</span>
            <div className="h-px w-8 bg-brand"></div>
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-display leading-none mb-12">
            Sabor <br />
            <span className="italic font-script text-brand-light text-6xl md:text-8xl block mt-4">Artesanal</span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-60 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Marmitas congeladas que preservam o carinho da comida feita na hora. 
            Praticidade sem abrir mão do verdadeiro sabor caseiro.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1"
              target="_blank"
              rel="noreferrer"
              className="bg-brand text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-light transition-all flex items-center gap-4 group pulse-brand"
            >
              Fazer Pedido <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/dona-barto-vila-romero/ea3fe6e5-290f-4c35-a6f7-b4dc985f353e"
              target="_blank"
              rel="noreferrer"
              className="text-white px-12 py-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-brand transition-all flex items-center gap-4"
            >
              Ver no iFood <ShoppingBag className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-brand to-transparent"></div>
          <span className="text-[8px] uppercase tracking-[0.5em] vertical-text">Scroll</span>
        </div>
      </section>

      {/* Marquee - Dark Luxury */}
      <section className="py-12 border-y border-white/5 overflow-hidden bg-surface">
        <div className="marquee">
          <div className="marquee-content">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <span className="text-xl md:text-2xl font-display font-light opacity-30 flex items-center gap-12 tracking-[0.2em]">
                  COMIDA CASEIRA <Star className="w-2 h-2 text-brand" /> 
                  MARMITAS CONGELADAS <Star className="w-2 h-2 text-brand" /> 
                  SABOR DE VERDADE <Star className="w-2 h-2 text-brand" />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials - High Contrast Grid */}
      <section id="diferenciais" className="py-40 max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 reveal">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-6 block">Diferenciais</span>
          <h2 className="text-6xl md:text-8xl font-display leading-tight">A Essência da <br /><span className="italic text-brand-light">Dona Bartô</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div key={i} className="editorial-card group relative overflow-hidden h-[500px] flex flex-col justify-end p-12">
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                autoPlay muted loop playsInline
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-black transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display italic mb-6 text-brand-light">{item.title}</h3>
                <p className="opacity-50 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Dark Split */}
      <section id="sobre" className="py-40 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 reveal">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-8 block">Nossa História</span>
            <h2 className="text-6xl md:text-7xl font-display leading-tight mb-12">Mais que um restaurante, <br /><span className="italic text-brand-light">uma missão.</span></h2>
            <p className="text-xl opacity-50 mb-12 leading-relaxed font-light">
              Nascemos da vontade de levar comida de verdade para quem não tem tempo de cozinhar. 
              Acreditamos que a alimentação é o combustível da alma, e por isso não abrimos mão de temperos naturais e zero conservantes.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div>
                <h4 className="font-display italic text-2xl text-brand mb-2">100%</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Natural</p>
              </div>
              <div>
                <h4 className="font-display italic text-2xl text-brand mb-2">Artesanal</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Processo</p>
              </div>
            </div>

            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-6 bg-brand text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-light transition-all group"
            >
              Quero experimentar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7 reveal relative">
            <div className="absolute -inset-8 border border-brand/20 rounded-[4rem] -z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1KABGox_W8NjcpWXOLzHttTiWc5lGi5IU" 
              alt="Cozinha Artesanal" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-20 -right-12 vertical-text text-[8px] uppercase tracking-[1em] font-bold opacity-20 hidden lg:block">
              Dona Bartô • Gastronomia Artesanal
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Immersive Grid */}
      <section id="galeria" className="py-40 max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 reveal">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-6 block">Galeria</span>
          <h2 className="text-6xl md:text-8xl font-display italic text-brand-light">Sabor em Movimento</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
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
            <div key={item.id} className="reveal group relative overflow-hidden rounded-3xl border border-white/5 bg-surface">
              {item.type === 'video' ? (
                <video 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  autoPlay muted loop playsInline
                >
                  <source src={`https://drive.google.com/uc?export=download&id=${item.id}`} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={`https://lh3.googleusercontent.com/d/${item.id}`} 
                  alt="Dona Bartô" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Dark Luxury */}
      <section id="depoimentos" className="py-40 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 reveal">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-6 block">Depoimentos</span>
            <h2 className="text-6xl md:text-8xl font-display leading-tight">Vozes de quem <br /><span className="italic text-brand-light">já provou.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Sueli Santos", comment: "Comida maravilhosa, tempero caseiro de verdade. As marmitas congeladas salvam minha semana!", role: "Google Review" },
              { name: "Marcos Oliveira", comment: "Excelente atendimento e a comida é divina. Recomendo muito o frango com quiabo.", role: "Google Review" },
              { name: "Juliana Lima", comment: "Melhor custo benefício da região. Comida saudável, fresquinha e entrega super rápida.", role: "Google Review" }
            ].map((t, i) => (
              <div key={i} className="reveal p-12 bg-paper rounded-[3rem] border border-white/5 relative">
                <div className="flex gap-1 mb-10">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-brand fill-brand" />)}
                </div>
                <p className="text-2xl font-display italic mb-12 leading-relaxed opacity-70">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-brand"></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-brand">{t.name}</div>
                    <div className="text-[8px] uppercase tracking-widest opacity-30 mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location - Dark Split */}
      <section id="localização" className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="reveal">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-8 block">Localização</span>
            <h2 className="text-6xl md:text-8xl font-display leading-tight mb-16">Onde a mágica <br /><span className="italic text-brand-light">acontece.</span></h2>
            
            <div className="space-y-16">
              <div className="flex gap-10">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 text-brand">Endereço</h4>
                  <p className="opacity-50 text-lg">Vila Romero, São Paulo - SP</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-20 mt-3">Atendemos toda a região com delivery.</p>
                </div>
              </div>
              
              <div className="flex gap-10">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 text-brand">Horário</h4>
                  <p className="opacity-50 text-lg">Segunda a Sábado: 10h às 18h</p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://www.google.com/maps/search/Dona+Bartô+Vila+Romero+São+Paulo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-brand text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-light transition-all inline-flex items-center gap-4 group"
                >
                  Google Maps <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal relative h-[700px] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3475841445!2d-46.6268846!3d-23.484004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593444444445%3A0x4444444444444444!2sDona%20Bart%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1709490000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer - Dark Luxury */}
      <footer className="py-40 border-t border-white/5 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-40">
            <div className="md:col-span-4">
              <img 
                src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
                alt="Dona Bartô" 
                className="h-12 w-auto mb-12 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="opacity-40 leading-relaxed mb-12 text-lg font-light">
                Gastronomia caseira e marmitas congeladas de alta qualidade. 
                Sabor, saúde e praticidade em cada prato.
              </p>
              <div className="flex gap-8">
                <a href="https://www.instagram.com/dona.barto?igsh=MWd1aDEweWNueXZ0aQ==" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/donabartocomidas/?locale=pt_BR" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-brand">Navegação</h4>
              <ul className="space-y-6 text-xs font-bold tracking-widest uppercase">
                <li><button onClick={() => scrollTo('início')} className="opacity-40 hover:opacity-100 hover:text-brand transition-all">Início</button></li>
                <li><button onClick={() => scrollTo('diferenciais')} className="opacity-40 hover:opacity-100 hover:text-brand transition-all">Diferenciais</button></li>
                <li><button onClick={() => scrollTo('sobre')} className="opacity-40 hover:opacity-100 hover:text-brand transition-all">Sobre</button></li>
                <li><button onClick={() => scrollTo('galeria')} className="opacity-40 hover:opacity-100 hover:text-brand transition-all">Galeria</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-brand">Contato</h4>
              <ul className="space-y-6 text-xs font-bold tracking-widest uppercase">
                <li className="flex items-center gap-4 opacity-40"><MapPin className="w-4 h-4" /> São Paulo, SP</li>
                <li className="flex items-center gap-4 opacity-40"><Phone className="w-4 h-4" /> (11) 95884-9891</li>
                <li className="flex items-center gap-4 opacity-40"><ShoppingBag className="w-4 h-4" /> Vila Romero</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 opacity-20 text-[8px] uppercase tracking-[0.5em] font-bold">
            <p>© 2026 Restaurante Dona Bartô.</p>
            <div className="flex gap-12 mt-8 md:mt-0">
              <span>Termos</span>
              <span>Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

