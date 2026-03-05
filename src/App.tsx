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
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-sub', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });

      // Scroll Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 75%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, heroRef);

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
    <div className="min-h-screen selection:bg-brand selection:text-white">
      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/message/UVT4XL33UPG3J1"
          target="_blank"
          rel="noreferrer"
          className="bg-brand text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform"
        >
          <ShoppingBag className="w-6 h-6" />
        </a>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
              src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
              alt="Dona Bartô Logo" 
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 text-white shadow-[0_0_15px_rgba(99,72,50,0.3)] hover:shadow-[0_0_20px_rgba(99,72,50,0.5)] pulse-brand"
            >
              Pedir Agora
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full glass p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {['Início', 'Diferenciais', 'Sobre', 'Galeria', 'Depoimentos', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-lg font-medium py-2 border-b border-white/5 text-left"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              className="bg-brand w-full py-4 rounded-xl text-center font-bold mt-4 text-white"
            >
              Pedir Agora
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="início" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1Q5dHotxXYYa95g91_A3IoFtZ2SJLxCDh" 
            alt="Comida Caseira Brasileira" 
            className="w-full h-full object-cover opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
            <Star className="w-4 h-4 text-brand-light fill-brand-light" />
            <span className="text-xs font-medium tracking-widest font-script text-lg md:text-xl text-brand-light">4.0 no Google Reviews</span>
          </div>
          
          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-medium leading-tight mb-6">
            O sabor da casa, <br />
            <span className="font-script text-brand-light text-5xl sm:text-6xl md:text-8xl lg:text-9xl block mt-2">onde você estiver.</span>
          </h1>
          
          <p className="hero-sub text-base md:text-xl opacity-70 max-w-2xl mx-auto mb-10">
            Você acha comida congelada sem graça? Deixa a gente te provar que isso é um mito. 
            Gastronomia caseira de verdade, com o carinho da Dona Bartô.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1"
              target="_blank"
              rel="noreferrer"
              className="group bg-brand text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(99,72,50,0.4)] transition-all pulse-brand"
            >
              Fazer Pedido
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/dona-barto-vila-romero/ea3fe6e5-290f-4c35-a6f7-b4dc985f353e"
              target="_blank"
              rel="noreferrer"
              className="glass px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
            >
              Ver no iFood
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Authority Marquee */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
          autoPlay muted loop playsInline
        >
          <source src="https://drive.google.com/uc?export=download&id=12_CKV0Hgs16uRy_g0-PJgJIdpZs6Zt0L" type="video/mp4" />
        </video>
        <div className="marquee relative z-10">
          <div className="marquee-content">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <span className="text-xl md:text-2xl font-display font-light opacity-10 flex items-center gap-8 italic">
                  Comida Caseira <Star className="w-4 h-4" /> Marmitas Congeladas <Star className="w-4 h-4" /> Sabor de Verdade <Star className="w-4 h-4" />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials (Bento Grid) */}
      <section id="diferenciais" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 reveal">
          <span className="text-brand-light font-script text-2xl md:text-3xl mb-2 block">Diferenciais</span>
          <h2 className="text-3xl md:text-6xl font-medium mb-6">Por que a Dona Bartô?</h2>
          <p className="opacity-60 max-w-xl mx-auto text-sm md:text-base">Elevamos o conceito de marmita com ingredientes frescos e processos artesanais.</p>
        </div>

        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Item 1 - Large */}
          <div className="bento-item md:col-span-2 md:row-span-2 flex flex-col justify-end relative overflow-hidden group bg-brand/5 border-brand/10">
            <div className="relative z-10">
              <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-brand-light mb-4 md:mb-6" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4 italic">Sabor de Vó, Praticidade de Hoje</h3>
              <p className="opacity-70 max-w-md text-sm md:text-base">Nossas receitas são passadas de geração em geração, adaptadas para o seu dia a dia corrido sem perder a essência.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bento-item flex flex-col justify-center text-center relative overflow-hidden group">
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              autoPlay muted loop playsInline
            >
              <source src="https://drive.google.com/uc?export=download&id=1MtmFSiw9eiqgVcPZoo4_Kgp8XOumlXcn" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <Clock className="w-10 h-10 text-brand-light mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-2 italic">Sempre Pronto</h3>
              <p className="text-sm opacity-60">Marmitas congeladas com tecnologia que preserva 100% dos nutrientes e sabor.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bento-item flex flex-col justify-center text-center relative overflow-hidden group">
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              autoPlay muted loop playsInline
            >
              <source src="https://drive.google.com/uc?export=download&id=1vCNuvmMjYcR3ym_5HLRsBhjJS604If3J" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <MapPin className="w-10 h-10 text-brand-light mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-2 italic">Delivery Ágil</h3>
              <p className="text-sm opacity-60">Entregamos em toda a região com rapidez para você não esperar pela sua fome.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bento-item md:col-span-1 flex flex-col justify-end relative overflow-hidden group bg-brand/10 border-brand/20">
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              autoPlay muted loop playsInline
            >
              <source src="https://drive.google.com/uc?export=download&id=1Pa4mL0nPcpFkaEc5VUqt6ytAmgB1rJ_S" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <Heart className="w-10 h-10 text-brand-light mb-6" />
              <h3 className="text-xl font-medium mb-2 italic">Feito com Amor</h3>
              <p className="text-sm opacity-60">Cada marmita é montada individualmente, garantindo o padrão Dona Bartô.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1KABGox_W8NjcpWXOLzHttTiWc5lGi5IU" 
                alt="Cozinha Artesanal" 
                className="rounded-3xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass p-6 md:p-8 rounded-2xl hidden sm:block">
                <div className="text-3xl md:text-4xl font-bold text-brand-light">10k+</div>
                <div className="text-xs md:text-sm opacity-60">Marmitas Entregues</div>
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2">
            <span className="text-brand-light font-script text-2xl md:text-3xl mb-2 block">Nossa História</span>
            <h2 className="text-3xl md:text-6xl font-medium mb-6 md:mb-8">A Dona Bartô é mais que um restaurante.</h2>
            <p className="text-base md:text-lg opacity-70 mb-6 md:mb-8 leading-relaxed">
              Nascemos da vontade de levar comida de verdade para quem não tem tempo de cozinhar. 
              Acreditamos que a alimentação é o combustível da alma, e por isso não abrimos mão de temperos naturais, 
              zero conservantes e muito, muito carinho.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="font-medium text-lg md:text-xl mb-2 italic text-brand-light">Caseiro</h4>
                <p className="text-xs md:text-sm opacity-60">Temperos frescos e receitas tradicionais.</p>
              </div>
              <div>
                <h4 className="font-medium text-lg md:text-xl mb-2 italic text-brand-light">Saudável</h4>
                <p className="text-xs md:text-sm opacity-60">Equilíbrio nutricional em cada porção.</p>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href="https://wa.me/message/UVT4XL33UPG3J1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Quero experimentar <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 reveal">
          <span className="text-brand-light font-script text-2xl md:text-3xl mb-2 block">Nossa Cozinha</span>
          <h2 className="text-3xl md:text-6xl font-medium mb-6">Sabor em Movimento</h2>
          <p className="opacity-60 max-w-xl mx-auto text-sm md:text-base">Veja um pouco do carinho e cuidado que colocamos em cada preparo.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Videos */}
          {[
            { id: '1MtmFSiw9eiqgVcPZoo4_Kgp8XOumlXcn', type: 'video' },
            { id: '1vCNuvmMjYcR3ym_5HLRsBhjJS604If3J', type: 'video' },
            { id: '1Pa4mL0nPcpFkaEc5VUqt6ytAmgB1rJ_S', type: 'video' },
            { id: '12_CKV0Hgs16uRy_g0-PJgJIdpZs6Zt0L', type: 'video' },
            /* Photos */
            { id: '1Q5dHotxXYYa95g91_A3IoFtZ2SJLxCDh', type: 'image' },
            { id: '1qVQEsdc6UQevIi6yaQOBXI0na9CAjutC', type: 'image' },
            { id: '1KABGox_W8NjcpWXOLzHttTiWc5lGi5IU', type: 'image' },
            { id: '1hvRj55rchPtMse6Ll_OOLDYBZACfqXlC', type: 'image' }
          ].map((item, index) => (
            <div key={item.id} className="reveal group relative aspect-[9/16] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              {item.type === 'video' ? (
                <video 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster={`https://lh3.googleusercontent.com/d/${item.id}`}
                >
                  <source src={`https://drive.google.com/uc?export=download&id=${item.id}`} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={`https://lh3.googleusercontent.com/d/${item.id}`} 
                  alt="Dona Bartô Real" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-sm font-medium tracking-wider uppercase">Dona Bartô Real</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a 
            href="https://www.instagram.com/dona.barto?igsh=MWd1aDEweWNueXZ0aQ==" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-light font-medium border-b border-brand-light/30 pb-1 hover:border-brand-light transition-all"
          >
            Ver mais no nosso Instagram <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.02] pointer-events-none"
          autoPlay muted loop playsInline
        >
          <source src="https://drive.google.com/uc?export=download&id=1Pa4mL0nPcpFkaEc5VUqt6ytAmgB1rJ_S" type="video/mp4" />
        </video>
        <div className="text-center mb-12 md:mb-20 reveal relative z-10">
          <span className="text-brand-light font-script text-2xl md:text-3xl mb-2 block">Prova Social</span>
          <h2 className="text-3xl md:text-6xl font-medium mb-6">Quem prova, ama.</h2>
          <p className="opacity-60 text-sm md:text-base">Confira o que nossos clientes dizem sobre a experiência Dona Bartô.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { name: "Sueli Santos", comment: "Comida maravilhosa, tempero caseiro de verdade. As marmitas congeladas salvam minha semana!", role: "Google Review" },
            { name: "Marcos Oliveira", comment: "Excelente atendimento e a comida é divina. Recomendo muito o frango com quiabo.", role: "Google Review" },
            { name: "Juliana Lima", comment: "Melhor custo benefício da região. Comida saudável, fresquinha e entrega super rápida.", role: "Google Review" }
          ].map((t, i) => (
            <div key={i} className="reveal glass p-10 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-brand fill-brand" />)}
              </div>
              <p className="text-lg italic mb-8 opacity-80">"{t.comment}"</p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm opacity-50">{t.role}</div>
              </div>
              <div className="absolute top-10 right-10 opacity-10">
                <Heart className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section id="localização" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal">
            <span className="text-brand-light font-script text-2xl md:text-3xl mb-2 block">Onde Estamos</span>
            <h2 className="text-3xl md:text-6xl font-medium mb-6 md:mb-8">Venha nos visitar ou peça em casa.</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 md:p-4 rounded-2xl">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-light" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-medium mb-1">Endereço</h4>
                  <p className="opacity-60 text-sm md:text-base">Vila Romero, São Paulo - SP</p>
                  <p className="opacity-40 text-xs md:text-sm mt-1">Atendemos toda a região com delivery rápido.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 md:p-4 rounded-2xl">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-light" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-medium mb-1">Horário de Funcionamento</h4>
                  <p className="opacity-60 text-sm md:text-base">Segunda a Sábado: 10h às 18h</p>
                </div>
              </div>
              <div className="pt-2 md:pt-4">
                <a 
                  href="https://www.google.com/maps/search/Dona+Bartô+Vila+Romero+São+Paulo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-transform text-sm md:text-base"
                >
                  Abrir no Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 glass">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3475841445!2d-46.6268846!3d-23.484004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593444444445%3A0x4444444444444444!2sDona%20Bart%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1709490000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-70"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20 glass p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 pointer-events-none">
              <p className="text-xs md:text-sm font-medium italic">"O melhor tempero da Vila Romero está aqui."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://lh3.googleusercontent.com/d/1hvRj55rchPtMse6Ll_OOLDYBZACfqXlC" 
              alt="Dona Bartô Background" 
              className="w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand/5"></div>
          </div>
          <span className="text-brand-light font-script text-3xl md:text-4xl mb-4 block reveal">Faça seu Pedido</span>
          <h2 className="text-3xl md:text-7xl font-medium mb-6 md:mb-8 reveal">Pronto para mudar sua rotina?</h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 md:mb-12 max-w-2xl mx-auto reveal">
            Peça agora e descubra por que somos a escolha número 1 em comida caseira na região.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
            <a 
              href="https://wa.me/message/UVT4XL33UPG3J1" 
              className="bg-brand text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Pedir pelo WhatsApp
            </a>
            <div className="flex items-center gap-4">
              <Phone className="text-brand w-5 h-5 md:w-6 md:h-6" />
              <span className="font-bold text-base md:text-lg">(11) 95884-9891</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/15oBXw1JVm8hv2YBgQjTO3Y7Sp335ECuc" 
                  alt="Dona Bartô Logo" 
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="opacity-50 max-w-sm mb-8">
                Gastronomia caseira e marmitas congeladas de alta qualidade. 
                Sabor, saúde e praticidade em cada prato.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/dona.barto?igsh=MWd1aDEweWNueXZ0aQ==" className="glass p-3 rounded-full hover:bg-brand-light hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/donabartocomidas/?locale=pt_BR" className="glass p-3 rounded-full hover:bg-brand-light hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 italic text-brand-light">Links Rápidos</h4>
              <ul className="space-y-4 opacity-50 text-sm">
                <li><button onClick={() => scrollTo('início')}>Início</button></li>
                <li><button onClick={() => scrollTo('diferenciais')}>Diferenciais</button></li>
                <li><button onClick={() => scrollTo('sobre')}>Sobre Nós</button></li>
                <li><button onClick={() => scrollTo('galeria')}>Galeria</button></li>
                <li><button onClick={() => scrollTo('depoimentos')}>Depoimentos</button></li>
                <li><button onClick={() => scrollTo('localização')}>Localização</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 italic text-brand-light">Contato</h4>
              <ul className="space-y-4 opacity-50 text-sm">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> São Paulo, SP</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (11) 95884-9891</li>
                <li className="flex items-center gap-2"><ShoppingBag className="w-4 h-4" /> Vila Romero</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 opacity-30 text-xs">
            <p>© 2026 Restaurante Dona Bartô. Todos os direitos reservados.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>Termos de Uso</span>
              <span>Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
